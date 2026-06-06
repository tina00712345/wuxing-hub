/* ========================================
   五形Hub · 五行人格体质系统
   前5题：A/B/C/D/E单项选择 + 后20题：Likert量表
   ======================================== */

// ========================================
// 1. 五行人角色档案库
// ========================================
const ELEMENT_DATA = {
    wood: {
        element: '木', elementKey: 'wood',
        icon: '🌳', color: '#4a7c59', bg: '#e8f0e4',
        character: '林黛玉', characterTitle: '潇湘妃子 · 气郁质',
        constitutions: ['气郁质'],
        season: '春季', organs: '肝胆 · 筋骨 · 四肢',
        personality: '多愁善感，沉默寡言。喜静不喜动，不爱户外活动。内心丰富敏感，情感细腻。外表清冷，内心热烈。体质偏虚，气血不足。',
        physical: '身材较瘦，个子比普通人高，肤白。体态清瘦，动作优雅但不急促。面色偏白或偏青，眼神忧郁含情。',
        traits: ['多愁善感','才情横溢','沉默寡言','内心敏感'],
        strengths: ['艺术感知力极强','思维深度超群','情感共鸣能力','创造力丰富'],
        weaknesses: ['情绪易低落','体力不足','社交回避','过度思虑'],
        suitableCareers: '作家/诗人、艺术家/设计师、心理咨询师、文学研究者、音乐人',
        teamRole: '🎭 灵魂角色——提供深度和情感洞察',
        figures: '林黛玉、李清照、屈原',
        plan: {
            keyAreas: '重点防风！后颈（风池穴）、咽喉、腰腹',
            clothing: ['【必戴】丝巾/围脖护颈——出门第一件事','降温优先添外套，避免直吹冷风'],
            diet: ['多吃疏肝理气：芹菜、菠菜、陈皮水','玫瑰花茶、薄荷茶——疏肝解郁'],
            habits: ['避免风大时外出','睡前热水泡脚，改善手脚冰凉'],
            emergency: ['受风后立即喝姜茶+按揉风池穴','感冒初起：玉屏风颗粒+热粥']
        },
        advice: '你是"弱柳扶风"的体质——美丽而需要呵护。防风是第一要务，出门必戴围巾。饮食上以疏肝理气为主。',
        do: ['随身带围巾/丝巾护颈','喝玫瑰花茶疏肝','多与温暖的人相处'],
        dont: ['在风大环境久留','吃生冷寒凉','一个人沉浸在悲伤中'],
        growthAreas: ['增强体质——从温和运动开始','学会表达——不把情绪全藏在心里','建立社交安全网']
    },
    fire: {
        element: '火', elementKey: 'fire',
        icon: '🔥', color: '#c0392b', bg: '#fce8e4',
        character: '孙悟空', characterTitle: '齐天大圣 · 湿热质/阴虚质',
        constitutions: ['湿热质','阴虚质'],
        season: '夏季', organs: '心脏 · 小肠 · 血脉 · 循环系统',
        personality: '充满活力，脾气躁，易怒，敢作敢当。不怕困难，胆量过人，喜冒险。行动力超群，是天生的开拓者。',
        physical: '瘦，肌肤薄弱，面色红润，精气神足。抬头挺胸，行动敏捷。眼神明亮有光，说话语速快。',
        traits: ['活力充沛','勇敢果决','易怒急躁','敢于冒险'],
        strengths: ['行动力超强','不畏困难','领导魅力','创新突破'],
        weaknesses: ['脾气急躁','缺乏耐心','容易冲动','忽略细节'],
        suitableCareers: '创业者/CEO、销售总监、探险家、消防/救援、竞技体育',
        teamRole: '⚡ 先锋猛将——冲在最前，打开局面',
        figures: '孙悟空、张飞、项羽',
        plan: {
            keyAreas: '防"寒包火"！咽喉（天突穴）、心脏区',
            clothing: ['轻便防风外套——你不喜欢厚重但需要防护','围巾护喉——冷空气刺激呼吸道','运动后及时擦干换衣'],
            diet: ['多吃清内热：白萝卜、梨、冬瓜、绿豆','菊花茶——清心降火','少吃辣椒、羊肉、酒'],
            habits: ['情绪管理——怒伤心脏，深呼吸十次','午间小憩养心'],
            emergency: ['咽喉上火：罗汉果+胖大海泡水','心烦失眠：莲子心茶']
        },
        advice: '你像一团不灭的火焰——热情、勇敢。但火太旺会伤身，学会"降温"：情绪激动时深呼吸，饮食多吃清火食物。',
        do: ['喝菊花茶清心降火','运动后及时擦干','午间小憩养心'],
        dont: ['暴怒后做重大决定','出汗后直接吹空调','吃太多辛辣油炸'],
        growthAreas: ['培养耐心','学会"慢"','情绪管理']
    },
    earth: {
        element: '土', elementKey: 'earth',
        icon: '⛰️', color: '#b8860b', bg: '#f5edd6',
        character: '张飞', characterTitle: '桓侯 · 平和质/痰湿质',
        constitutions: ['平和质','痰湿质','气虚质'],
        season: '每季度末18天', organs: '脾胃 · 肠 · 消化系统',
        personality: '大智若愚，忠厚笃诚，适应性强。办事谨慎，大事很镇静。看似粗犷实则心细，是团队中最可靠的基石。',
        physical: '健壮，身体匀称，肌肉丰满。体态敦实稳重，行动有力。面色红润或偏黄，耐力好力量强。',
        traits: ['忠厚可靠','大智若愚','适应性强','稳重镇定'],
        strengths: ['团队基石','危机中冷静','忠诚可靠','执行力强'],
        weaknesses: ['容易固执','不擅长变通','消化系统偏弱'],
        suitableCareers: '运营管理、工程建设、体育教练、物流/供应链、军人/警察',
        teamRole: '🛡️ 中流砥柱——稳固团队、扎实执行',
        figures: '张飞、刘备、沙僧',
        plan: {
            keyAreas: '重点护腹！肚脐（神阙穴）、脾胃区',
            clothing: ['高腰保暖内裤或背心——腹部不能受凉','外套长款护住腰腹'],
            diet: ['健脾祛湿：山药、茯苓、薏米、芡实','陈皮普洱茶——理气化湿'],
            habits: ['饭后散步10分钟助消化','避免久坐'],
            emergency: ['腹胀：陈皮姜茶+按揉足三里','受寒腹泻：丁桂儿脐贴']
        },
        advice: '你是团队的"定海神针"。脾胃是你的核心，饮食规律、不吃生冷、少食多餐。',
        do: ['喝陈皮普洱茶健脾','腹部保暖贴暖宝宝','饭后散步'],
        dont: ['暴饮暴食','吃生冷沙拉冰饮','久坐超过1小时'],
        growthAreas: ['培养灵活性','学会沟通','关注消化']
    },
    metal: {
        element: '金', elementKey: 'metal',
        icon: '⚔️', color: '#7a7a8a', bg: '#f0f0f2',
        character: '诸葛亮', characterTitle: '卧龙 · 血瘀质/特禀质',
        constitutions: ['血瘀质','特禀质'],
        season: '秋季', organs: '肺 · 大肠 · 气管 · 呼吸系统',
        personality: '坚持原则，为人敦厚，认真负责。话少但语出惊人，每言必中。思维缜密，谋定而后动。',
        physical: '体型瘦小，脊背宽，四方脸。鼻直口阔，四肢清瘦，动作敏捷。肤白，呼吸平缓。',
        traits: ['坚持原则','思维缜密','敦厚认真','精益求精'],
        strengths: ['战略思维','专业精深','原则性强','精益求精'],
        weaknesses: ['容易固执','社交偏少','过度完美主义','呼吸道敏感'],
        suitableCareers: '战略顾问、技术专家、研究员、法官/合规官、精算师',
        teamRole: '🧠 智囊核心——提供精准判断和战略方向',
        figures: '诸葛亮、包拯、周恩来',
        plan: {
            keyAreas: '重点护肺！咽喉（天突穴）、气管、皮肤',
            clothing: ['高领毛衣或围巾护喉——防止冷空气直入呼吸道','口罩必备'],
            diet: ['润肺：百合、银耳、雪梨、杏仁','麦冬罗汉果茶——润喉清肺'],
            habits: ['室内加湿器——湿度50%+','保湿护肤'],
            emergency: ['干咳：冰糖炖雪梨+川贝粉','咽喉痛：罗汉果+胖大海']
        },
        advice: '你是"精工出细活"的类型。肺和呼吸道是你的薄弱环节，加湿器、口罩、围巾是你的"三件套"。',
        do: ['戴口罩护呼吸道','喝麦冬茶润肺','室内放加湿器'],
        dont: ['吸入冷空气和二手烟','在干燥环境久留','过度追求完美'],
        growthAreas: ['学会放松','扩展社交','接受不完美']
    },
    water: {
        element: '水', elementKey: 'water',
        icon: '💧', color: '#2c5f7c', bg: '#e0edf5',
        character: '曹操', characterTitle: '魏武帝 · 阳虚质',
        constitutions: ['阳虚质'],
        season: '冬季', organs: '肾 · 膀胱 · 骨骼 · 耳',
        personality: '高深莫测，沉默寡言，神情不定。如同深海——表面平静，内里暗流涌动。有极强的城府和谋略。',
        physical: '较胖或偏壮实，肤色偏黑。行动迟缓但稳健。怕冷，手脚常年冰凉。体态厚重。',
        traits: ['深藏不露','多疑善谋','沉默寡言','城府极深'],
        strengths: ['战略家思维','隐忍待机','洞察人心','处变不惊'],
        weaknesses: ['多疑不信任人','心胸偏窄','过于保守'],
        suitableCareers: '战略决策者、投资家、幕后军师、风险管理、情报分析',
        teamRole: '🎯 幕后操盘——掌控全局、运筹帷幄',
        figures: '曹操、司马懿、雍正',
        plan: {
            keyAreas: '全身保暖！后腰（命门穴）、膝盖、脚底',
            clothing: ['长款羽绒服（过膝）——保护腰背和膝盖','暖宝宝贴后腰命门穴','厚羊毛袜+雪地靴'],
            diet: ['大温大补：当归生姜羊肉汤','肉桂姜茶——全天温饮','所有饭菜加姜和胡椒'],
            habits: ['晨起一杯姜枣红糖水','每天背部晒太阳15-30分钟','睡前艾叶泡脚'],
            emergency: ['全身冰冷：热水澡+当归生姜羊肉汤','腰膝冷痛：暖宝宝贴命门']
        },
        advice: '你是"深海"一样的人。偏寒偏虚——怕冷、手脚冰凉。养生关键词是"温补"——温阳补肾、驱寒暖身。',
        do: ['喝肉桂姜茶温阳','腰部贴暖宝宝','每天晒太阳','睡前热水泡脚'],
        dont: ['吃冷饮和冰品','冬天手脚受凉','长期独处多疑'],
        growthAreas: ['学会信任','打开心扉','身体暖起来']
    }
};

const ELEMENT_MAP = {
    wood: { element: '木', color: '#4a7c59', bg: '#e8f0e4', icon: '🌳', label: '木形人' },
    fire: { element: '火', color: '#c0392b', bg: '#fce8e4', icon: '🔥', label: '火形人' },
    earth: { element: '土', color: '#b8860b', bg: '#f5edd6', icon: '⛰️', label: '土形人' },
    metal: { element: '金', color: '#7a7a8a', bg: '#f0f0f2', icon: '⚔️', label: '金形人' },
    water: { element: '水', color: '#2c5f7c', bg: '#e0edf5', icon: '💧', label: '水形人' }
};

const CONSTITUTION_MAP = {
    '平和质': { icon: '☯', desc: '阴阳平衡，体魄强健' },
    '气虚质': { icon: '💨', desc: '气力不足，容易疲倦' },
    '阳虚质': { icon: '❄️', desc: '阳气不足，怕冷畏寒' },
    '阴虚质': { icon: '🔥', desc: '阴液亏虚，虚火内扰' },
    '痰湿质': { icon: '💧', desc: '痰湿凝聚，体型偏胖' },
    '湿热质': { icon: '🌡️', desc: '湿热内蕴，容易长痘' },
    '血瘀质': { icon: '🩸', desc: '血液运行不畅，易有疼痛' },
    '气郁质': { icon: '🌪️', desc: '气机郁滞，多愁善感' },
    '特禀质': { icon: '⚡', desc: '先天特殊，容易过敏' }
};

// ========================================
// 2. 25道题
// 前5题：A/B/C/D/E 单项选择 + 描述
// 后20题：Likert量表
// ========================================
const QUESTIONS = [
    // Q1-Q5: 单项选择（A=0→木, B=1→火, C=2→土, D=3→金, E=4→水）
    { id: 1, text: '你的脸型更符合下列哪一项？', category: '五行辨识·脸型', type: 'single',
      options: ['A 瘦长椭圆脸，轮廓修长','B 尖窄小脸，线条锐利','C 圆润方圆脸，轮廓饱满','D 方正棱角脸，骨感清晰','E 宽脸柔润型，线条柔和'] },
    { id: 2, text: '你的身形体态和哪个最接近？', category: '五行辨识·身形', type: 'single',
      options: ['A 瘦高挺拔，四肢修长','B 偏瘦小紧凑，不爱臃肿','C 敦实圆润，肌肉饱满','D 结实匀称，骨架有力','E 丰满厚实，曲线柔和'] },
    { id: 3, text: '你怕冷的程度是？', category: '五行辨识·怕冷', type: 'single',
      options: ['A 一般怕冷，主要怕风','B 不太怕冷，怕燥热','C 中等怕冷，怕湿冷','D 轻微怕冷，怕干冷','E 极度怕冷，手脚冰凉'] },
    { id: 4, text: '你换季的时候，容易出现下列哪些情况？', category: '五行辨识·换季', type: 'single',
      options: ['A 降温易咳嗽、呼吸道不适','B 降温易上火、咽喉干痛','C 降温易腹胀、脾胃不适','D 降温易鼻塞、皮肤干燥','E 降温易畏寒、全身乏力'] },
    { id: 5, text: '以下日常环境，你最喜欢哪个？', category: '五行辨识·偏好', type: 'single',
      options: ['A 喜欢通风、清爽环境','B 喜欢温暖、向阳环境','C 喜欢干爽、温和环境','D 喜欢干净、凉爽环境','E 喜欢温热、保暖环境'] },

    // Q6-Q25: Likert量表
    { id: 6, text: '我更喜欢探索多种可能性，而不是专注一个方向', category: '人格·思维', type: 'likert', affects: { divergent: 0.7 } },
    { id: 7, text: '做事前我喜欢制定详细计划并严格执行', category: '人格·思维', type: 'likert', affects: { convergent: 0.7 } },
    { id: 8, text: '我习惯同时处理多个任务和想法', category: '人格·思维', type: 'likert', affects: { divergent: 0.6 } },
    { id: 9, text: '我擅长在杂乱信息中找到规律和逻辑', category: '人格·思维', type: 'likert', affects: { convergent: 0.5 } },
    { id: 10, text: '我喜欢有明确规则和标准的工作环境', category: '人格·思维', type: 'likert', affects: { convergent: 0.6 } },
    { id: 11, text: '在社交场合我通常是活跃气氛的那个人', category: '人格·能量', type: 'likert', affects: { extrovert: 0.7 } },
    { id: 12, text: '独处对我来说是必不可少的充电时间', category: '人格·能量', type: 'likert', affects: { introvert: 0.7 } },
    { id: 13, text: '我的情绪容易表现在脸上，别人能看出来', category: '人格·能量', type: 'likert', affects: { extrovert: 0.5 } },
    { id: 14, text: '我喜欢一对一深度交流胜过多人聚会', category: '人格·能量', type: 'likert', affects: { introvert: 0.6 } },
    { id: 15, text: '讨论时我先听别人说，最后才发表意见', category: '人格·能量', type: 'likert', affects: { introvert: 0.5 } },
    { id: 16, text: '我很少生病，即使病了恢复也很快', category: '人格·体质', type: 'likert', affects: { robust: 0.7 } },
    { id: 17, text: '换季时我特别容易感冒或不舒服', category: '人格·体质', type: 'likert', affects: { sensitive: 0.7 } },
    { id: 18, text: '我的精力很充沛，很少感到疲倦', category: '人格·体质', type: 'likert', affects: { robust: 0.6 } },
    { id: 19, text: '我对气候、食物和环境的变化很敏感', category: '人格·体质', type: 'likert', affects: { sensitive: 0.6 } },
    { id: 20, text: '我的睡眠质量高，入睡快，很少失眠', category: '人格·体质', type: 'likert', affects: { robust: 0.5 } },
    { id: 21, text: '遇到烦心事我很快就能放下，不纠结', category: '人格·情绪', type: 'likert', affects: { stable: 0.7 } },
    { id: 22, text: '我容易想很多，睡前会反复回想白天的事', category: '人格·情绪', type: 'likert', affects: { pensive: 0.7 } },
    { id: 23, text: '我在人群中感到自在舒适，人缘不错', category: '人格·情绪', type: 'likert', affects: { stable: 0.5 } },
    { id: 24, text: '我时常感到莫名的忧郁或伤感', category: '人格·情绪', type: 'likert', affects: { pensive: 0.7 } },
    { id: 25, text: '我的情绪整体比较稳定，不会大起大落', category: '人格·情绪', type: 'likert', affects: { stable: 0.6 } }
];

// ========================================
// 3. 评分引擎
// ========================================
function calculateType(answers) {
    if (!answers || answers.length < 25) return null;

    // ---- Part 1: 前5题 (单项选择, A=0=wood, B=1=fire, C=2=earth, D=3=metal, E=4=water) ----
    const elKeys = ['wood','fire','earth','metal','water'];
    const elScore = { wood: 0, fire: 0, earth: 0, metal: 0, water: 0 };
    let totalScore = 0;

    for (let i = 0; i < 5; i++) {
        const val = answers[i];
        if (val === undefined || val === null) continue;
        const idx = Math.max(0, Math.min(4, Math.round(val)));
        elScore[elKeys[idx]] += idx + 1; // 1-5分
        totalScore += idx + 1;
    }

    // 判定主元素
    let primaryEl = 'earth', primaryScore = 0;
    for (let el in elScore) {
        if (elScore[el] > primaryScore) { primaryScore = elScore[el]; primaryEl = el; }
    }

    // ---- Part 2: 后20题 (Likert量表) ----
    const axScores = {
        divergent: 0, convergent: 0,
        extrovert: 0, introvert: 0,
        robust: 0, sensitive: 0,
        stable: 0, pensive: 0
    };

    for (let i = 5; i < 25; i++) {
        const val = answers[i];
        if (val === undefined || val === null) continue;
        const q = QUESTIONS[i];
        if (!q || !q.affects) continue;
        const w = (Math.max(0, Math.min(4, Math.round(val))) - 2) / 2; // 0→-1, 1→-0.5, 2→0, 3→0.5, 4→1
        for (let k in q.affects) {
            if (axScores.hasOwnProperty(k)) axScores[k] += q.affects[k] * w;
        }
    }

    // 归一化
    const norm = {};
    for (let k in axScores) norm[k] = Math.max(0, Math.min(100, (axScores[k] + 4) / 8 * 100));

    // ---- Part 3: 加载角色数据 ----
    const ed = JSON.parse(JSON.stringify(ELEMENT_DATA[primaryEl] || ELEMENT_DATA.earth));

    // ---- 体质倾向 ----
    const cs = {};
    ['平和质','气虚质','阳虚质','阴虚质','气郁质','特禀质','痰湿质','湿热质','血瘀质'].forEach(c => cs[c] = 0);
    Object.entries(elScore).forEach(([el, sc]) => {
        const base = {
            wood: { '气郁质': 3, '气虚质': 2 },
            fire: { '阴虚质': 3, '湿热质': 2 },
            earth: { '痰湿质': 3, '平和质': 2 },
            metal: { '血瘀质': 3, '特禀质': 2 },
            water: { '阳虚质': 3, '气虚质': 2 }
        };
        Object.entries(base[el] || {}).forEach(([k, v]) => { cs[k] = (cs[k] || 0) + sc * v; });
    });
    if (norm.robust > 55) cs['平和质'] += 15;
    if (norm.sensitive > 55) cs['气虚质'] += 12;
    if (norm.pensive > 55) cs['气郁质'] += 12;
    if (norm.stable > 55) cs['平和质'] += 10;

    const sortedCons = Object.entries(cs).sort((a, b) => b[1] - a[1]);

    // ---- 轴结果 ----
    const axStyle = norm.divergent >= norm.convergent ? 'divergent' : 'convergent';
    const axEnergy = norm.extrovert >= norm.introvert ? 'extrovert' : 'introvert';
    const axConstitution = norm.robust >= norm.sensitive ? 'robust' : 'sensitive';
    const axTemper = norm.stable >= norm.pensive ? 'stable' : 'pensive';

    ed.axisResults = { style: axStyle, energy: axEnergy, constitution: axConstitution, temperament: axTemper };
    ed.scores = norm;
    ed.elementScores = {
        '木': Math.round(elScore.wood / 5 * 100),
        '火': Math.round(elScore.fire / 5 * 100),
        '土': Math.round(elScore.earth / 5 * 100),
        '金': Math.round(elScore.metal / 5 * 100),
        '水': Math.round(elScore.water / 5 * 100)
    };
    ed.primaryElement = primaryEl;
    ed.primaryElementChinese = ELEMENT_MAP[primaryEl]?.element || '土';
    ed.elementTotal = totalScore;
    ed.constitutionScores = cs;
    ed.primaryConstitution = sortedCons[0][0];
    ed.constitutionRanking = sortedCons;
    ed.codeShort = `${ELEMENT_MAP[primaryEl]?.element || '土'}${axStyle[0].toUpperCase()}${axEnergy[0].toUpperCase()}`;
    ed.quadrantName = `${ELEMENT_MAP[primaryEl]?.element || '土'}形人`;
    ed.name = `${ELEMENT_MAP[primaryEl]?.element || '土'}形人 · ${ed.character}`;
    ed.isLinDaiyu = primaryEl === 'wood' && norm.sensitive > 45 && norm.pensive > 45;

    return ed;
}

// ========================================
// 4. AI问答数据库
// ========================================
const QA_DATA = [
    {
        keywords: ['降温','感冒','受凉','着凉','咳嗽','流鼻涕'],
        answer: '先完成体质测试，获取你的专属防寒方案！可护颈、添衣、食疗三重防护，远离受凉感冒～'
    },
    {
        keywords: ['多少度','温度','天气','气温','加衣服','穿什么'],
        answer: function(city) {
            const temp = typeof getCityCurrentTemp !== 'undefined' ? getCityCurrentTemp(city || '北京') : null;
            if (temp !== null) {
                const risk = temp <= -5 ? '高' : temp <= 2 ? '中' : '低';
                return `${city||'北京'}今日气温${temp}℃，体感${temp-2}℃，受寒风险【${risk}】。建议完成体质测试，获取五形专属添衣指南！`;
            }
            return '请输入城市名查询当地天气，或先完成体质测试获取专属防寒方案！';
        }
    },
    {
        keywords: ['怎么测','测试','体质','五形','测评','检测'],
        answer: '进入首页，完成25道小问卷（前5题选脸型身形，后20题选符合程度），即可一键判定你的五行体质！全程免费，无需注册～'
    },
    {
        keywords: ['订阅','提醒','推送','每天','每日'],
        answer: '每日推送当地天气+受寒风险+五形专属添衣指南，寒潮自动预警，天冷主动喊你加衣服！'
    },
    {
        keywords: ['你好','在吗','hi','您好','喂'],
        answer: '你好！我是五形Hub智能助手～你可以问我天气、体质、防寒等问题，也可以先完成测评获取专属方案！'
    },
    {
        keywords: ['林黛玉','黛玉','潇湘'],
        answer: '林黛玉是典型的木形人（气郁质），多愁善感、才情横溢。她的防寒关键是——防风！出门必戴丝巾护颈，多吃芹菜菠菜疏肝理气。'
    },
    {
        keywords: ['孙悟空','悟空','大圣'],
        answer: '孙悟空是典型的火形人（湿热质/阴虚质），活力充沛、勇敢果断。他的防寒关键是——防"寒包火"！注意护咽喉，少吃辛辣。'
    },
    {
        keywords: ['张飞','桓侯'],
        answer: '张飞是典型的土形人（平和质/痰湿质），忠厚可靠、稳重镇定。他的防寒关键是——护腹！健脾祛湿，少吃生冷。'
    },
    {
        keywords: ['诸葛亮','孔明','卧龙'],
        answer: '诸葛亮是典型的金形人（血瘀质/特禀质），思维缜密、坚持原则。他的防寒关键是——护肺！戴口罩防冷空气，室内用加湿器。'
    },
    {
        keywords: ['曹操','魏武'],
        answer: '曹操是典型的水形人（阳虚质），深藏不露、多疑善谋。他的防寒关键是——温补！全身保暖，喝当归生姜羊肉汤。'
    }
];

// ========================================
// 5. 问答匹配函数
// ========================================
function findAnswer(input, city) {
    if (!input) return '请告诉我你想了解什么？';
    const text = input.toLowerCase();

    for (let qa of QA_DATA) {
        for (let kw of qa.keywords) {
            if (text.includes(kw)) {
                if (typeof qa.answer === 'function') return qa.answer(city || '北京');
                return qa.answer;
            }
        }
    }
    return '你可以问我：怎么测体质？今天降温怎么办？XX城市多少度？订阅提醒等功能～';
}

// ========================================
// 6. 导出
// ========================================
window.ELEMENT_DATA = ELEMENT_DATA;
window.ELEMENT_MAP = ELEMENT_MAP;
window.CONSTITUTION_MAP = CONSTITUTION_MAP;
window.QUESTIONS = QUESTIONS;
window.calculateType = calculateType;
window.findAnswer = findAnswer;
window.QA_DATA = QA_DATA;

window.LIN_DAIYU = {
    name: '林黛玉', title: '潇湘妃子',
    poem: '两弯似蹙非蹙罥烟眉，一双似喜非喜含情目。\n闲静时如姣花照水，行动处似弱柳扶风。',
    tags: ['多愁善感','才情横溢','体弱多病','气郁质'],
    personality: ELEMENT_DATA.wood.personality
};
