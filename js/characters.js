/* ========================================
   五形Hub · 双风格IP形象系统
   游戏风（young）+ 古风（adult）
   林黛玉 · 孙悟空 · 张飞 · 诸葛亮 · 曹操
   ======================================== */

const CHAR_ART = {

    /* =============================================
       【游戏风 · 35岁以下】炫酷二次元角色
    ============================================= */
    young: {

        /* ----- 木 · 林黛玉 · 精灵法师 ----- */
        wood: {
            bg: 'linear-gradient(135deg,#1a2a2e,#0d1f1a)',
            color: '#5adbb5',
            borderColor: 'rgba(90,219,181,.25)',
            svg: '<svg viewBox="0 0 160 200" width="130" height="165">' +
            /* 背景光环 */
            '<circle cx="80" cy="85" r="70" fill="none" stroke="#5adbb5" stroke-width="1" opacity="0.15"/>' +
            '<circle cx="80" cy="85" r="55" fill="none" stroke="#5adbb5" stroke-width="0.5" opacity="0.1"/>' +
            /* 飘逸长发 */
            '<path d="M22,65 Q15,30 55,18 Q80,12 105,18 Q145,30 138,65 Q142,90 130,120 Q120,145 105,158 Q90,165 80,166 Q70,165 55,158 Q40,145 30,120 Q18,90 22,65Z" fill="#0a1a15"/>' +
            /* 精灵耳 */
            '<path d="M22,72 Q12,60 16,52 Q22,58 25,68Z" fill="#e8d8c8"/>' +
            '<path d="M138,72 Q148,60 144,52 Q138,58 135,68Z" fill="#e8d8c8"/>' +
            /* 面容 */
            '<ellipse cx="80" cy="78" rx="34" ry="40" fill="#e8ddd0"/>' +
            /* 高光鼻/下巴 */
            '<ellipse cx="80" cy="88" rx="5" ry="2" fill="white" opacity="0.08"/>' +
            /* 刘海 */
            '<path d="M40,45 Q50,35 62,42 Q68,38 80,40 Q92,38 98,42 Q110,35 120,45 Q115,50 105,48 Q95,52 85,50 Q75,52 65,50 Q55,48 45,50 Q40,48 40,45Z" fill="#0a1a15"/>' +
            /* 呆毛 */
            '<path d="M78,30 Q80,22 82,28 Q84,20 86,30" stroke="#5adbb5" stroke-width="2" fill="none" opacity="0.8"/>' +
            /* 眉毛 */
            '<path d="M50,65 Q60,60 72,64" stroke="#2a1a1a" stroke-width="1.5" fill="none"/>' +
            '<path d="M88,64 Q100,60 110,65" stroke="#2a1a1a" stroke-width="1.5" fill="none"/>' +
            /* 大眼睛 */
            '<ellipse cx="65" cy="75" rx="10" ry="8" fill="white"/>' +
            '<ellipse cx="65" cy="76" rx="7" ry="6" fill="#2a6a5a"/>' +
            '<ellipse cx="65" cy="76" rx="4.5" ry="4.5" fill="#0a1a15"/>' +
            '<circle cx="62" cy="72" r="2.5" fill="white" opacity="0.8"/>' +
            '<circle cx="67" cy="78" r="1.5" fill="white" opacity="0.3"/>' +
            '<ellipse cx="95" cy="75" rx="10" ry="8" fill="white"/>' +
            '<ellipse cx="95" cy="76" rx="7" ry="6" fill="#2a6a5a"/>' +
            '<ellipse cx="95" cy="76" rx="4.5" ry="4.5" fill="#0a1a15"/>' +
            '<circle cx="92" cy="72" r="2.5" fill="white" opacity="0.8"/>' +
            '<circle cx="97" cy="78" r="1.5" fill="white" opacity="0.3"/>' +
            /* 鼻 */
            '<path d="M78,82 Q80,86 82,82" stroke="#c8b8a8" stroke-width="1" fill="none"/>' +
            /* 嘴 */
            '<path d="M73,94 Q80,91 87,94" stroke="#b88" stroke-width="1.5" fill="none"/>' +
            /* 脖颈 */
            '<rect x="70" y="110" width="20" height="12" rx="4" fill="#e0d0c0"/>' +
            /* 法袍 */
            '<path d="M28,128 L80,115 L132,128" stroke="#5adbb5" stroke-width="2" fill="none"/>' +
            '<path d="M28,128 L22,175 Q55,178 80,176 Q105,178 138,175 L132,128" fill="#0d2a25" opacity="0.9"/>' +
            /* 魔法纹路 */
            '<path d="M35,140 Q80,125 125,140" stroke="#5adbb5" stroke-width="1" fill="none" opacity="0.3"/>' +
            '<path d="M45,155 Q80,140 115,155" stroke="#5adbb5" stroke-width="0.8" fill="none" opacity="0.2"/>' +
            /* 魔法光点 */
            '<circle cx="25" cy="50" r="2" fill="#5adbb5" opacity="0.6"/>' +
            '<circle cx="30" cy="42" r="1.5" fill="#5adbb5" opacity="0.4"/>' +
            '<circle cx="135" cy="50" r="2" fill="#5adbb5" opacity="0.6"/>' +
            '<circle cx="130" cy="42" r="1.5" fill="#5adbb5" opacity="0.4"/>' +
            '<circle cx="28" cy="135" r="1.5" fill="#5adbb5" opacity="0.3"/>' +
            '<circle cx="132" cy="135" r="1.5" fill="#5adbb5" opacity="0.3"/>' +
            '</svg>'
        },

        /* ----- 火 · 孙悟空 · 热血战神 ----- */
        fire: {
            bg: 'linear-gradient(135deg,#2a0a0a,#1a0505)',
            color: '#ff6b35',
            borderColor: 'rgba(255,107,53,.25)',
            svg: '<svg viewBox="0 0 160 200" width="130" height="165">' +
            /* 烈焰背景 */
            '<circle cx="80" cy="85" r="70" fill="none" stroke="#ff6b35" stroke-width="1" opacity="0.12"/>' +
            '<circle cx="80" cy="85" r="50" fill="none" stroke="#ff4500" stroke-width="0.5" opacity="0.08"/>' +
            /* 冲天怒发 */
            '<path d="M40,55 Q35,20 50,8 Q65,0 80,2 Q95,0 110,8 Q125,20 120,55" fill="#ff4500" opacity="0.9"/>' +
            '<path d="M45,50 Q42,15 58,5 Q70,-2 80,0 Q90,-2 102,5 Q118,15 115,50" fill="#ff6b35"/>' +
            /* 发尖 */
            '<path d="M65,8 L60,0 L68,5Z" fill="#ffaa00" opacity="0.7"/>' +
            '<path d="M80,2 L80,-6 L82,1Z" fill="#ffaa00" opacity="0.7"/>' +
            '<path d="M95,8 L100,0 L92,5Z" fill="#ffaa00" opacity="0.7"/>' +
            /* 猴脸 */
            '<path d="M48,70 Q42,48 60,42 Q72,38 80,37 Q88,38 100,42 Q118,48 112,70 Q115,90 100,108 Q88,120 80,122 Q72,120 60,108 Q45,90 48,70Z" fill="#e8b888"/>' +
            '<path d="M55,65 Q50,52 65,48 Q75,45 80,44 Q85,45 95,48 Q110,52 105,65" fill="#d4a070" opacity="0.3"/>' +
            /* 金睛 */
            '<ellipse cx="64" cy="72" rx="9" ry="8" fill="#ffd700"/>' +
            '<ellipse cx="64" cy="72" rx="6" ry="6" fill="#ff8c00"/>' +
            '<ellipse cx="64" cy="72" rx="3.5" ry="5" fill="#1a0a0a"/>' +
            '<circle cx="61" cy="68" r="2" fill="white" opacity="0.7"/>' +
            '<ellipse cx="96" cy="72" rx="9" ry="8" fill="#ffd700"/>' +
            '<ellipse cx="96" cy="72" rx="6" ry="6" fill="#ff8c00"/>' +
            '<ellipse cx="96" cy="72" rx="3.5" ry="5" fill="#1a0a0a"/>' +
            '<circle cx="93" cy="68" r="2" fill="white" opacity="0.7"/>' +
            /* 眉毛 - 火焰状 */
            '<path d="M48,58 Q56,52 66,56" stroke="#ff6b35" stroke-width="2.5" fill="none"/>' +
            '<path d="M94,56 Q104,52 112,58" stroke="#ff6b35" stroke-width="2.5" fill="none"/>' +
            /* 紧箍咒 - 金 */
            '<path d="M42,59 Q55,48 70,44 Q80,42 90,44 Q105,48 118,59" stroke="#ffd700" stroke-width="3" fill="none"/>' +
            '<path d="M48,55 L60,36 L68,42" stroke="#ffd700" stroke-width="2" fill="none"/>' +
            '<path d="M112,55 L100,36 L92,42" stroke="#ffd700" stroke-width="2" fill="none"/>' +
            '<circle cx="60" cy="35" r="3" fill="#ffd700"/>' +
            '<circle cx="100" cy="35" r="3" fill="#ffd700"/>' +
            /* 鼻 */
            '<ellipse cx="76" cy="86" rx="3.5" ry="2.5" fill="#d4a070"/>' +
            '<ellipse cx="84" cy="86" rx="3.5" ry="2.5" fill="#d4a070"/>' +
            /* 嘴 - 咧嘴笑 */
            '<path d="M66,96 Q80,108 94,96" stroke="#1a0a0a" stroke-width="2" fill="none"/>' +
            '<path d="M68,97 Q80,105 92,97" fill="#ff4500" opacity="0.5"/>' +
            /* 脖颈 */
            '<rect x="68" y="115" width="24" height="10" rx="4" fill="#e8b888"/>' +
            /* 烈焰战甲 */
            '<path d="M22,130 L80,115 L138,130" stroke="#ff6b35" stroke-width="2.5" fill="none"/>' +
            '<path d="M22,130 L15,175 Q55,180 80,178 Q105,180 145,175 L138,130" fill="#2a0a0a" opacity="0.9"/>' +
            /* 铠甲纹 */
            '<path d="M45,140 Q80,128 115,140" stroke="#ff6b35" stroke-width="1.5" fill="none" opacity="0.5"/>' +
            '<path d="M55,155 Q80,142 105,155" stroke="#ff4500" stroke-width="1" fill="none" opacity="0.3"/>' +
            /* 披风 */
            '<path d="M22,130 L5,170 Q40,175 80,172 L80,130" fill="#8b0000" opacity="0.5"/>' +
            '<path d="M138,130 L155,170 Q120,175 80,172 L80,130" fill="#8b0000" opacity="0.5"/>' +
            '</svg>'
        },

        /* ----- 土 · 张飞 · 狂战士 ----- */
        earth: {
            bg: 'linear-gradient(135deg,#1a150a,#0d0a05)',
            color: '#d4a030',
            borderColor: 'rgba(212,160,48,.25)',
            svg: '<svg viewBox="0 0 160 200" width="130" height="165">' +
            /* 光晕 */
            '<circle cx="80" cy="85" r="70" fill="none" stroke="#d4a030" stroke-width="1" opacity="0.12"/>' +
            /* 雄壮身躯 */
            '<ellipse cx="80" cy="82" rx="46" ry="48" fill="#c8a070"/>' +
            /* 肤色 */
            '<ellipse cx="80" cy="80" rx="42" ry="40" fill="#d4a870" opacity="0.5"/>' +
            /* 战盔 */
            '<path d="M30,58 Q30,28 55,18 Q80,10 105,18 Q130,28 130,58 L130,62 Q128,50 120,42 Q100,22 80,20 Q60,22 40,42 Q32,50 30,62Z" fill="#3a2a0a"/>' +
            '<path d="M30,55 L12,48 L18,56 L30,60" fill="#3a2a0a"/>' +
            '<path d="M130,55 L148,48 L142,56 L130,60" fill="#3a2a0a"/>' +
            /* 盔甲金边 */
            '<path d="M35,52 Q55,30 80,28 Q105,30 125,52" stroke="#d4a030" stroke-width="2" fill="none"/>' +
            /* 眉 - 倒竖 */
            '<path d="M38,62 Q55,52 72,60" stroke="#1a1a0a" stroke-width="4" fill="none" stroke-linecap="round"/>' +
            '<path d="M88,60 Q105,52 122,62" stroke="#1a1a0a" stroke-width="4" fill="none" stroke-linecap="round"/>' +
            /* 怒目 */
            '<circle cx="62" cy="76" r="12" fill="white"/>' +
            '<circle cx="62" cy="76" r="9" fill="#d4a030"/>' +
            '<circle cx="62" cy="76" r="5.5" fill="#1a0a0a"/>' +
            '<circle cx="58" cy="72" r="3" fill="white" opacity="0.7"/>' +
            '<circle cx="98" cy="76" r="12" fill="white"/>' +
            '<circle cx="98" cy="76" r="9" fill="#d4a030"/>' +
            '<circle cx="98" cy="76" r="5.5" fill="#1a0a0a"/>' +
            '<circle cx="94" cy="72" r="3" fill="white" opacity="0.7"/>' +
            /* 鼻 */
            '<path d="M73,85 Q80,92 87,85" stroke="#b08858" stroke-width="2" fill="none"/>' +
            /* 嘴 */
            '<path d="M66,98 Q80,92 94,98" stroke="#4a2a1a" stroke-width="2.5" fill="none"/>' +
            /* 钢髯 */
            '<path d="M40,100 Q25,120 32,140 Q38,128 48,110" fill="#1a0a0a"/>' +
            '<path d="M120,100 Q135,120 128,140 Q122,128 112,110" fill="#1a0a0a"/>' +
            '<path d="M52,102 Q45,130 55,148 Q62,135 66,110" fill="#1a0a0a"/>' +
            '<path d="M108,102 Q115,130 105,148 Q98,135 94,110" fill="#1a0a0a"/>' +
            '<path d="M62,106 Q55,142 80,155 Q105,142 98,106" fill="#1a0a0a" opacity="0.95"/>' +
            /* 脖颈 */
            '<rect x="66" y="118" width="28" height="12" rx="5" fill="#c8a070"/>' +
            /* 重甲 */
            '<path d="M18,135 L80,118 L142,135" stroke="#d4a030" stroke-width="3" fill="none"/>' +
            '<path d="M18,135 L12,180 Q55,185 80,182 Q105,185 148,180 L142,135" fill="#2a1a0a" opacity="0.9"/>' +
            /* 甲片 */
            '<path d="M35,142 Q80,128 125,142" stroke="#d4a030" stroke-width="1.5" fill="none" opacity="0.4"/>' +
            '<path d="M45,155 Q80,140 115,155" stroke="#d4a030" stroke-width="1" fill="none" opacity="0.3"/>' +
            /* 护肩 */
            '<ellipse cx="25" cy="135" rx="18" ry="14" fill="#2a1a0a" stroke="#d4a030" stroke-width="1.5"/>' +
            '<ellipse cx="135" cy="135" rx="18" ry="14" fill="#2a1a0a" stroke="#d4a030" stroke-width="1.5"/>' +
            '</svg>'
        },

        /* ----- 金 · 诸葛亮 · 神机军师 ----- */
        metal: {
            bg: 'linear-gradient(135deg,#0a0a1a,#05051a)',
            color: '#8ec8f0',
            borderColor: 'rgba(142,200,240,.25)',
            svg: '<svg viewBox="0 0 160 200" width="130" height="165">' +
            /* 星辰背景 */
            '<circle cx="80" cy="85" r="70" fill="none" stroke="#8ec8f0" stroke-width="1" opacity="0.1"/>' +
            '<circle cx="80" cy="85" r="55" fill="none" stroke="#8ec8f0" stroke-width="0.5" opacity="0.06"/>' +
            '<circle cx="35" cy="40" r="1.5" fill="#8ec8f0" opacity="0.5"/>' +
            '<circle cx="125" cy="35" r="1" fill="#8ec8f0" opacity="0.4"/>' +
            '<circle cx="30" cy="120" r="1" fill="#8ec8f0" opacity="0.3"/>' +
            '<circle cx="130" cy="110" r="1.5" fill="#8ec8f0" opacity="0.4"/>' +
            /* 面容 */
            '<ellipse cx="80" cy="78" rx="36" ry="42" fill="#e0ddd5"/>' +
            /* 长发 */
            '<path d="M38,50 Q32,20 55,12 Q80,6 105,12 Q128,20 122,50 L122,65 Q120,55 115,48 Q98,28 80,24 Q62,28 45,48 Q40,55 38,65Z" fill="#0a0a1a"/>' +
            /* 束发冠 */
            '<rect x="60" y="16" width="40" height="8" rx="2" fill="#8ec8f0" opacity="0.6"/>' +
            '<rect x="70" y="10" width="20" height="8" rx="2" fill="#8ec8f0" opacity="0.5"/>' +
            '<circle cx="80" cy="8" r="4" fill="#8ec8f0" opacity="0.7"/>' +
            /* 眉 */
            '<path d="M48,66 Q62,60 76,64" stroke="#4a4a5a" stroke-width="1.5" fill="none"/>' +
            '<path d="M84,64 Q98,60 112,66" stroke="#4a4a5a" stroke-width="1.5" fill="none"/>' +
            /* 眼 - 深邃冷静 */
            '<ellipse cx="66" cy="75" rx="8" ry="5.5" fill="white"/>' +
            '<ellipse cx="66" cy="75" rx="5.5" ry="4.5" fill="#2a2a4a"/>' +
            '<ellipse cx="66" cy="76" rx="3" ry="3" fill="#0a0a1a"/>' +
            '<circle cx="64" cy="72" r="1.5" fill="white" opacity="0.5"/>' +
            '<ellipse cx="94" cy="75" rx="8" ry="5.5" fill="white"/>' +
            '<ellipse cx="94" cy="75" rx="5.5" ry="4.5" fill="#2a2a4a"/>' +
            '<ellipse cx="94" cy="76" rx="3" ry="3" fill="#0a0a1a"/>' +
            '<circle cx="92" cy="72" r="1.5" fill="white" opacity="0.5"/>' +
            /* 鼻 */
            '<path d="M78,82 Q80,88 82,82" stroke="#b8b0a0" stroke-width="1" fill="none"/>' +
            /* 嘴 */
            '<path d="M72,94 Q80,91 88,94" stroke="#7a6a5a" stroke-width="1.2" fill="none"/>' +
            /* 胡 */
            '<path d="M74,98 Q80,108 86,98" fill="#4a4a5a" opacity="0.5"/>' +
            /* 脖颈 */
            '<rect x="70" y="110" width="20" height="12" rx="4" fill="#d8d0c8"/>' +
            /* 大氅 */
            '<path d="M25,128 L80,115 L135,128" stroke="#8ec8f0" stroke-width="2" fill="none"/>' +
            '<path d="M25,128 L18,175 Q55,178 80,176 Q105,178 142,175 L135,128" fill="#0a0a2a" opacity="0.9"/>' +
            /* 星纹 */
            '<path d="M45,142 Q80,128 115,142" stroke="#8ec8f0" stroke-width="0.8" fill="none" opacity="0.3"/>' +
            '<circle cx="80" cy="150" r="6" fill="none" stroke="#8ec8f0" stroke-width="0.8" opacity="0.3"/>' +
            '<path d="M77,150 L80,145 L83,150 L80,155Z" fill="#8ec8f0" opacity="0.2"/>' +
            /* 羽扇 */
            '<path d="M125,130 L145,150 Q155,158 148,162 L125,145" fill="#0a0a2a" opacity="0.6"/>' +
            '<ellipse cx="152" cy="158" rx="18" ry="14" fill="#8ec8f0" opacity="0.25" transform="rotate(15,152,158)"/>' +
            '<line x1="140" y1="152" x2="160" y2="165" stroke="#8ec8f0" stroke-width="0.5" opacity="0.4"/>' +
            '<line x1="145" y1="148" x2="164" y2="160" stroke="#8ec8f0" stroke-width="0.5" opacity="0.4"/>' +
            '<line x1="148" y1="156" x2="166" y2="164" stroke="#8ec8f0" stroke-width="0.5" opacity="0.4"/>' +
            '<line x1="152" y1="158" x2="152" y2="172" stroke="#6a5a3a" stroke-width="1.5"/>' +
            '</svg>'
        },

        /* ----- 水 · 曹操 · 暗黑帝王 ----- */
        water: {
            bg: 'linear-gradient(135deg,#0a0a15,#05051a)',
            color: '#4a8bc2',
            borderColor: 'rgba(74,139,194,.25)',
            svg: '<svg viewBox="0 0 160 200" width="130" height="165">' +
            /* 王权光环 */
            '<circle cx="80" cy="85" r="70" fill="none" stroke="#4a8bc2" stroke-width="1" opacity="0.1"/>' +
            '<circle cx="80" cy="85" r="50" fill="none" stroke="#4a8bc2" stroke-width="0.5" opacity="0.06"/>' +
            /* 面容 */
            '<ellipse cx="80" cy="75" rx="40" ry="46" fill="#d8c8b8"/>' +
            /* 暗色部分 */
            '<ellipse cx="80" cy="82" rx="36" ry="34" fill="#c8b8a8" opacity="0.3"/>' +
            /* 帝王冠冕 */
            '<rect x="38" y="26" width="84" height="10" rx="2" fill="#1a1a2a"/>' +
            '<rect x="35" y="28" width="90" height="5" rx="1" fill="#2a2a4a"/>' +
            /* 冠顶 */
            '<rect x="55" y="18" width="50" height="10" rx="2" fill="#2a2a3a"/>' +
            '<rect x="65" y="12" width="30" height="8" rx="3" fill="#3a3a5a"/>' +
            '<circle cx="80" cy="10" r="5" fill="#4a8bc2"/>' +
            /* 冕旒 */
            '<line x1="42" y1="36" x2="42" y2="52" stroke="#4a8bc2" stroke-width="1"/>' +
            '<circle cx="42" cy="54" r="3" fill="#4a8bc2"/>' +
            '<line x1="50" y1="36" x2="50" y2="56" stroke="#4a8bc2" stroke-width="1"/>' +
            '<circle cx="50" cy="58" r="3" fill="#4a8bc2"/>' +
            '<line x1="58" y1="36" x2="58" y2="54" stroke="#4a8bc2" stroke-width="1"/>' +
            '<circle cx="58" cy="56" r="3" fill="#4a8bc2"/>' +
            '<line x1="102" y1="36" x2="102" y2="52" stroke="#4a8bc2" stroke-width="1"/>' +
            '<circle cx="102" cy="54" r="3" fill="#4a8bc2"/>' +
            '<line x1="110" y1="36" x2="110" y2="56" stroke="#4a8bc2" stroke-width="1"/>' +
            '<circle cx="110" cy="58" r="3" fill="#4a8bc2"/>' +
            '<line x1="118" y1="36" x2="118" y2="54" stroke="#4a8bc2" stroke-width="1"/>' +
            '<circle cx="118" cy="56" r="3" fill="#4a8bc2"/>' +
            /* 眉毛 */
            '<path d="M44,64 Q60,56 74,63" stroke="#1a1a2a" stroke-width="2.5" fill="none"/>' +
            '<path d="M86,63 Q100,56 116,64" stroke="#1a1a2a" stroke-width="2.5" fill="none"/>' +
            /* 眼睛 */
            '<ellipse cx="64" cy="73" rx="8" ry="5.5" fill="white"/>' +
            '<ellipse cx="64" cy="74" rx="5.5" ry="4.5" fill="#1a1a3a"/>' +
            '<ellipse cx="64" cy="74" rx="3" ry="3.5" fill="#0a0a1a"/>' +
            '<circle cx="62" cy="71" r="2" fill="white" opacity="0.5"/>' +
            '<ellipse cx="96" cy="73" rx="8" ry="5.5" fill="white"/>' +
            '<ellipse cx="96" cy="74" rx="5.5" ry="4.5" fill="#1a1a3a"/>' +
            '<ellipse cx="96" cy="74" rx="3" ry="3.5" fill="#0a0a1a"/>' +
            '<circle cx="94" cy="71" r="2" fill="white" opacity="0.5"/>' +
            /* 鼻 */
            '<path d="M78,80 Q80,88 82,80" stroke="#b89878" stroke-width="1.5" fill="none"/>' +
            /* 嘴 - 冷笑 */
            '<path d="M68,96 Q80,92 92,96" stroke="#4a2a1a" stroke-width="2" fill="none"/>' +
            /* 胡 */
            '<path d="M56,94 Q62,104 80,106 Q98,104 104,94" fill="#1a1a2a" opacity="0.7"/>' +
            /* 脖颈 */
            '<rect x="68" y="112" width="24" height="12" rx="5" fill="#d0c0b0"/>' +
            /* 帝王袍 */
            '<path d="M22,130 L80,115 L138,130" stroke="#4a8bc2" stroke-width="3" fill="none"/>' +
            '<path d="M22,130 L14,178 Q55,182 80,180 Q105,182 146,178 L138,130" fill="#0a0a2a" opacity="0.9"/>' +
            /* 龙纹 */
            '<path d="M55,145 Q80,132 105,145" stroke="#4a8bc2" stroke-width="1.2" fill="none" opacity="0.35"/>' +
            '<path d="M60,160 Q80,146 100,160" stroke="#4a8bc2" stroke-width="1" fill="none" opacity="0.25"/>' +
            '<circle cx="80" cy="155" r="7" fill="none" stroke="#4a8bc2" stroke-width="1" opacity="0.2"/>' +
            /* 披风 */
            '<path d="M22,130 L5,170 Q40,175 80,172 L80,130" fill="#0a0a2a" opacity="0.6"/>' +
            '<path d="M138,130 L155,170 Q120,175 80,172 L80,130" fill="#0a0a2a" opacity="0.6"/>' +
            '</svg>'
        }
    },

    /* =============================================
       【古风 · 35岁以上】典雅水墨角色
    ============================================= */
    adult: {

        /* ----- 木 · 林黛玉 · 潇湘妃子 ----- */
        wood: {
            bg: 'linear-gradient(135deg,#e8f0e4,#d0e4cc)',
            color: '#4a7c59',
            borderColor: 'rgba(74,124,89,.15)',
            svg: '<svg viewBox="0 0 160 200" width="130" height="165">' +
            '<path d="M20,70 Q18,25 55,15 Q80,10 105,15 Q142,25 140,70 L140,85 Q138,78 135,68 Q125,35 80,30 Q35,35 25,68 Q22,78 20,85Z" fill="#1a1a2e"/>' +
            '<ellipse cx="80" cy="78" rx="36" ry="42" fill="#f5e6d0"/>' +
            '<ellipse cx="80" cy="30" rx="18" ry="12" fill="#1a1a2e"/>' +
            '<path d="M62,32 Q80,22 98,32 Q88,28 80,27 Q72,28 62,32Z" fill="#1a1a2e"/>' +
            '<rect x="72" y="16" width="28" height="3" rx="1.5" fill="#5a9c6c" transform="rotate(-5,80,18)"/>' +
            '<ellipse cx="100" cy="18" rx="5" ry="3" fill="#4a7c59" transform="rotate(-5,80,18)"/>' +
            '<circle cx="104" cy="19" r="2.5" fill="#4a7c59"/>' +
            '<line x1="102" y1="21" x2="99" y2="40" stroke="#4a7c59" stroke-width="0.8" opacity="0.6"/>' +
            '<circle cx="99" cy="42" r="2" fill="#7ab88c" opacity="0.8"/>' +
            '<path d="M52,65 Q60,60 70,65" stroke="#3a2a1a" stroke-width="1.8" fill="none"/>' +
            '<path d="M90,65 Q100,60 108,65" stroke="#3a2a1a" stroke-width="1.8" fill="none"/>' +
            '<ellipse cx="65" cy="75" rx="7" ry="5" fill="white" opacity="0.8"/>' +
            '<ellipse cx="65" cy="76" rx="5" ry="4" fill="#2a1a1a"/>' +
            '<circle cx="63" cy="74" r="1.5" fill="white" opacity="0.5"/>' +
            '<ellipse cx="95" cy="75" rx="7" ry="5" fill="white" opacity="0.8"/>' +
            '<ellipse cx="95" cy="76" rx="5" ry="4" fill="#2a1a1a"/>' +
            '<circle cx="93" cy="74" r="1.5" fill="white" opacity="0.5"/>' +
            '<ellipse cx="68" cy="83" rx="2" ry="3" fill="#8ec8e8" opacity="0.4"/>' +
            '<ellipse cx="98" cy="83" rx="2" ry="3" fill="#8ec8e8" opacity="0.4"/>' +
            '<path d="M78,80 Q80,86 82,80" stroke="#d4b8a8" stroke-width="1" fill="none"/>' +
            '<path d="M72,94 Q80,90 88,94" stroke="#c99" stroke-width="1.8" fill="none" stroke-linecap="round"/>' +
            '<rect x="68" y="108" width="24" height="14" rx="5" fill="#f0d8c8"/>' +
            '<path d="M30,128 L80,110 L130,128" stroke="#5a9c6c" stroke-width="2" fill="none"/>' +
            '<path d="M32,128 L75,118 L80,115 L85,118 L128,128" fill="#6b9a7c" opacity="0.5"/>' +
            '<path d="M32,128 L28,170 Q50,175 75,170 L75,125" fill="#7aac8c" opacity="0.7"/>' +
            '<path d="M128,128 L132,170 Q110,175 85,170 L85,125" fill="#6b9a7c" opacity="0.6"/>' +
            '<line x1="80" y1="115" x2="80" y2="145" stroke="#4a7c59" stroke-width="1.5"/>' +
            '<circle cx="80" cy="148" r="6" fill="#5a9c6c" stroke="#4a7c59" stroke-width="1.5"/>' +
            '<circle cx="80" cy="148" r="3" fill="#7abc8c"/>' +
            '<path d="M10,55 Q18,48 26,55 Q18,52 10,55Z" fill="#4a7c59" opacity="0.25"/>' +
            '<path d="M134,55 Q142,48 150,55 Q142,52 134,55Z" fill="#4a7c59" opacity="0.25"/>' +
            '</svg>'
        },

        /* ----- 火 · 孙悟空 · 齐天大圣 ----- */
        fire: {
            bg: 'linear-gradient(135deg,#fce8e4,#f5c8c0)',
            color: '#c0392b',
            borderColor: 'rgba(192,57,43,.15)',
            svg: '<svg viewBox="0 0 160 200" width="130" height="165">' +
            '<ellipse cx="80" cy="80" rx="42" ry="45" fill="#e8c89e"/>' +
            '<path d="M38,80 Q30,50 45,35 Q60,22 80,20 Q100,22 115,35 Q130,50 122,80" fill="#d4a87a" opacity="0.4"/>' +
            '<path d="M50,75 Q45,55 60,48 Q70,44 80,42 Q90,44 100,48 Q115,55 110,75 Q112,95 100,110 Q90,120 80,122 Q70,120 60,110 Q48,95 50,75Z" fill="#f0c8a0"/>' +
            '<ellipse cx="80" cy="55" rx="35" ry="22" fill="#d4a87a" opacity="0.3"/>' +
            '<ellipse cx="38" cy="70" rx="12" ry="6" fill="#e8b88a" transform="rotate(-15,38,70)"/>' +
            '<ellipse cx="38" cy="69" rx="7" ry="3.5" fill="#f0c8a0" transform="rotate(-15,38,70)"/>' +
            '<ellipse cx="122" cy="70" rx="12" ry="6" fill="#e8b88a" transform="rotate(15,122,70)"/>' +
            '<ellipse cx="122" cy="69" rx="7" ry="3.5" fill="#f0c8a0" transform="rotate(15,122,70)"/>' +
            '<path d="M35,58 Q42,48 55,44 Q70,40 80,39 Q90,40 105,44 Q118,48 125,58" stroke="#c9a84c" stroke-width="3.5" fill="none"/>' +
            '<circle cx="35" cy="58" r="4" fill="#c9a84c"/>' +
            '<circle cx="125" cy="58" r="4" fill="#c9a84c"/>' +
            '<path d="M55,44 L52,38" stroke="#c9a84c" stroke-width="2.5" fill="none"/>' +
            '<path d="M105,44 L108,38" stroke="#c9a84c" stroke-width="2.5" fill="none"/>' +
            '<path d="M52,38 Q65,34 80,33 Q95,34 108,38" stroke="#c9a84c" stroke-width="2.5" fill="none" opacity="0.6"/>' +
            '<path d="M52,70 Q65,63 80,66 Q95,63 108,70" stroke="#2a1a0e" stroke-width="1.5" fill="none" opacity="0.5"/>' +
            '<ellipse cx="64" cy="76" rx="8" ry="7" fill="#ffd700"/>' +
            '<ellipse cx="64" cy="76" rx="5.5" ry="5.5" fill="#ff8c00"/>' +
            '<ellipse cx="64" cy="76" rx="3" ry="4" fill="#2a1a0e"/>' +
            '<circle cx="62" cy="73" r="2" fill="white" opacity="0.6"/>' +
            '<ellipse cx="96" cy="76" rx="8" ry="7" fill="#ffd700"/>' +
            '<ellipse cx="96" cy="76" rx="5.5" ry="5.5" fill="#ff8c00"/>' +
            '<ellipse cx="96" cy="76" rx="3" ry="4" fill="#2a1a0e"/>' +
            '<circle cx="94" cy="73" r="2" fill="white" opacity="0.6"/>' +
            '<ellipse cx="74" cy="88" rx="4" ry="3" fill="#e8a87a"/>' +
            '<ellipse cx="86" cy="88" rx="4" ry="3" fill="#e8a87a"/>' +
            '<path d="M66,96 Q80,106 94,96" stroke="#2a1a0e" stroke-width="2" fill="none"/>' +
            '<path d="M68,97 Q80,103 92,97" fill="#c0392b" opacity="0.6"/>' +
            '<rect x="70" y="115" width="20" height="10" rx="4" fill="#e8c89e"/>' +
            '<path d="M25,130 L80,118 L135,130" stroke="#c0392b" stroke-width="2.5" fill="none"/>' +
            '<path d="M28,130 L80,120 L132,130 L135,170 Q108,175 80,172 Q52,175 25,170Z" fill="#c0392b" opacity="0.7"/>' +
            '<path d="M50,135 Q80,125 110,135" stroke="#c9a84c" stroke-width="1.5" fill="none" opacity="0.6"/>' +
            '<path d="M55,145 Q80,135 105,145" stroke="#c9a84c" stroke-width="1.5" fill="none" opacity="0.5"/>' +
            '<path d="M25,130 L10,175 Q40,180 80,175 Q120,180 150,175 L135,130" fill="#c0392b" opacity="0.25"/>' +
            '<path d="M25,55 Q18,48 22,40 Q26,45 25,55Z" fill="#e67e22" opacity="0.4"/>' +
            '<path d="M30,48 Q24,38 28,30 Q34,38 30,48Z" fill="#c0392b" opacity="0.3"/>' +
            '<path d="M135,55 Q142,48 138,40 Q134,45 135,55Z" fill="#e67e22" opacity="0.4"/>' +
            '<path d="M130,48 Q136,38 132,30 Q126,38 130,48Z" fill="#c0392b" opacity="0.3"/>' +
            '</svg>'
        },

        /* ----- 土 · 张飞 · 桓侯将军 ----- */
        earth: {
            bg: 'linear-gradient(135deg,#f5edd6,#ece0b8)',
            color: '#b8860b',
            borderColor: 'rgba(184,134,11,.15)',
            svg: '<svg viewBox="0 0 160 200" width="130" height="165">' +
            '<ellipse cx="80" cy="75" rx="44" ry="46" fill="#e8c8a0"/>' +
            '<ellipse cx="80" cy="80" rx="40" ry="38" fill="#d4b080" opacity="0.5"/>' +
            '<path d="M28,55 Q28,30 55,22 Q80,18 105,22 Q132,30 132,55 L132,62 Q130,52 125,45 Q105,28 80,26 Q55,28 35,45 Q30,52 28,62Z" fill="#1a1a1a"/>' +
            '<path d="M28,55 L10,50 L15,58 L28,62" fill="#1a1a1a" opacity="0.7"/>' +
            '<path d="M132,55 L150,50 L145,58 L132,62" fill="#1a1a1a" opacity="0.7"/>' +
            '<path d="M40,62 Q55,54 72,60" stroke="#1a1a1a" stroke-width="4" fill="none" stroke-linecap="round"/>' +
            '<path d="M88,60 Q105,54 120,62" stroke="#1a1a1a" stroke-width="4" fill="none" stroke-linecap="round"/>' +
            '<circle cx="62" cy="76" r="11" fill="white"/>' +
            '<circle cx="62" cy="76" r="8" fill="#3a2a0e"/>' +
            '<circle cx="62" cy="76" r="5" fill="#1a1a0a"/>' +
            '<circle cx="58" cy="73" r="2.5" fill="white" opacity="0.6"/>' +
            '<circle cx="98" cy="76" r="11" fill="white"/>' +
            '<circle cx="98" cy="76" r="8" fill="#3a2a0e"/>' +
            '<circle cx="98" cy="76" r="5" fill="#1a1a0a"/>' +
            '<circle cx="94" cy="73" r="2.5" fill="white" opacity="0.6"/>' +
            '<path d="M74,85 Q80,92 86,85" stroke="#b89068" stroke-width="2" fill="none"/>' +
            '<ellipse cx="76" cy="88" rx="3.5" ry="2.5" fill="#c8a078"/>' +
            '<ellipse cx="84" cy="88" rx="3.5" ry="2.5" fill="#c8a078"/>' +
            '<path d="M68,98 Q80,94 92,98" stroke="#5a3a1a" stroke-width="2.5" fill="none"/>' +
            '<path d="M42,100 Q30,115 35,130 Q40,120 50,108" fill="#1a1a1a"/>' +
            '<path d="M118,100 Q130,115 125,130 Q120,120 110,108" fill="#1a1a1a"/>' +
            '<path d="M55,102 Q50,125 60,140 Q65,130 68,108" fill="#1a1a1a"/>' +
            '<path d="M105,102 Q110,125 100,140 Q95,130 92,108" fill="#1a1a1a"/>' +
            '<path d="M65,105 Q60,135 80,145 Q100,135 95,105" fill="#1a1a1a" opacity="0.9"/>' +
            '<rect x="68" y="115" width="24" height="12" rx="5" fill="#d4b080"/>' +
            '<path d="M22,132 L80,118 L138,132" stroke="#6a5a0a" stroke-width="3" fill="none"/>' +
            '<path d="M24,132 L80,120 L136,132 L140,175 Q110,178 80,175 Q50,178 20,175Z" fill="#5a4a0a" opacity="0.8"/>' +
            '<path d="M40,138 Q80,126 120,138" stroke="#7a6a2a" stroke-width="2" fill="none" opacity="0.6"/>' +
            '<path d="M50,148 Q80,136 110,148" stroke="#7a6a2a" stroke-width="2" fill="none" opacity="0.4"/>' +
            '<ellipse cx="30" cy="130" rx="16" ry="12" fill="#6a5a0a" stroke="#7a6a2a" stroke-width="1.5"/>' +
            '<ellipse cx="130" cy="130" rx="16" ry="12" fill="#6a5a0a" stroke="#7a6a2a" stroke-width="1.5"/>' +
            '</svg>'
        },

        /* ----- 金 · 诸葛亮 · 卧龙先生 ----- */
        metal: {
            bg: 'linear-gradient(135deg,#f0f0f5,#dddde8)',
            color: '#7a7a8a',
            borderColor: 'rgba(122,122,138,.15)',
            svg: '<svg viewBox="0 0 160 200" width="130" height="165">' +
            '<ellipse cx="80" cy="80" rx="34" ry="40" fill="#f0e8e0"/>' +
            '<path d="M40,52 Q42,22 60,12 Q80,6 100,12 Q118,22 120,52 L120,58 Q118,48 112,40 Q95,20 80,18 Q65,20 48,40 Q42,48 40,58Z" fill="#f5f5f5" stroke="#ddd" stroke-width="1"/>' +
            '<path d="M40,55 L30,52 L28,58 L40,62" fill="#f5f5f5" stroke="#ddd" stroke-width="0.8"/>' +
            '<path d="M120,55 L130,52 L132,58 L120,62" fill="#f5f5f5" stroke="#ddd" stroke-width="0.8"/>' +
            '<path d="M30,54 Q15,50 10,58 Q8,62 15,60" fill="none" stroke="#ddd" stroke-width="1.5" opacity="0.7"/>' +
            '<path d="M130,54 Q145,50 150,58 Q152,62 145,60" fill="none" stroke="#ddd" stroke-width="1.5" opacity="0.7"/>' +
            '<path d="M50,68 Q65,63 78,68" stroke="#5a5a5a" stroke-width="1.5" fill="none"/>' +
            '<path d="M82,68 Q95,63 110,68" stroke="#5a5a5a" stroke-width="1.5" fill="none"/>' +
            '<ellipse cx="64" cy="76" rx="7" ry="5" fill="white"/>' +
            '<ellipse cx="64" cy="76" rx="4.5" ry="4" fill="#3a3a4a"/>' +
            '<circle cx="63" cy="74" r="1.5" fill="white" opacity="0.5"/>' +
            '<ellipse cx="96" cy="76" rx="7" ry="5" fill="white"/>' +
            '<ellipse cx="96" cy="76" rx="4.5" ry="4" fill="#3a3a4a"/>' +
            '<circle cx="95" cy="74" r="1.5" fill="white" opacity="0.5"/>' +
            '<path d="M78,82 Q80,88 82,82" stroke="#c8b8a8" stroke-width="1" fill="none"/>' +
            '<path d="M72,96 Q80,106 88,96" stroke="#5a5a5a" stroke-width="1.2" fill="none"/>' +
            '<path d="M77,98 Q80,110 83,98" fill="#5a5a5a" opacity="0.5"/>' +
            '<path d="M70,95 Q80,92 90,95" stroke="#8a7a6a" stroke-width="1.5" fill="none"/>' +
            '<rect x="70" y="112" width="20" height="12" rx="4" fill="#e8ddd0"/>' +
            '<path d="M28,130 L80,115 L132,130" stroke="#7a7a8a" stroke-width="2" fill="none"/>' +
            '<path d="M30,130 L75,120 L80,117 L85,120 L130,130" fill="#8a8a9a" opacity="0.4"/>' +
            '<path d="M30,130 L25,170 Q55,175 80,172 L80,122" fill="#8a8a9a" opacity="0.6"/>' +
            '<path d="M130,130 L135,170 Q105,175 80,172 L80,122" fill="#7a7a8a" opacity="0.5"/>' +
            '<path d="M120,135 L140,150 Q145,155 140,158 L120,145" fill="#8a8a9a" opacity="0.5"/>' +
            '<ellipse cx="148" cy="155" rx="18" ry="14" fill="#d0d0d8" transform="rotate(20,148,155)"/>' +
            '<line x1="135" y1="148" x2="155" y2="162" stroke="#aaa" stroke-width="0.8" opacity="0.5"/>' +
            '<line x1="140" y1="145" x2="158" y2="158" stroke="#aaa" stroke-width="0.8" opacity="0.5"/>' +
            '<line x1="142" y1="152" x2="160" y2="160" stroke="#aaa" stroke-width="0.8" opacity="0.5"/>' +
            '<path d="M140,158 L150,165 L138,165Z" fill="#8a7a6a" opacity="0.6"/>' +
            '<line x1="148" y1="155" x2="148" y2="170" stroke="#6a5a3a" stroke-width="2"/>' +
            '</svg>'
        },

        /* ----- 水 · 曹操 · 魏武帝 ----- */
        water: {
            bg: 'linear-gradient(135deg,#dde8f0,#c0d4e4)',
            color: '#2c5f7c',
            borderColor: 'rgba(44,95,124,.15)',
            svg: '<svg viewBox="0 0 160 200" width="130" height="165">' +
            '<ellipse cx="80" cy="75" rx="38" ry="44" fill="#e8d8c8"/>' +
            '<rect x="38" y="28" width="84" height="8" rx="2" fill="#1a1a2a"/>' +
            '<rect x="35" y="30" width="90" height="4" rx="1" fill="#2a2a3a"/>' +
            '<rect x="55" y="22" width="50" height="8" rx="2" fill="#2a2a3a"/>' +
            '<rect x="65" y="16" width="30" height="8" rx="3" fill="#3a3a4a"/>' +
            '<circle cx="80" cy="14" r="5" fill="#c0392b"/>' +
            '<line x1="42" y1="36" x2="42" y2="50" stroke="#aaa" stroke-width="1"/>' +
            '<circle cx="42" cy="52" r="3" fill="#c9a84c"/>' +
            '<line x1="48" y1="36" x2="48" y2="54" stroke="#aaa" stroke-width="1"/>' +
            '<circle cx="48" cy="56" r="3" fill="#c9a84c"/>' +
            '<line x1="54" y1="36" x2="54" y2="52" stroke="#aaa" stroke-width="1"/>' +
            '<circle cx="54" cy="54" r="3" fill="#c9a84c"/>' +
            '<line x1="106" y1="36" x2="106" y2="50" stroke="#aaa" stroke-width="1"/>' +
            '<circle cx="106" cy="52" r="3" fill="#c9a84c"/>' +
            '<line x1="112" y1="36" x2="112" y2="54" stroke="#aaa" stroke-width="1"/>' +
            '<circle cx="112" cy="56" r="3" fill="#c9a84c"/>' +
            '<line x1="118" y1="36" x2="118" y2="52" stroke="#aaa" stroke-width="1"/>' +
            '<circle cx="118" cy="54" r="3" fill="#c9a84c"/>' +
            '<path d="M44,62 Q60,56 74,62" stroke="#1a1a1a" stroke-width="2.5" fill="none"/>' +
            '<path d="M86,62 Q100,56 116,62" stroke="#1a1a1a" stroke-width="2.5" fill="none"/>' +
            '<ellipse cx="64" cy="72" rx="8" ry="5.5" fill="white"/>' +
            '<ellipse cx="64" cy="73" rx="5.5" ry="4.5" fill="#1a1a2a"/>' +
            '<circle cx="62" cy="70" r="2" fill="white" opacity="0.5"/>' +
            '<ellipse cx="96" cy="72" rx="8" ry="5.5" fill="white"/>' +
            '<ellipse cx="96" cy="73" rx="5.5" ry="4.5" fill="#1a1a2a"/>' +
            '<circle cx="94" cy="70" r="2" fill="white" opacity="0.5"/>' +
            '<path d="M76,78 Q80,88 84,78" stroke="#b89878" stroke-width="1.5" fill="none"/>' +
            '<ellipse cx="78" cy="84" rx="3" ry="2" fill="#c8a888"/>' +
            '<ellipse cx="82" cy="84" rx="3" ry="2" fill="#c8a888"/>' +
            '<path d="M64,96 Q70,102 80,104 Q90,102 96,96" fill="#1a1a1a" opacity="0.7"/>' +
            '<path d="M58,92 Q64,100 72,104" stroke="#2a2a2a" stroke-width="2" fill="none" stroke-linecap="round"/>' +
            '<path d="M102,92 Q96,100 88,104" stroke="#2a2a2a" stroke-width="2" fill="none" stroke-linecap="round"/>' +
            '<path d="M68,94 Q80,90 92,94" stroke="#5a3a2a" stroke-width="2" fill="none"/>' +
            '<rect x="68" y="110" width="24" height="12" rx="5" fill="#e0d0c0"/>' +
            '<path d="M24,128 L80,115 L136,128" stroke="#2c5f7c" stroke-width="3" fill="none"/>' +
            '<path d="M26,128 L80,117 L134,128 L138,175 Q110,178 80,176 Q50,178 22,175Z" fill="#1a3a5a" opacity="0.8"/>' +
            '<path d="M60,140 Q80,130 100,140" stroke="#c9a84c" stroke-width="1.5" fill="none" opacity="0.5"/>' +
            '<path d="M65,152 Q80,142 95,152" stroke="#c9a84c" stroke-width="1.5" fill="none" opacity="0.4"/>' +
            '<circle cx="80" cy="148" r="8" fill="none" stroke="#c9a84c" stroke-width="1" opacity="0.3"/>' +
            '<ellipse cx="28" cy="130" rx="18" ry="14" fill="#1a3a5a" stroke="#2c5f7c" stroke-width="1.5"/>' +
            '<ellipse cx="132" cy="130" rx="18" ry="14" fill="#1a3a5a" stroke="#2c5f7c" stroke-width="1.5"/>' +
            '</svg>'
        }
    }
};

/* 通用导出函数：根据年龄模式获取角色艺术 */
function getCharacterArt(elementKey, ageGroup) {
    const set = ageGroup === 'young' ? CHAR_ART.young : CHAR_ART.adult;
    return set[elementKey] || set.earth;
}
window.CHAR_ART = CHAR_ART;
window.getCharacterArt = getCharacterArt;
