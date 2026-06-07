/* ========================================
   五形Hub · 应用层
   混合题型引擎 + AI问答 + 完整渲染
   ======================================== */

(function() {
    'use strict';

    const TOTAL = 25;
    const state = {
        page: 'age', idx: 0, ans: new Array(TOTAL).fill(null),
        result: null, trans: false, shared: false, ageGroup: null, city: '北京'
    };

    const $ = s => document.querySelector(s);
    const $$ = s => document.querySelectorAll(s);
    const P = {};
    ['age','game','tcm','quiz','loading','result','detail','alert'].forEach(k => { P[k] = document.getElementById('page-' + k); });

    function go(id) {
        if (state.trans) return;
        state.trans = true; state.page = id;
        Object.values(P).forEach(p => { if (p) p.classList.remove('active'); });
        requestAnimationFrame(() => { if (P[id]) P[id].classList.add('active'); state.trans = false; });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // 主题
    function setTheme(g) {
        state.ageGroup = g;
        document.body.dataset.theme = g;
        ['result','detail','alert','quiz'].forEach(k => {
            if (P[k]) { P[k].classList.remove('mode-young','mode-adult'); P[k].classList.add('mode-' + g); }
        });
    }

    // ===== 统一年龄选择器 =====
    const $ageSlider = document.getElementById('age-slider');
    const $ageValue = document.getElementById('age-value');
    const $ageHint = document.getElementById('age-mode-hint');
    const $ageSaved = document.getElementById('age-saved-hint');
    let selectedAge = 25;

    // 显示保存状态
    function updateAgeSavedHint() {
        if (!$ageSaved) return;
        const saved = localStorage.getItem('wuxing_result');
        if (saved) {
            try {
                const data = JSON.parse(saved);
                if (data.character) {
                    $ageSaved.textContent = '📎 上次结果：' + data.character + ' · 点击"开始测评"重测';
                    $ageSaved.style.display = 'block';
                    return;
                }
            } catch(e) {}
        }
        $ageSaved.style.display = 'none';
    }

    if ($ageSlider) {
        $ageSlider.addEventListener('input', function() {
            selectedAge = parseInt(this.value);
            $ageValue.textContent = selectedAge;
            const isYoung = selectedAge <= 35;
            $ageValue.className = 'age-value ' + (isYoung ? 'young' : 'adult');
            $ageHint.className = 'age-mode-hint ' + (isYoung ? 'young' : 'adult');
            $ageHint.textContent = isYoung ? '🎮 游戏模式' : '🏛️ 中医养生模式';
        });
    }

    // 确认年龄按钮
    const $ageConfirm = document.getElementById('btn-age-confirm');
    if ($ageConfirm) {
        $ageConfirm.addEventListener('click', function() {
            const isYoung = selectedAge <= 35;
            setTheme(isYoung ? 'young' : 'adult');
            // 保存年龄到localStorage
            try { localStorage.setItem('wuxing_age', selectedAge.toString()); } catch(e) {}
            go(isYoung ? 'game' : 'tcm');
        });
    }

    function bindStartButtons() {
        ["btn-start-game","btn-start-tcm","btn-restart"].forEach(function(id) {
            var el = document.getElementById(id);
            if (el) el.onclick = function() { start(); return false; };
        });
    }
    bindStartButtons();
    setTimeout(bindStartButtons, 300);

    function start() {
        state.idx = 0; state.ans = new Array(TOTAL).fill(null); state.result = null; state.shared = false;
        try { localStorage.removeItem("wuxing_result"); } catch(e) {}
        if (window.history && window.history.replaceState) window.history.replaceState(null, "", window.location.pathname);
        go("quiz");
        setTimeout(function() { renderQ(0); }, 150);
    }
    // ===== localStorage持久化 =====
    function saveResult(r) {
        try {
            const data = {
                character: r.character,
                element: r.element,
                elementTotal: r.elementTotal,
                primaryConstitution: r.primaryConstitution,
                icon: r.icon,
                color: r.color,
                bg: r.bg,
                characterTitle: r.characterTitle,
                organs: r.organs,
                season: r.season,
                personality: r.personality,
                traits: r.traits,
                strengths: r.strengths,
                weaknesses: r.weaknesses,
                suitableCareers: r.suitableCareers,
                teamRole: r.teamRole,
                advice: r.advice,
                plan: r.plan,
                do: r.do,
                dont: r.dont,
                growthAreas: r.growthAreas,
                isLinDaiyu: r.isLinDaiyu,
                timestamp: new Date().toISOString()
            };
            localStorage.setItem('wuxing_result', JSON.stringify(data));
            // 也保存完整答题数据（用于分享恢复）
            localStorage.setItem('wuxing_answers', JSON.stringify(state.ans));
        } catch(e) { /* localStorage full or unavailable */ }
    }

    function loadSavedResult() {
        try {
            const saved = localStorage.getItem('wuxing_result');
            if (!saved) return null;
            const data = JSON.parse(saved);
            // 检查是否过期（7天）
            if (data.timestamp) {
                const days = (new Date() - new Date(data.timestamp)) / 86400000;
                if (days > 7) { localStorage.removeItem('wuxing_result'); return null; }
            }
            return data;
        } catch(e) { return null; }
    }

    function hasSavedQuiz() {
        try {
            const answers = localStorage.getItem('wuxing_answers');
            if (!answers) return false;
            const a = JSON.parse(answers);
            return Array.isArray(a) && a.filter(v => v !== null).length > 5;
        } catch(e) { return false; }
    }

    // 在渲染结果后保存
    function saveResultAfterRender(r) {
        saveResult(r);
    }

    // ===== 答题引擎 =====
    const LIKERT = ['完全不符','不太符合','有时符合','比较符合','非常符合'];
    const LETTERS = ['A','B','C','D','E'];

    function renderQ(idx) {
        const QQ = window.QUESTIONS ? window.QUESTIONS : QUESTIONS;
        const q = QQ[idx];
        if (!q) {
            console.error('题目数据未加载', idx);
            const qt = $('#q-text'); if (qt) qt.textContent = '题目加载失败，请刷新页面重试';
            return;
        }

        // 进度
        const pct = (idx / TOTAL) * 100;
        const fill = $('#qpb-fill'); if (fill) fill.style.width = Math.max(3, pct) + '%';
        const pt = $('#qpb-text'); if (pt) pt.textContent = (idx+1) + '/' + TOTAL;
        const qn = $('#q-number'); if (qn) qn.textContent = '第 ' + (idx+1) + ' 题';
        // 附加进度信息：剩余题数和预计时间
        const remaining = TOTAL - idx - 1;
        const estMin = Math.ceil((TOTAL - idx) * 0.12); // 每题约7秒
        const extra = $('#q-extra');
        if (extra) {
            if (remaining > 0) {
                extra.textContent = '剩余 ' + remaining + ' 题 · 约' + estMin + '分钟';
                extra.style.display = 'block';
            } else {
                extra.style.display = 'none';
            }
        }
        const qt = $('#q-text'); if (qt) qt.textContent = q.text;
        const cat = $('#quiz-category');
        if (cat) cat.textContent = q.category;

        // 选项
        const opts = $('#q-options');
        if (!opts) return;
        opts.innerHTML = '';
        const prev = state.ans[idx];
        const isSingle = q.type === 'single';

        if (isSingle && q.options) {
            // 单项选择 A/B/C/D/E
            q.options.forEach((opt, i) => {
                const btn = document.createElement('button');
                btn.className = 'option-btn opt-single';
                if (prev === i) btn.classList.add('selected');
                btn.innerHTML = '<span class="opt-letter">' + LETTERS[i] + '</span><span class="opt-body">' + opt.substring(2).trim() + '</span>';
                btn.addEventListener('click', () => click(idx, i));
                opts.appendChild(btn);
            });
        } else {
            // Likert量表
            LIKERT.forEach((lab, i) => {
                const btn = document.createElement('button');
                btn.className = 'option-btn';
                if (prev === i) btn.classList.add('selected');
                btn.innerHTML = '<span class="option-dot"></span><span class="option-label">' + lab + '</span>';
                btn.addEventListener('click', () => click(idx, i));
                opts.appendChild(btn);
            });
        }

        // 动画
        const c = $('.q-container');
        if (c) { c.style.opacity = '0'; setTimeout(() => { c.style.opacity = '1'; c.style.transition = 'opacity .35s'; }, 50); }
    }

    function click(qi, val) {
        state.ans[qi] = val;
        $$('.option-btn').forEach((b, i) => b.classList.toggle('selected', i === val));
        const done = state.ans.filter(a => a !== null).length;
        if (done >= TOTAL) {
            setTimeout(() => { go('loading'); loadAnim(); }, 260);
        } else {
            let nxt = qi + 1;
            while (nxt < TOTAL && state.ans[nxt] !== null) nxt++;
            if (nxt < TOTAL) { state.idx = nxt; setTimeout(() => renderQ(nxt), 240); }
        }
    }

    // 键盘
    document.addEventListener('keydown', e => {
        if (state.page !== 'quiz') return;
        if (e.key >= '1' && e.key <= '5') {
            const btns = $('#q-options')?.querySelectorAll('.option-btn');
            if (btns?.[parseInt(e.key)-1]) btns[parseInt(e.key)-1].click();
        }
        // A-E 键盘快捷选择
        const letters = {a:0,b:1,c:2,d:3,e:4};
        if (e.key.toLowerCase() in letters) {
            const btns = $('#q-options')?.querySelectorAll('.option-btn');
            if (btns?.[letters[e.key.toLowerCase()]]) btns[letters[e.key.toLowerCase()]].click();
        }
    });

    // ===== 加载 =====
    const LD = [
        { t: '正在解析你的五行能量...', d: '木火土金水，各有其主' },
        { t: '计算你的体质倾向...', d: '九种体质辨识中' },
        { t: '分析你的人格特质...', d: '发现你的先天类型' },
        { t: '生成专属档案...', d: '角色·职场·防寒' }
    ];
    function loadAnim() {
        let step = 0;
        const bar = $('#ld-fill');
        if (bar) { bar.style.animation = 'none'; void bar.offsetWidth; bar.style.animation = 'ldb 2.8s ease forwards'; }
        const iv = setInterval(() => {
            step++;
            if (step < LD.length) {
                const t = $('#ld-title'); if (t) t.textContent = LD[step].t;
                const d = $('#ld-desc'); if (d) d.textContent = LD[step].d;
            }
        }, 700);
        setTimeout(() => {
            clearInterval(iv);
            const r = calculateType(state.ans);
            state.result = r;
            go('result'); renderR(r);
        }, 3000);
    }

    // ===== 分享 =====
    const C = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    function enc(a) { let r=''; for(let i=0;i<a.length;i+=2){const x=a[i]||0,y=a[i+1]!==undefined?a[i+1]:0;r+=C[x*5+y];} return r; }
    function dec(s) { const a=[]; for(let ch of s){const v=C.indexOf(ch);if(v>=0){a.push(Math.floor(v/5),v%5);}} while(a.length<TOTAL) a.push(2); return a.slice(0,TOTAL); }
    function shareUrl() { if(!state.ans||state.ans.filter(a=>a!==null).length<TOTAL) return ''; return window.location.origin+window.location.pathname+'#s='+enc(state.ans); }
    function tryLoad() {
        const h=window.location.hash;
        if(!h?.startsWith('#s=')) return false;
        const a=dec(h.replace('#s=','')); if(a.length<10) return false;
        state.ans=a; state.shared=true;
        const r=calculateType(a); state.result=r;
        go('result'); renderR(r);
        return true;
    }
    function copyLink() {
        const u=shareUrl(); if(!u) return toast('请先完成测评');
        if(navigator.clipboard?.writeText) navigator.clipboard.writeText(u).then(()=>toast('✅ 链接已复制！')).catch(()=>fall(u)); else fall(u);
    }
    function fall(t) {const ta=document.createElement('textarea');ta.value=t;ta.style.cssText='position:fixed;opacity:0';document.body.appendChild(ta);ta.select();document.execCommand('copy');document.body.removeChild(ta);toast('✅ 已复制！');}
    function toast(m){let t=$('#toast');if(!t){t=document.createElement('div');t.id='toast';t.className='toast';document.body.appendChild(t);}t.textContent=m;t.classList.add('show');clearTimeout(t._timer);t._timer=setTimeout(()=>t.classList.remove('show'),2500);}

    // ===== 渲染结果 =====
    function renderR(r) {
        if (!r) return;

        // 分享横幅
        const sb = $('#res-share');
        if (sb) {
            if (state.shared) {
                sb.className = 'res-share';
                sb.innerHTML = '<span>📎 好友分享的结果</span><button class="btn btn-sm btn-primary" onclick="start()">我也要测</button>';
            } else { sb.className = 'res-share hidden'; }
        }

        // 角色卡
        showChar(r);

        // 头部
        const badge = $('#res-badge');
        if (badge) {
            badge.textContent = r.icon + ' ' + r.element + '形人 · ' + r.character;
            badge.style.background = r.bg || '';
            badge.style.color = r.color || '';
        }
        const icon = $('#res-icon'); if (icon) icon.textContent = r.icon;
        const name = $('#res-name'); if (name) name.textContent = r.character;
        const sub = $('#res-sub'); if (sub) sub.textContent = (r.characterTitle||'') + ' | 五行' + r.elementTotal + '分 | ' + r.primaryConstitution;

        // 四轴
        const ax = $('#res-axes');
        if (ax) {
            ax.innerHTML = '';
            [{k:'style',l:'思维',a:'发散·开拓',b:'聚焦·严谨'},{k:'energy',l:'能量',a:'外放·社交',b:'内敛·独处'},{k:'constitution',l:'体质',a:'强健·稳固',b:'敏感·细腻'},{k:'temperament',l:'情绪',a:'平和·稳定',b:'多思·感性'}].forEach(m => {
                const v=r.axisResults[m.k], lab=['divergent','extrovert','robust','stable'].includes(v)?m.a:m.b, side=['divergent','extrovert','robust','stable'].includes(v)?'a':'b';
                const d=document.createElement('div');d.className='axis-chip '+side;d.innerHTML='<span class="axis-label">'+m.l+'</span><span class="axis-val">'+lab+'</span>';ax.appendChild(d);
            });
        }
        const tags = $('#res-tags'); if (tags) tags.innerHTML = (r.traits||[]).slice(0,4).map(t=>'<span class="tag">'+t+'</span>').join('');

        // 卡片区块
        const pp = $('#res-personality'); if (pp) pp.textContent = r.personality||'';
        const jobs = $('#res-careers'); if (jobs) jobs.innerHTML = (r.suitableCareers||'').split('、').filter(Boolean).map(c=>'<span class="career-tag">'+c.trim()+'</span>').join('');
        const tm = $('#res-team'); if (tm) tm.textContent = r.teamRole||'';
        const cons = $('#res-cons'); if (cons) cons.innerHTML = '<div><strong>体质倾向：</strong>'+r.primaryConstitution+'</div><div><strong>对应脏腑：</strong>'+(r.organs||'')+'</div><div><strong>多发季节：</strong>'+(r.season||'')+'</div><div><strong>体型特征：</strong>'+(r.physical||'')+'</div>';

        // 防寒
        const plan = $('#res-plan');
        if (plan && r.plan) {
            plan.innerHTML = '';
            ['📍 '+r.plan.keyAreas, ...(r.plan.clothing||[]).slice(0,2), ...(r.plan.diet||[]).slice(0,1)].forEach((item,i)=>{
                const d=document.createElement('div');d.className='plan-item';d.innerHTML='<span class="plan-num">'+(i+1)+'.</span><span>'+item+'</span>';plan.appendChild(d);
            });
        }

        updateAlert(r);
        renderCharacterArt(r);

        // 主题适配
        if (state.ageGroup === 'young') {
            document.querySelectorAll('.rc-title').forEach(el => {
                if(el.textContent.includes('职业')) el.textContent='⚔️ 隐藏技能';
                if(el.textContent.includes('体质')) el.textContent='🧬 角色属性';
                if(el.textContent.includes('防寒')) el.textContent='🛡️ 防寒装备';
            });
        }

        window.scrollTo({top:0});
        saveResult(r);
    }

    function showChar(r) {
        const card = $('#char-card'); if(!card) return;
        if(!r.isLinDaiyu) {card.classList.add('hidden');return;}
        card.classList.remove('hidden');
        const ld=window.LIN_DAIYU||{};
        const g=id=>document.getElementById(id);
        const e1=g('cc-name');if(e1)e1.textContent=ld.name||'林黛玉';
        const e2=g('cc-title');if(e2)e2.textContent=ld.title||'';
        const e3=g('cc-poem');if(e3)e3.textContent=ld.poem||'';
        const e4=g('cc-tags');if(e4)e4.innerHTML=(ld.tags||[]).map(t=>'<span class="char-tag">'+t+'</span>').join('');
        const e5=g('cc-desc');if(e5)e5.textContent=ld.personality||'';
    }

    function updateAlert(r) {
        const b=$('#alert-banner'); if(!b) return;
        const ad=typeof generateAlert!=='undefined'?generateAlert(state.city,r):null;
        if(ad&&ad.level&&ad.level.level>=2) {
            b.className='alert-banner';
            b.innerHTML='<div class="alert-banner-inner" style="background:'+ad.level.bg+';border-left:4px solid '+ad.level.color+'"><div class="alert-banner-header"><span class="alert-level-icon">'+ad.level.icon+'</span><span class="alert-level-name" style="color:'+ad.level.color+'">'+ad.level.name+'</span><span class="alert-city">'+ad.city+'</span><span class="alert-temp">'+ad.currentTemp+'°C</span><span class="alert-drop">↓'+ad.drop+'°C</span></div><div class="alert-banner-body"><span class="alert-element">'+ad.elementIcon+' '+ad.elementName+'</span><span class="alert-msg">'+(ad.alertContent?.action||'')+'</span></div><button class="alert-detail-btn" onclick="showAlert()">查看详情 →</button></div>';
        } else { b.className='alert-banner hidden'; }
    }

    // ===== AI问答 =====
    function renderQA() {
        const box = $('#qa-box'); if(!box) return;
        box.innerHTML = `
            <div class="qa-header">💬 五形智能助手</div>
            <div class="qa-msgs" id="qa-msgs">
                <div class="qa-msg qa-bot">你好！我是五形Hub智能助手～</div>
                <div class="qa-msg qa-bot">你可以问我：<br>• "今天降温了，容易感冒怎么办？"<br>• "XX城市今天多少度？"<br>• "怎么测体质？"<br>• "订阅每天提醒"</div>
            </div>
            <div class="qa-input-row">
                <input type="text" id="qa-input" class="qa-input" placeholder="输入你的问题..." autocomplete="off">
                <button id="qa-send" class="qa-send">发送</button>
            </div>
        `;
        setTimeout(() => {
            const input = document.getElementById('qa-input');
            const send = document.getElementById('qa-send');
            const msgs = document.getElementById('qa-msgs');
            function sendMsg() {
                const text = input.value.trim();
                if(!text) return;
                msgs.innerHTML += '<div class="qa-msg qa-user">' + text + '</div>';
                input.value = '';
                msgs.scrollTop = msgs.scrollHeight;
                // 匹配答案
                const answer = typeof findAnswer === 'function' ? findAnswer(text, state.city) : '感谢你的提问！先完成体质测试获取专属方案吧～';
                setTimeout(() => {
                    msgs.innerHTML += '<div class="qa-msg qa-bot">' + answer + '</div>';
                    msgs.scrollTop = msgs.scrollHeight;
                }, 400);
            }
            if(send) send.addEventListener('click', sendMsg);
            if(input) input.addEventListener('keydown', e => { if(e.key==='Enter') sendMsg(); });
        }, 50);
    }

    // ===== 详情 =====
    function renderDetail(r) {
        if(!r) return;
        const g=id=>document.getElementById(id);
        g('dt-icon')&&(g('dt-icon').textContent=r.icon);
        g('dt-name')&&(g('dt-name').textContent=r.element+'形人 · '+r.character);
        g('dt-code')&&(g('dt-code').textContent=r.element+'形 · '+r.codeShort);
        g('dt-arch')&&(g('dt-arch').textContent=r.character+'（'+(r.characterTitle||'')+'） | '+r.primaryConstitution);
        g('dt-personality')&&(g('dt-personality').innerHTML='<p class="d-text">'+(r.personality||'')+'</p><div class="trait-list">'+(r.traits||[]).map(t=>'<span class="trait-badge">'+t+'</span>').join('')+'</div>');
        g('dt-work')&&(g('dt-work').innerHTML='<div class="detail-cols"><div class="detail-col"><h4 class="col-title green">✅ 核心优势</h4><ul class="col-list">'+(r.strengths||[]).map(s=>'<li>'+s+'</li>').join('')+'</ul></div><div class="detail-col"><h4 class="col-title red">⚠️ 注意短板</h4><ul class="col-list">'+(r.weaknesses||[]).map(s=>'<li>'+s+'</li>').join('')+'</ul></div></div><div class="career-box" style="margin-top:.6rem"><h4 class="col-title">💼 适合职业</h4><div class="career-tags">'+(r.suitableCareers||'').split('、').filter(Boolean).map(c=>'<span class="career-tag">'+c.trim()+'</span>').join('')+'</div></div><div class="detail-meta"><div class="meta-item"><strong>团队角色：</strong>'+(r.teamRole||'')+'</div><div class="meta-item"><strong>对应脏腑：</strong>'+(r.organs||'')+'</div><div class="meta-item"><strong>多发季节：</strong>'+(r.season||'')+'</div></div>');
        g('dt-cons')&&(g('dt-cons').innerHTML='<p class="d-text"><strong>人格画像：</strong>'+(r.personality||'')+'</p><p class="d-text" style="margin-top:.4rem"><strong>体型特征：</strong>'+(r.physical||'')+'</p><p class="d-text" style="margin-top:.4rem"><strong>代表性人物：</strong>'+(r.figures||r.character)+'</p>');
        const pf=g('dt-plan');
        if(pf&&r.plan){
            pf.innerHTML='';
            [{t:'⚠️ 重点防护',i:[r.plan.keyAreas]},{t:'🧥 衣物建议',i:r.plan.clothing},{t:'🍵 饮食调理',i:r.plan.diet},{t:'🧘 生活习惯',i:r.plan.habits},{t:'🚨 应急方案',i:r.plan.emergency}].forEach(s=>{
                const cat=document.createElement('div');cat.className='plan-category';cat.innerHTML='<div class="plan-category-title">'+s.t+'</div>';
                (s.i||[]).forEach((item,i)=>{const d=document.createElement('div');d.className='plan-item';d.innerHTML='<span class="plan-num">'+(i+1)+'.</span><span>'+item+'</span>';cat.appendChild(d);});
                pf.appendChild(cat);
            });
        }
        g('dt-advice')&&(g('dt-advice').textContent=r.advice||'');
        g('dt-do')&&(g('dt-do').innerHTML='<div class="do-list"><h4>✅ 宜</h4><ul>'+(r.do||[]).map(d=>'<li>'+d+'</li>').join('')+'</ul></div><div class="dont-list"><h4>❌ 不宜</h4><ul>'+(r.dont||[]).map(d=>'<li>'+d+'</li>').join('')+'</ul></div>');
        g('dt-growth')&&(g('dt-growth').innerHTML=(r.growthAreas||[]).map((g,i)=>'<div class="growth-item"><span class="growth-num">'+(i+1)+'</span><span>'+g+'</span></div>').join(''));
        g('dt-figures')&&(g('dt-figures').textContent=r.figures||r.character);
        const grid=g('dt-grid');
        if(grid&&window.ELEMENT_DATA){
            grid.innerHTML='';
            Object.entries(window.ELEMENT_DATA).forEach(([k,ed])=>{
                const card=document.createElement('div');card.className='type-mini-card'+(k===r.primaryElement?' active':'');
                card.innerHTML='<div class="type-mini-icon">'+ed.icon+'</div><div class="type-mini-name">'+ed.character+'</div><div class="type-mini-sub">'+ed.element+'形</div>';grid.appendChild(card);
            });
        }
        window.scrollTo({top:0});
    }

    window.showAlert=function(){go('alert');if(typeof renderAlertMonitor==='function')renderAlertMonitor(state.result);};

    // ===== 角色艺术形象（双风格） =====
    function renderCharacterArt(r) {
        if (!r) return;
        const box = $('#char-art-box');
        if (!box) return;

        const ageTheme = state.ageGroup || 'adult';

        // 如果characters.js未加载，显示文字版
        if (!window.getCharacterArt || !window.CHAR_ART) {
            box.innerHTML = '<div class="char-art-panel" style="background:rgba(128,128,128,.05);border-color:rgba(128,128,128,.1)">' +
                '<div style="font-size:2.5rem;padding:.5rem">' + (r.icon||'🧬') + '</div>' +
                '<div class="char-art-info">' +
                '<div class="char-art-element">' + (r.element||'') + '形人</div>' +
                '<div class="char-art-name" style="font-size:1.1rem;font-weight:800">' + (r.character||'') + '</div>' +
                '<div class="char-art-title">' + (r.characterTitle||'') + '</div>' +
                '</div></div>';
            return;
        }

        const art = window.getCharacterArt(r.primaryElement, ageTheme);
        if (!art) return;

        box.innerHTML = '<div class="char-art-panel char-art-' + ageTheme + '" style="background:'+art.bg+';border-color:'+art.borderColor+'">' +
            '<div class="char-art-svg">'+art.svg+'</div>' +
            '<div class="char-art-info">' +
            '<div class="char-art-element" style="color:'+art.color+'">'+r.icon+' '+r.element+'形人</div>' +
            '<div class="char-art-name" style="color:'+(ageTheme==='young'?'#e8e8f0':'var(--text)')+'">'+r.character+'</div>' +
            '<div class="char-art-title">'+(r.characterTitle||'')+'</div>' +
            '<div class="char-art-tags">'+(r.traits||[]).slice(0,3).map(t=>'<span class="char-tag-' + ageTheme + '" style="background:'+art.color+'20;color:'+art.color+';padding:2px 8px;border-radius:10px;font-size:11px">'+t+'</span>').join('')+'</div></div></div>';
    }

    // ===== 下载报告 =====
    function downloadReport() {
        const r = state.result;
        if (!r) return toast('请先完成测评');
        const lines = [
            '═══════════════════════════════',
            '   五形Hub · 体质人格报告',
            '═══════════════════════════════','',
            '【五行类型】'+r.element+'形人',
            '【代表角色】'+r.character,
            '【体质倾向】'+r.primaryConstitution,
            '【五行总分】'+r.elementTotal+'/25',
            '【对应脏腑】'+(r.organs||''),
            '【多发季节】'+(r.season||''),'',
            '【人格画像】',r.personality||'','',
            '【核心优势】',...(r.strengths||[]).map(s=>'  ✓ '+s),'',
            '【注意短板】',...(r.weaknesses||[]).map(s=>'  △ '+s),'',
            '【适合职业】','  '+(r.suitableCareers||''),'',
            '【团队角色】','  '+(r.teamRole||''),'',
            '【防寒要点】','  '+(r.plan?.keyAreas||''),...(r.plan?.clothing||[]).map(s=>'  • '+s),'',
            '【养生建议】','  '+(r.advice||''),'',
            '═══════════════════════════════',
            '五形Hub · 体质人格探索',
            new Date().toLocaleDateString('zh-CN'),
            '═══════════════════════════════'
        ];
        const blob = new Blob([lines.join('\n')],{type:'text/plain;charset=utf-8'});
        const a = document.createElement('a'); a.href = URL.createObjectURL(blob);
        a.download = '五形Hub体质报告_'+r.character+'_'+new Date().toISOString().slice(0,10)+'.txt';
        document.body.appendChild(a); a.click(); document.body.removeChild(a);
        toast('✅ 报告已下载');
    }

    // ===== 分享图片 =====
    function shareImage() {
        const r = state.result;
        if (!r) return toast('请先完成测评');
        const c = document.createElement('canvas'); c.width = 600; c.height = 900;
        const ctx = c.getContext('2d');
        const grad = ctx.createLinearGradient(0,0,0,900);
        grad.addColorStop(0, r.bg||'#f0ece4'); grad.addColorStop(1, '#f5f0e8');
        ctx.fillStyle = grad; ctx.fillRect(0,0,600,900);
        ctx.globalAlpha = 0.08; ctx.fillStyle = r.color||'#4a7c59';
        ctx.beginPath(); ctx.arc(100,100,200,0,Math.PI*2); ctx.fill();
        ctx.beginPath(); ctx.arc(500,750,180,0,Math.PI*2); ctx.fill();
        ctx.globalAlpha = 1;
        ctx.font = 'bold 48px "Noto Serif SC",serif'; ctx.fillStyle = '#2c2c3a'; ctx.textAlign = 'center';
        ctx.fillText('五形Hub',300,80);
        ctx.font = '80px serif'; ctx.fillText(r.icon,300,190);
        ctx.fillStyle = r.color+'20'; ctx.beginPath();
        ctx.roundRect ? ctx.roundRect(200,220,200,36,18) : ctx.rect(200,220,200,36);
        ctx.fill(); ctx.fillStyle = r.color;
        ctx.font = 'bold 16px sans-serif'; ctx.fillText(r.element+'形人 · '+r.character,300,245);
        ctx.fillStyle = '#2c2c3a'; ctx.font = 'bold 36px "Noto Serif SC",serif'; ctx.fillText(r.character,300,310);
        ctx.fillStyle = '#5a5a6e'; ctx.font = '16px sans-serif'; ctx.fillText(r.characterTitle||'',300,340);
        ctx.strokeStyle = '#e0dcd0'; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(80,370); ctx.lineTo(520,370); ctx.stroke();
        ctx.fillStyle = '#5a5a6e'; ctx.font = '14px sans-serif'; ctx.textAlign = 'left';
        ctx.fillText('体质倾向：'+r.primaryConstitution,100,405);
        ctx.fillText('对应脏腑：'+(r.organs||''),100,430);
        ctx.strokeStyle = '#e0dcd0'; ctx.beginPath(); ctx.moveTo(80,460); ctx.lineTo(520,460); ctx.stroke();
        ctx.fillStyle = '#2c2c3a'; ctx.font = 'bold 16px "Noto Serif SC",serif'; ctx.textAlign = 'center';
        ctx.fillText('人格画像',300,495);
        ctx.fillStyle = '#5a5a6e'; ctx.font = '13px sans-serif';
        let ty = 520; const txt = r.personality||'';
        for(let i=0;i<txt.length;i+=28){if(ty>610)break;ctx.fillText(txt.substring(i,i+28),300,ty);ty+=22;}
        const py = Math.max(ty+20,640);
        ctx.strokeStyle = '#e0dcd0'; ctx.beginPath(); ctx.moveTo(80,py); ctx.lineTo(520,py); ctx.stroke();
        ctx.fillStyle = '#2c2c3a'; ctx.font = 'bold 16px "Noto Serif SC",serif'; ctx.textAlign = 'center';
        ctx.fillText('防寒要点',300,py+35);
        ctx.fillStyle = '#c9a84c'; ctx.font = '12px sans-serif'; ctx.textAlign = 'left';
        ctx.fillText((r.plan?.keyAreas||'').substring(0,30),100,py+62);
        ctx.fillStyle = '#5a5a6e';
        (r.plan?.clothing||[]).slice(0,2).forEach((s,i)=>{ctx.fillText('• '+s.substring(0,25),100,py+85+i*22);});
        ctx.fillStyle = '#8e8ea0'; ctx.font = '12px sans-serif'; ctx.textAlign = 'center';
        ctx.fillText('五形Hub · 测测你的体质人格',300,py+155);
        const link = document.createElement('a');
        link.download = '五形Hub_'+r.character+'_'+new Date().toISOString().slice(0,10)+'.png';
        link.href = c.toDataURL('image/png');
        document.body.appendChild(link); link.click(); document.body.removeChild(link);
        toast('✅ 分享图片已保存');
    }

    // ===== 渲染结果中增加角色艺术 =====

    // ===== 初始化 =====
    function init() {
        // 1. 优先加载分享链接结果
        if (tryLoad()) return;

        // 2. 尝试恢复本地保存的结果
        const saved = loadSavedResult();
        if (saved && saved.character) {
            // 有保存的结果，在年龄页显示提示
            // 但仍然先展示年龄页让用户选择是否重测
            go('age');
            setTimeout(updateAgeSavedHint, 100);
            return;
        }

        // 3. 尝试恢复年龄设置
        try {
            const savedAge = localStorage.getItem('wuxing_age');
            if ($ageSlider && savedAge) {
                const age = parseInt(savedAge);
                if (age > 0 && age <= 80) {
                    $ageSlider.value = age;
                    selectedAge = age;
                    $ageValue.textContent = age;
                    const isYoung = age <= 35;
                    $ageValue.className = 'age-value ' + (isYoung ? 'young' : 'adult');
                    $ageHint.className = 'age-mode-hint ' + (isYoung ? 'young' : 'adult');
                    $ageHint.textContent = isYoung ? '🎮 游戏模式' : '🏛️ 中医养生模式';
                }
            }
        } catch(e) {}

        // 4. 显示年龄页，带保存提示
        go('age');
        setTimeout(updateAgeSavedHint, 100);
    }

    document.addEventListener('keydown',e=>{
        if(e.key==='Escape'){
            if(state.page==='detail') go('result');
            else if(state.page==='alert') go('result');
            else if(state.page==='result'&&!state.shared) go('age');
            else if(['game','tcm'].includes(state.page)) go('age');
        }
    });

    // 按钮
    document.getElementById('btn-detail')?.addEventListener('click',()=>{go('detail');renderDetail(state.result);});
    document.getElementById('btn-back')?.addEventListener('click',()=>go('result'));
    document.getElementById('btn-back2')?.addEventListener('click',()=>go('result'));
    document.querySelectorAll('.btn-share').forEach(el=>{
        el.addEventListener('click',function(){if(this.textContent.includes('好友')){copyLink();toast('📱 已复制，去微信分享吧');}else copyLink();});
    });
    document.getElementById('btn-view-alert')?.addEventListener('click',window.showAlert);
    document.getElementById('btn-qa')?.addEventListener('click',()=>{
        const box=$('#qa-box');
        if(box) {
            const isHidden = box.classList.contains('hidden');
            box.classList.toggle('hidden');
            if (!isHidden) renderQA();
        }
    });

    window.start=start; window.copyLink=copyLink; window.toast=toast; window.state=state; window.go=go; window.renderQA=renderQA;
    window.renderAlertMonitor=window.renderAlertMonitor||function(){};

    if(document.readyState==='complete'||document.readyState==='interactive') init();
    else document.addEventListener('DOMContentLoaded', init);
})();
