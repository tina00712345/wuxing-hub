/* ========================================
   五质十六型 · 气温骤降预警系统
   针对五形人的定制防寒推送
   ======================================== */

// ========================================
// 1. 中国主要城市基础气温数据（参考）
// ========================================
const CITY_TEMP_DATA = {
    '北京': { lat: 39.9, winterAvg: -4, region: '华北' },
    '上海': { lat: 31.2, winterAvg: 4, region: '华东' },
    '广州': { lat: 23.1, winterAvg: 13, region: '华南' },
    '深圳': { lat: 22.5, winterAvg: 14, region: '华南' },
    '成都': { lat: 30.6, winterAvg: 5, region: '西南' },
    '杭州': { lat: 30.3, winterAvg: 4, region: '华东' },
    '武汉': { lat: 30.6, winterAvg: 4, region: '华中' },
    '南京': { lat: 32.1, winterAvg: 2, region: '华东' },
    '重庆': { lat: 29.6, winterAvg: 7, region: '西南' },
    '西安': { lat: 34.3, winterAvg: 0, region: '西北' },
    '长沙': { lat: 28.2, winterAvg: 5, region: '华中' },
    '郑州': { lat: 34.8, winterAvg: 1, region: '华中' },
    '沈阳': { lat: 41.8, winterAvg: -10, region: '东北' },
    '哈尔滨': { lat: 45.8, winterAvg: -19, region: '东北' },
    '长春': { lat: 43.9, winterAvg: -15, region: '东北' },
    '大连': { lat: 38.9, winterAvg: -4, region: '东北' },
    '青岛': { lat: 36.1, winterAvg: -1, region: '华东' },
    '济南': { lat: 36.7, winterAvg: 0, region: '华东' },
    '厦门': { lat: 24.5, winterAvg: 12, region: '华南' },
    '昆明': { lat: 25.0, winterAvg: 8, region: '西南' },
    '贵阳': { lat: 26.7, winterAvg: 5, region: '西南' },
    '南宁': { lat: 22.8, winterAvg: 12, region: '华南' },
    '兰州': { lat: 36.0, winterAvg: -4, region: '西北' },
    '乌鲁木齐': { lat: 43.8, winterAvg: -14, region: '西北' },
    '拉萨': { lat: 29.7, winterAvg: -2, region: '西南' },
    '天津': { lat: 39.1, winterAvg: -3, region: '华北' },
    '石家庄': { lat: 38.0, winterAvg: -2, region: '华北' },
    '太原': { lat: 37.9, winterAvg: -5, region: '华北' },
    '合肥': { lat: 31.8, winterAvg: 3, region: '华东' },
    '南昌': { lat: 28.7, winterAvg: 5, region: '华东' },
    '福州': { lat: 26.1, winterAvg: 10, region: '华东' },
    '海口': { lat: 20.0, winterAvg: 18, region: '华南' },
    '呼和浩特': { lat: 40.8, winterAvg: -11, region: '华北' },
    '西宁': { lat: 36.6, winterAvg: -7, region: '西北' },
    '银川': { lat: 38.5, winterAvg: -7, region: '西北' }
};

// ========================================
// 2. 预警等级定义
// ========================================
const ALERT_LEVELS = [
    {
        level: 4,
        name: '红色预警',
        desc: '⚠️ 极端寒潮',
        color: '#c0392b',
        bg: '#fce8e4',
        condition: '24h内降温 ≥ 12°C 或 最低温 ≤ -15°C',
        icon: '🔴'
    },
    {
        level: 3,
        name: '橙色预警',
        desc: '⚠️ 强降温',
        color: '#e67e22',
        bg: '#fef0e0',
        condition: '24h内降温 8-11°C 或 最低温 ≤ -8°C',
        icon: '🟠'
    },
    {
        level: 2,
        name: '黄色预警',
        desc: '⚠️ 降温提醒',
        color: '#c9a84c',
        bg: '#fef8e0',
        condition: '24h内降温 4-7°C 或 最低温 ≤ 0°C',
        icon: '🟡'
    },
    {
        level: 1,
        name: '蓝色预警',
        desc: '🌬️ 注意防寒',
        color: '#3498db',
        bg: '#e8f4fd',
        condition: '24h内降温 2-3°C 或 最低温 ≤ 5°C',
        icon: '🔵'
    },
    {
        level: 0,
        name: '正常',
        desc: '✅ 无需特别防护',
        color: '#4a7c59',
        bg: '#e8f0e4',
        condition: '温度稳定或轻微变化',
        icon: '✅'
    }
];

// ========================================
// 3. 五形人 · 定制预警内容
// ========================================
const ELEMENT_ALERT_DATA = {
    // ====== 木形人：怕风 · 护颈 · 疏肝 ======
    wood: {
        name: '木形人',
        icon: '🌳',
        color: '#4a7c59',
        keywords: '怕风 · 肝气不舒 · 易头痛',
        alerts: {
            1: {
                title: '🌬️ 微风降温 · 护颈为先',
                clothing: '今天风有点大，出门加一条轻便围巾或丝巾，重点保护后颈部风池穴。别嫌麻烦——这是你的"命门"。',
                diet: '喝一杯菊花薄荷茶（菊花5朵+薄荷3片），疏肝防风。少吃生冷。',
                action: '✅ 今日只需：加条围巾即可',
                acupoint: '按揉风池穴（后颈发际线凹陷处）3分钟'
            },
            2: {
                title: '🍂 降温明显 · 防风防头痛',
                clothing: '降温+起风=你的"高危日"！围巾必备，建议换成羊毛材质外套。头部也要保暖，戴帽子。',
                diet: '陈皮水+生姜红糖水交替喝。多吃芹菜、菠菜疏肝理气。避免吃太辛辣。',
                action: '✅ 重点防风：围巾+帽子+温水',
                acupoint: '按揉太阳穴+风池穴+太冲穴（脚背第一二跖骨间）'
            },
            3: {
                title: '❄️ 强寒潮来袭 · 减少外出',
                clothing: '寒潮+大风，你的"最差组合"！今天就当"宅人"吧，非得出门必须：帽子+围巾+口罩+防风外套全套。',
                diet: '煮一壶黄芪防风茶（黄芪10g+防风5g+白术5g），这是玉屏风散的简化版，提升抵抗力。喝热粥养胃气。',
                action: '⚠️ 非必要不出门，出门全副武装',
                acupoint: '艾灸风门穴（背部第二胸椎下旁开1.5寸）或大椎穴'
            },
            4: {
                title: '🔴 极端寒潮 · 一级戒备',
                clothing: '极端天气！今天务必待在室内。如必须外出：羽绒服+帽子+围巾+口罩+手套全套。户外不超过20分钟。',
                diet: '黄芪桂枝汤（黄芪15g+桂枝10g+生姜5片+红枣5颗）——散风寒补气血。全天喝温热的。',
                action: '🚨 减少一切外出，在家做好保暖',
                acupoint: '艾灸足三里（膝下3寸）+关元穴（肚脐下3寸）'
            }
        }
    },
    // ====== 火形人：内热 · 寒包火 · 护咽喉 ======
    fire: {
        name: '火形人',
        icon: '🔥',
        color: '#c0392b',
        keywords: '内热 · 寒包火 · 咽喉敏感',
        alerts: {
            1: {
                title: '🌬️ 微降温 · 护好咽喉',
                clothing: '天凉了，但你不至于穿太多。关键：一条薄围巾护住咽喉（天突穴），防止冷空气直接刺激呼吸道。',
                diet: '喝点麦冬菊花茶润润肺。多吃白萝卜、梨——清内热防"寒包火"。',
                action: '✅ 围巾护喉+润肺茶饮',
                acupoint: '按揉天突穴（锁骨中间凹陷处）'
            },
            2: {
                title: '🍂 降温+燥 · 防寒包火',
                clothing: '气温下降，嗓子可能先抗议了。穿防风外套，内搭不要太厚——你容易出汗后受凉。',
                diet: '冰糖炖雪梨（雪梨+冰糖+川贝3g）润肺防燥。少吃辣——你内热重，辣椒会火上浇油。',
                action: '✅ 重点防"寒包火"：润肺+轻保暖',
                acupoint: '按揉迎香穴（鼻翼旁开0.5寸）+合谷穴（虎口处）'
            },
            3: {
                title: '❄️ 强降温 · 警惕"外寒内热"',
                clothing: '寒潮来了！你的体质最容易"寒包火"——外面受寒，里面上火。穿高领毛衣+围巾护住气管。室内加湿器开起来。',
                diet: '白萝卜汤+姜茶交替喝。萝卜清内热，生姜驱外寒——绝配。避免羊肉、辣椒等温燥食物。',
                action: '⚠️ 外防风+内清热+室内保湿',
                acupoint: '搓热大椎穴（后颈凸起处）+按揉曲池穴（肘横纹外侧端）'
            },
            4: {
                title: '🔴 极端寒潮 · 呼吸道一级防护',
                clothing: '极端低温！你的呼吸道最脆弱——出门必须戴口罩+围巾，让吸入空气经过"预热"。羽绒服+高领毛衣。',
                diet: '罗汉果+胖大海泡水润肺。银耳雪梨羹养阴润燥。全天喝温水保持咽喉湿润。',
                action: '🚨 口罩必备+室内加湿+润肺饮食',
                acupoint: '艾灸肺俞穴（背部第三胸椎下旁开1.5寸）'
            }
        }
    },
    // ====== 土形人：脾胃 · 祛湿 · 暖腹 ======
    earth: {
        name: '土形人',
        icon: '⛰️',
        color: '#b8860b',
        keywords: '脾胃敏感 · 湿气重 · 易消化不良',
        alerts: {
            1: {
                title: '🌬️ 微降温 · 暖胃为先',
                clothing: '降温了，你的脾胃最怕凉。加一件马甲/背心护住腹部（神阙穴），比加外套更重要。',
                diet: '喝陈皮姜茶（陈皮5g+生姜2片+红糖），理气暖胃。吃山药粥或小米粥养胃。',
                action: '✅ 腹部保暖要做好',
                acupoint: '顺时针按摩肚脐周围50圈'
            },
            2: {
                title: '🍂 降温明显 · 健脾祛湿',
                clothing: '天冷了，你容易"凉到胃"。穿高腰保暖内裤或贴暖宝宝在肚脐位置。下半身也要保暖——寒气从脚起。',
                diet: '茯苓山药排骨汤（健脾祛湿）+ 陈皮普洱茶。少吃水果、冷盘等生冷食物。',
                action: '✅ 重点暖腹+健脾饮食',
                acupoint: '按揉足三里（膝下3寸）+中脘穴（肚脐上4寸）'
            },
            3: {
                title: '❄️ 强寒潮 · 脾胃一级保护',
                clothing: '寒潮来袭！你最怕的"湿冷"天气来了。保暖内衣+羊毛衫+羽绒服。腰腹部贴两个暖宝宝（前神阙+后命门）。',
                diet: '生姜红枣粥（生姜5片+红枣5颗+粳米50g）暖胃驱寒。用桂皮、丁香、八角等温热香料做饭。',
                action: '⚠️ 腹部保暖+温热饮食+避湿冷',
                acupoint: '艾灸足三里+中脘穴+关元穴'
            },
            4: {
                title: '🔴 极端寒潮 · 防"寒湿入体"',
                clothing: '极端低温+可能雨雪=你的"致命组合"。全身保暖尤其腰腹。穿防潮防风的羽绒服，不要让湿冷空气渗入。',
                diet: '当归生姜羊肉汤（当归10g+生姜15g+羊肉250g）——温中散寒第一方。全天喝热茶热汤。',
                action: '🚨 防寒+防潮，尽量待在温暖室内',
                acupoint: '艾灸命门穴（后腰正中）+神阙穴（肚脐）'
            }
        }
    },
    // ====== 金形人：怕干冷 · 润肺 · 护皮肤 ======
    metal: {
        name: '金形人',
        icon: '⚔️',
        color: '#7a7a8a',
        keywords: '怕干冷 · 皮肤干燥 · 易咳嗽',
        alerts: {
            1: {
                title: '🌬️ 微降温 · 护好呼吸道',
                clothing: '降温了，虽然你不怕冷但呼吸道敏感。一条围巾遮住口鼻，避免直接吸入冷空气刺激。',
                diet: '麦冬+罗汉果泡水，润肺防燥。多吃百合、银耳等白色食物——白色入肺。',
                action: '✅ 护住口鼻呼吸+润肺',
                acupoint: '按揉天突穴+膻中穴（两乳连线中点）'
            },
            2: {
                title: '🍂 降温+干燥 · 重点润肺',
                clothing: '天冷又干——你的"双杀"天气来了。室内开加湿器（湿度50%+），出门戴口罩。穿纯棉内衣防静电和皮肤干燥。',
                diet: '冰糖炖雪梨+川贝（润肺止咳）。多喝水但别喝冰水——需要的是"温润"。',
                action: '✅ 加湿+润肺+保护皮肤',
                acupoint: '按揉尺泽穴（肘横纹中）+列缺穴（手腕拇指侧）'
            },
            3: {
                title: '❄️ 强寒潮 · 全身保湿大作战',
                clothing: '干冷寒潮！你的皮肤和呼吸道最受罪。出门口罩+围巾+高领毛衣三件套。护手霜和润唇膏贴身带。',
                diet: '沙参玉竹老鸭汤或银耳百合羹——极致润燥。全天喝温蜂蜜水保持呼吸道湿润。',
                action: '⚠️ 内润肺+外护肤+室内加湿',
                acupoint: '按揉太渊穴（手腕横纹桡侧）+肺俞穴'
            },
            4: {
                title: '🔴 极端寒潮 · 呼吸系统一级防护',
                clothing: '极端干冷！肺最怕这种天气。出门必须：N95口罩+厚围巾+高领毛衣+防风大衣。护手霜+润唇膏+面霜不能少。',
                diet: '川贝炖雪梨+沙参麦冬茶+银耳羹——润肺三重奏。房间放加湿器+一盆水。',
                action: '🚨 极致保湿+呼吸道保护+减少外出',
                acupoint: '艾灸肺俞穴+膏肓穴（背部第四胸椎下旁开3寸）'
            }
        }
    },
    // ====== 水形人：怕冷 · 阳虚 · 暖全身 ======
    water: {
        name: '水形人',
        icon: '💧',
        color: '#2c5f7c',
        keywords: '怕冷 · 阳虚 · 手脚冰凉',
        alerts: {
            1: {
                title: '🌬️ 微降温 · 暖身开始',
                clothing: '降温了，手脚开始凉了吧？加一双厚袜子和一件背心。睡前热水泡脚（42℃/15分钟），今晚会好睡很多。',
                diet: '桂圆红枣姜茶（桂圆5颗+红枣3颗+生姜2片+红糖）——暖身暖心。',
                action: '✅ 泡脚+暖饮+加袜子',
                acupoint: '按揉涌泉穴（脚底前1/3处）+搓热脚心'
            },
            2: {
                title: '🍂 降温明显 · 全身暖养',
                clothing: '你的"怕冷模式"启动了。保暖内衣+羊毛衫+外套，秋裤穿起来！脚踝不能露——这是你的死穴。暖宝宝贴后腰命门穴。',
                diet: '当归生姜羊肉汤安排上。生姜红糖水全天喝。所有饭菜里多放姜和胡椒。',
                action: '✅ 秋裤+暖宝宝+温热饮食',
                acupoint: '搓热后腰命门穴+按揉三阴交（脚踝内侧上3寸）'
            },
            3: {
                title: '❄️ 强寒潮 · 一级保暖',
                clothing: '寒潮是你最难熬的。今天执行"三层穿衣法"：保暖内衣+羊毛衫+长款羽绒服。帽子围巾手套暖宝宝全套。穿厚羊毛袜+雪地靴。',
                diet: '附子羊肉汤或十全大补鸡汤（一周3次）。每天早上一杯姜枣红糖水唤醒阳气。',
                action: '⚠️ 全副武装+温热大补+减少外出',
                acupoint: '艾灸关元穴+命门穴+足三里'
            },
            4: {
                title: '🔴 极端寒潮 · 终极保暖',
                clothing: '极端低温！你的一天应该是：在被窝里喝热茶，在暖气旁看书。非出门不可？把自己穿成"球"——能穿多厚穿多厚！',
                diet: '附子羊肉汤+黄芪当归肉桂茶（黄芪10g+当归5g+肉桂3g）。睡前一杯黄酒驱寒。一切冷的食物都别碰。',
                action: '🚨 待在室内！必要出门全副武装',
                acupoint: '艾灸关元穴+命门穴+涌泉穴+足三里'
            }
        }
    }
};

// ========================================
// 4. 用户五行类型推断
// ========================================

// 从测评结果的四轴推断五行
function getPrimaryElement(result) {
    if (result && result.elementScores) {
        const elements = result.elementScores;
        const map = { '木': 'wood', '火': 'fire', '土': 'earth', '金': 'metal', '水': 'water' };
        let maxEl = '土', maxVal = 0;
        for (let el in elements) {
            if (elements[el] > maxVal) {
                maxVal = elements[el];
                maxEl = el;
            }
        }
        return map[maxEl] || 'earth';
    }

    // 从轴推断
    if (result && result.axisResults) {
        const ax = result.axisResults;
        if (ax.style === 'divergent' && ax.energy === 'extrovert') return 'wood';
        if (ax.style === 'divergent' && ax.energy === 'introvert') return 'water';
        if (ax.style === 'convergent' && ax.energy === 'extrovert') return 'fire';
        if (ax.style === 'convergent' && ax.energy === 'introvert') return 'metal';
    }
    return 'earth';
}

// 获取五行中文名
function getElementChinese(elementKey) {
    const map = { wood: '木', fire: '火', earth: '土', metal: '金', water: '水' };
    return map[elementKey] || '土';
}

// ========================================
// 5. 预警计算引擎
// ========================================

/**
 * 计算预警等级
 */
function calculateAlertLevel(currentTemp, previousTemp) {
    if (currentTemp === undefined || previousTemp === undefined) {
        return ALERT_LEVELS[4];
    }
    const drop = previousTemp - currentTemp;
    if (drop >= 12 || currentTemp <= -15) return ALERT_LEVELS[0];
    if (drop >= 8 || currentTemp <= -8) return ALERT_LEVELS[1];
    if (drop >= 4 || currentTemp <= 0) return ALERT_LEVELS[2];
    if (drop >= 2 || currentTemp <= 5) return ALERT_LEVELS[3];
    return ALERT_LEVELS[4];
}

/**
 * 获取城市模拟温度
 */
function getCityCurrentTemp(cityName, dayOffset) {
    const city = CITY_TEMP_DATA[cityName];
    if (!city) return null;
    const base = city.winterAvg;
    dayOffset = dayOffset || 0;
    const seed = (cityName.length + dayOffset * 7) % 10;
    const variation = Math.sin(seed * 1.5) * 5;
    return Math.round((base + variation) * 10) / 10;
}

/**
 * 生成完整预警信息
 */
function generateAlert(cityName, typeResult, customCurrent, customPrev) {
    const current = customCurrent !== undefined ? customCurrent : getCityCurrentTemp(cityName);
    const previous = customPrev !== undefined ? customPrev : getCityCurrentTemp(cityName, -1);

    if (current === null || previous === null) {
        return { error: true, message: '未找到该城市信息', level: ALERT_LEVELS[4] };
    }

    const level = calculateAlertLevel(current, previous);
    const drop = previous - current;
    const element = getPrimaryElement(typeResult);
    const elementData = ELEMENT_ALERT_DATA[element];
    const alertContent = level.level > 0 && elementData
        ? elementData.alerts[level.level] || elementData.alerts[1]
        : null;

    const cityInfo = CITY_TEMP_DATA[cityName];

    return {
        city: cityName,
        region: cityInfo ? cityInfo.region : '未知',
        currentTemp: current,
        previousTemp: previous,
        drop: Math.round(drop * 10) / 10,
        level: level,
        element: element,
        elementChinese: getElementChinese(element),
        elementName: elementData ? elementData.name : '',
        elementIcon: elementData ? elementData.icon : '🌿',
        alertContent: alertContent,
        pushTitle: alertContent
            ? alertContent.title
            : `${elementData ? elementData.name : ''} · 今日无预警`,
        pushBody: alertContent
            ? `【五质十六型】${cityName}当前${current}°C，较昨日降${drop}°C。${alertContent.action}`
            : `【五质十六型】${cityName}当前${current}°C，温度平稳。`,
        shareText: alertContent
            ? `【五质十六型·寒潮预警】${cityName}骤降${drop}°C！\n${elementData ? elementData.name : ''}专属提醒：${alertContent.title}\n🧥 ${alertContent.clothing}\n🍵 ${alertContent.diet}\n💆 ${alertContent.acupoint}`
            : `【五质十六型】${cityName}当前${current}°C，天冷注意添衣。`
    };
}

// ========================================
// 6. 导出
// ========================================
window.ALERT_LEVELS = ALERT_LEVELS;
window.ELEMENT_ALERT_DATA = ELEMENT_ALERT_DATA;
window.CITY_TEMP_DATA = CITY_TEMP_DATA;
window.generateAlert = generateAlert;
window.getPrimaryElement = getPrimaryElement;
window.getElementChinese = getElementChinese;
window.getCityCurrentTemp = getCityCurrentTemp;
window.calculateAlertLevel = calculateAlertLevel;
