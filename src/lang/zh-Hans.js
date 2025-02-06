import { zhHans } from 'vuetify/lib/locale';
import card from './zhHans/card';
import consumable from './zhHans/consumable';
import currency from './zhHans/currency';
import mult from './zhHans/mult';
import note from './zhHans/note';
import relic from './zhHans/relic';
import stat from './zhHans/stat';
import unlock from './zhHans/unlock';
import upgrade from './zhHans/upgrade';
import patchnote from './zhHans/patchnote';
import tag from './zhHans/tag';

export default {
  ...zhHans,

  gooboo: {
    buy: '购买',
    craft: '制作',
    feature: '功能',
    features: '功能',
    cantAfford: '买不起',
    capTooLow: '容量太低',
    equip: '装备',
    unequip: '卸下',
    unequipAll: '全部卸下',
    select: '选择',
    deselect: '取消选择',
    take: '获取',
    max: '最大',
    maxed: '已达最大',
    free: '免费',
    capacity: '容量',
    multCapacity: '{0}容量',
    gain: '获得',
    multGain: '{0}收益',
    apply: '应用',
    reset: '重置',
    unlock: '解锁',
    keep: '保留',
    consumable: '消耗品',
    lock: '锁定',
    upgrade: '升级',
    upgrades: '升级项',
    upgradeVerb: '升级',
    upgradesPrestige: '声望升级',
    prestige: '声望',
    prestigeDescription: '重置此功能以换取声望货币',
    prestigeTime: '本次声望周期所花费的时间',
    saveManual: '保存',
    saveExport: '导出到文件',
    saveImport: '从文件加载',
    resetProgress: '重置进度',
    closeAll: '全部关闭',
    draw: '抽取',
    finish: '完成',
    boost: '提升',
    skip: '跳过',
    level: '等级',
    chance: '几率',
    effect: '效果',
    effects: '效果',
    confirm: '确认',
    cancel: '取消',
    maxLevel: '最高等级',
    inventory: '库存',
    newGame: '新游戏',
    levelSuffix: '级',
    delete: '删除',
    convert: '转换',
    add: '添加',
    playedBefore: {
      0: '之前已经玩过？加载你的存档 ',
      1: '此处'
    },
    offlineSummary: {
      title: '欢迎回来！你已离线{0}',
      newVersion: '新版本！ ',
      upgradesFinished: '升级完成',
      downloadBackup: '下载备份',
      eventEnded: '活动结束',
      eventStarted: '活动开始',
      toFeature: '前往功能'
    },
    operator: {
      '>=': '至少',
      '>': '超过',
      '<=': '至多',
      '<': '低于',
      '==': '恰好'
    }
  },
  endOfContent: {
    name: '内容结束',
    description: '你已达到此功能的内容终点，这使得后续进展比预期更慢。请等待未来的更新，或专注于其他功能以继续推进。'
  },
  message: {
    achievement: {
      get: '获得成就！',
      gained: '已获得',
      relicGained: '获得遗物'
    },
    card: {
      get: '卡包内容',
      new: '新！'
    },
    feature: {
      feature: '解锁新功能！',
      subfeature: '解锁新子功能！',
      school: '解锁新学科！',
      general: '解锁新将领！'
    },
    heirloom: {
      get: '找到传家宝'
    },
    note: {
      get: '找到笔记 #{0}',
      read: '阅读'
    },
    save: {
      success: '游戏已保存',
      error: '自动保存失败'
    },
    prize: {
      get: '你赢得了一份奖品！',
      bingo1: '宾果！',
      bingo2: '双宾果！',
      bingo3: '三宾果！'
    },
    school: {
      get: '课程完成！',
      getExam: '考试完成！',
      score: '分数：{0}',
      perfectScore: '(完美！)',
      grade: '{0}% 成绩',
      gradePlus: '你的成绩提高了！',
      dust: '+{0} 金色粉尘'
    },
    update: {
      get: '有新更新！',
      apply: '刷新并应用'
    },
    import: {
      message: '文件无法加载',
      base64: '解码失败',
      json: '无法解析JSON',
      key: '加载的存档缺少必要数据',
      version: '此文件来自游戏的较新版本（v{0}，当前版本：v{1}）',
      testing: '测试版本的文件不能在正式版本中使用',
      testingVersion: '旧测试版本的文件不能使用',
      migration: '从 v{0} 迁移到 v{1} 时发生错误',
      checksum: '校验和无效'
    }
  },
  duplicateTab: {
    title: 'Gooboo 已在另一个标签页中运行',
    description: '为防止存档出现不一致，Gooboo 只能运行一次。请关闭此标签页，并返回现有标签页中的游戏。'
  },
  reset: {
    feature: '想要重新开始？在此处你可以重置单个功能的进度，而不影响游戏的其他部分。',
    warning: '这不是声望重置，这样做不会有奖励或退款。重置操作不可撤销',
    deleteSave: '你也可以在此处删除整个存档：',
    deleteButton: '删除存档'
  },
  prestigeDescription: {
    mining_ember: '获得与当前挖掘深度百分比相等的余烬',
    village_blessing: '信仰将转化为祝福',
    village_shares: '获得相当于当前铜币数量0.1%的股份',
    horde_soulEmpowered: '被腐蚀的灵魂将转化为强化灵魂',
    horde_courage: '达到10级时获得勇气，之后每升一级获得更多勇气',
    gallery_cash: '根据本次游戏获得的总美丽值获得现金'
  },
  confirm: {
    title: '确认操作',
    prestige: '你即将进行声望重置，重置此功能的所有进度以换取声望货币。你确定要进行声望重置吗？',
    prestigeNoGain: '你即将进行声望重置，重置所有进度。由于你进度不足，无法获得任何声望货币。你确定要进行声望重置吗？',
    prestigeCrop: '你即将对该作物进行声望重置，重置其所有等级、经验和基因，以换取所有作物的永久增益奖励。你确定要进行声望重置吗？',
    upgrade: {
      0: '你即将购买升级 ',
      1: '，这需要稀有货币。你确定要购买吗？'
    },
    shop: '你即将购买活动奖励，这需要稀有货币。你确定要购买吗？',
    theme: {
      0: '你即将购买主题 ',
      1: '，这需要稀有货币。你确定要购买吗？'
    },
    cardPack: {
      0: '你即将购买卡包 ',
      1: '，这需要稀有货币。你确定要购买吗？'
    },
    weatherChaosFishingRodBuy: '你即将购买鱼竿“{0}”，这需要稀有货币。你确定要购买吗？',
    summerFestivalCellBuy: '你即将购买一个新的岛屿单元格，这需要稀有货币。你确定要购买吗？',
    farmCrop: '你即将种植需要稀有货币的作物。你确定要购买吗？',
    galleryMotivation: '你即将购买动力，这需要稀有货币。你确定要购买吗？',
    treasure: '你即将购买一件新宝物，这需要稀有货币。你确定要购买吗？',
    schoolExamPass: '你即将购买考试通行证，这需要稀有货币。你确定要购买吗？',
    treasureFragment: '你即将购买碎片，这需要稀有货币。你确定要购买吗？',
    treasureDelete: '你即将摧毁一件宝物，作为回报将获得碎片。你确定要这样做吗？',
    casinoBingoBuy: '你即将购买一张宾果卡，这需要稀有货币。你确定要购买吗？',
    casinoWheelSpin: '你即将转动幸运轮盘，这需要稀有货币。你确定要购买吗？',
    consumable: '此操作需要消耗品，而你没有。你想用稀有货币购买这些消耗品吗？',
    reset: {
      text: '你确定要重置 {0} 功能吗？此操作不可撤销！'
    },
    resetAll: '你确定要删除存档吗？此操作不可撤销！'
  },
  feature: {
    subfeature: '子功能',

    // 主要功能
    mining: '采矿',
    village: '村庄',
    horde: '部落',
    farm: '农场',
    gallery: '画廊',

    // 次要功能
    note: '笔记',
    relic: '遗物',
    gem: '宝石',
    achievement: '成就',
    school: '学校',
    card: '卡片',
    general: '将领',
    event: '活动',
    treasure: '宝物',
    cryolab: '冷冻实验室',
    debug: '调试',

    // 子功能
    miningGas: '气体',
    villageCrafting: '制作',
    hordeClasses: '职业',
    schoolLiterature: '文学',
    schoolHistory: '历史',
    schoolArt: '艺术',
    generalOrladee: '奥拉迪',
    generalOppenschroe: '奥彭施罗',
    generalBellux: '贝卢克斯',
    generalOnoclua: '奥诺克拉',
    generalOmnisolix: '奥姆尼索利克斯',

    // 元数据
    meta: '游戏'
  },
  subfeature: {
    mining: {
      0: '矿石矿',
      1: '气态巨行星'
    },
    village: {
      0: '工人',
      1: '工匠公会'
    },
    horde: {
      0: '装备',
      1: '职业'
    },
    farm: {
      0: '花园'
    },
    gallery: {
      0: '自由创作'
    }
  },
  unlock,
  mult,
  tag,
  text: {
    villageIngredientBoxGet: '获得3个配料盒',
    hordeBattlePassUpgrade: '新升级',
    hordeBattlePassPrestigeUpgrade: '新声望升级',
    farmUnlockDna: '从1级基因解锁所有DNA升级',
    farmGnomeBoost: '每个附近的花园侏儒使所有收获收益提高4%。高级花园侏儒相当于2个。',
    farmLonelyGrow: '如果该类型的其他作物不在田地中，则生长速度加倍。',
    farmFertileBoost: '每点蓝宝石成本的肥料使产量提高30%。',
    farmYieldConversion: '将产量的5%转化为其他产量类型。',
    farmFastPrestige: '声望重置将作物等级降低5级，而不是重置为0级。',
    farmLuckyHarvest: '1%几率获得8倍收获收益。',
    farmSelfless: '所有作物产量提高 +5%。',
    farmUnyielding: '收获时40%几率免费重新种植该作物。',
    farmTeamwork: '每种作物中有一个拥有此基因，可使所有作物产量翻倍。',
    farmHunter: '该植物原生的稀有资源掉落会被追踪。追踪几率等于稀有掉落几率的1%。每次追踪成功，资源容量增加基础值的10%，基础追踪几率降低5%。',
    farmPatient: '自选择此基因以来，每天产量增加 +3%，60天时最高增加 +180%。'
  },
  upgrade,
  currency,
  stat,
  consumable,
  patchnote,
  info: {
    title: 'Gooboo',
    subtitle: '由 Tendsty 开发',
    testing: '测试中',
    text: 'Gooboo 是一款挂机/增量游戏，你可以在一个神秘未知的世界中管理多个功能。收集不同的资源，购买大量升级项以增加资源收益。在主要功能中取得进展，解锁新内容并更多地了解这个世界。当进展开始放缓时，对单个功能进行声望重置，将你的收益提升到新的水平。',
    updates: {
      web: '你正在使用网页版。游戏会定期检查更新，自动使用最新版本，并在有可用更新时通知你。',
      desktop: {
        0: '你正在使用桌面版。你需要在 ',
        1: '发布',
        2: '页面手动检查更新。'
      },
      offline: {
        0: '你正在使用离线版。你需要在 ',
        1: '发布',
        2: '页面手动检查更新。'
      },
      steam: '你正在使用Steam版。更新通过Steam处理。'
    },
    testingDescription: {
      0: '你正在玩测试版本。功能可能未完成或有漏洞，游戏机制可能随时更改。你可以在 ',
      1: '此处',
      2: '玩正式版本（测试版本的存档不能在正式版本中使用）'
    },
    viewPatchnotes: '查看更新日志',
    numberFormatting: '数字格式',
    numberFormattingDescription: '为了使数字可读，极大（和极小）的数字使用以下单位进行格式化。',
    bigNumbers: '大数字',
    smallNumbers: '小数字',
    timeUnits: '时间单位',
    timeUnit: {
      s: '秒',
      m: '分钟',
      h: '小时',
      d: '天'
    },
    socials: {
      title: '社交',
      text: 'Gooboo 可以独立游玩，无需外部指南。但如果你想与其他玩家交流，可以访问以下地方：',
      viewCode: '查看源代码',
      patreon: 'Patreon',
      reddit: 'Reddit',
      discord: 'Discord'
    },
    supportMe: {
      title: '支持我',
      text: '这款游戏是免费的，没有微交易或广告。如果你想支持开发，可以查看我的Patreon页面：',
      patreon: 'Patreon'
    },
    tech: {
      title: '使用的技术',
      web: '网页',
      fonts: '字体',
      testing: '自动化测试',
      vue: 'Vue.js',
      vuetify: 'Vuetify',
      vuex: 'vuex',
      snackbars: 'v-snackbars',
      color: '颜色',
      mdi: 'Material Design Icons',
      jsfiledownload: 'Javascript文件下载',
      seedrandom: 'seedrandom',
      caveat: 'Caveat',
      roboto: 'Roboto',
      robotomono: 'Roboto Mono',
      cypress: 'Cypress',
      jest: 'Jest',
      github: 'GitHub',
      website: '网站',
      googlefonts: 'Google字体'
    },
    cheater: {
      0: {
        title: '荣誉玩家',
        description: '在没有使用以下任何工具的情况下玩游戏'
      },
      100: {
        title: '自动化玩家',
        description: '使用工具自动执行类似人类的操作，同时仍遵守游戏规则'
      },
      200: {
        title: '作弊者',
        description: '编辑游戏变量或使用工具实现原本不可能的结果，或预测/改变结果'
      },
      selfMark: '设置作弊状态',
      selfMarkDescription: '你可以在此处将自己标记为作弊者。这纯粹是视觉上的，随时可以撤销。',
      noDetected: '未检测到作弊行为',
      featureDetected: '在以下功能中检测到作弊行为：',
      featureDetected2: '你可以通过完全重置这些功能来移除作弊标记。',
      globalDetected: '检测到作弊行为，你的存档已被永久标记。',
      selfMarkClick: '如果你作弊但游戏未正确检测到，你可以点击查看将自己标记为作弊者的选项。'
    },
    statistics: {
      name: '统计信息',
      overview: '概述',
      other: '其他',
      gained: '获得',
      maxOwned: '最高拥有量',
      currentTotal: '当前 / 总计',
      defaultPlayerName: '玩家'
    }
  },
  error: {
    tech: {
      vuejs: 'Vue.js',
      javascript: 'Javascript'
    },
    title: '{0}错误',
    source: '来源：{0}',
    position: '第 {0} 行，第 {1} 列',
    reportBug: '报告错误'
  },
  note,
  school: {
    school: '学校',
    beginner: {
      title: '仍在学习',
      description: '你刚接触这所学校，金色粉尘奖励减少至 {0}%。达到更高的全局等级可减少此惩罚，达到全局等级175可完全消除。'
    },
    subjectBookGain: '每个解锁的学科每小时提供10本书，无论成绩如何。',
    passCapGain: '你每天都会获得一张新的考试通行证（下一张将在{0}后获得），并且每提升10级全球等级也会获得一张。',
    buyPass: '花费购买一张考试通行证',
    library: '图书馆',
    practice: '练习',
    practiceDescription: '在无时间压力的情况下练习该科目，但不会获得奖励或成绩。',
    study: '学习',
    studyDescription: '在{0}内获得尽可能高的分数，如果你以最佳成绩学习，还有机会提高你的等级。根据你的分数，你将获得（或失去）下一等级的进度。预期平均分数为{1}。',
    studyNoF: '在F等级时，你不会失去等级进度。',
    takeExam: '参加考试',
    takeExamDescription: '参加一场考试，你有{0}的时间来获得尽可能高的分数。你将获得金粉作为奖励（{1} - {2}，根据你的表现和所选等级而定）。如果你达到{3}分，考试将被评为完美，并解锁下一等级。',
    takeExamNoF: '在F等级时，你不能参加考试。',
    takeExamNoFStudy: '先学习一下吧！',
    takeExamCost: '需要',
    examDustFull: '你的古老沙漏已满！本次考试获得的所有金粉都将丢失！',
    examDustOvercap: '你的古老沙漏几乎已满。由于超额，本次考试获得的部分金粉可能会丢失。',
    answer: '回答',
    begin: '课程开始！',
    beginExam: '考试开始！',
    grade: '等级',
    gradeDescription: '等级决定了该科目的难度。你可以随时在不同等级之间切换，并通过充分学习或在考试中获得完美成绩来解锁更高等级。',
    math: {
      name: '数学',
      subtitle: '解方程',
      description: '回答各种方程以提高你的分数。每答对一题得1分，答错一题扣1分（分数不能低于0）。随着等级的提高，数字会变大，并引入新的运算符。'
    },
    literature: {
      name: '文学',
      subtitle: '写句子',
      description: '输入显示的句子以提高你的分数。每输入一个句子得1分。同一个句子会一直显示，直到输入正确，你可以看到下一个句子的开头。随着等级的提高，句子和单词会变长，并引入新的特殊字符。'
    },
    history: {
      name: '历史',
      subtitle: '记住日期',
      description: '记住显示的日期并正确输入以提高你的分数。开始时你可以看到所有日期。记住后，你可以继续回答问题，此时日期会消失。你将被问到5个关于你刚刚看到的日期的问题，每个正确日期得1分。随着等级的提高，年份会变大，引入的日期也会增多。',
      year: '公元{0}年',
      examInfo: '在考试中，你有两次机会记住日期。在你完成第一轮回答后，你会得到一组新的日期和问题。'
    },
    art: {
      name: '艺术',
      subtitle: '混合颜色',
      description: '正确猜测颜色以提高你的分数。会显示两种颜色，猜测混合后的结果。每答对一题得1分，答错一题扣1分（分数不能低于0）。随着等级的提高，答案会增多，且答案会更加相似。'
    }
  },
  hourglass: {
    title: '古老沙漏',
    subtitle: '跳过此功能的时间',
    subtitleSchool: '将考试通行证转换为金粉',
    timeInMinutes: '时间（分钟）'
  },
  cryolab: {
    frozen: '{0} / {1}功能已冻结',
    active: '激活：{0}%',
    activeTitle: '威望获取（激活）',
    activeDescription: '每天被动获得的威望货币等于你最佳威望的{0}%。此功能仅在该功能冻结时生效。',
    passive: '被动：{0}%',
    passiveTitle: '威望获取（被动）',
    passiveDescription: '每天被动获得的威望货币等于你最佳威望的{0}%。此功能仅在该功能未冻结时生效。',
    expDescription: '你有{0} / {1}经验，如果此功能冻结，每天可获得{2}经验。',
    expDescription2: '经验获取基于你最佳的威望。',
    expNext: '下一等级效果：',
    expNoGain: '要为该功能获取经验，首先需要获得一些威望货币。',
    cropExp: '每次收获最多可获得此数量的经验（基础生长时间和金币成本会减少获得的经验）。然后将其乘以最高作物等级与当前作物等级之间的差值（达到最高等级的作物不会获得经验）。',
    frozenFeature: {
      title: '功能已冻结',
      description: '此功能已被低温实验室冻结。你在此功能中不会获得任何进展，但会自动获得威望货币。'
    }
  },
  general: {
    completionReward: '完成奖励',
    questGained: '{0}已获得',
    grobodal: {
      name: '格罗博达尔',
      diggingDeeper: '深入挖掘',
      combatTraining: '战斗训练',
      gardening: '园艺',
      pitchBlack: '漆黑一片',
      masterOfTheSystem: '系统大师',
      thinkPlayerThink: '思考，玩家，思考！'
    },
    orladee: {
      name: '奥拉迪',
      beautyOfThisWorld: '这个世界的美丽'
    },
    oppenschroe: {
      name: '奥彭施罗'
    },
    bellux: {
      name: '贝卢克斯'
    },
    onoclua: {
      name: '奥诺克拉'
    },
    omnisolix: {
      name: '奥姆尼索利克斯'
    }
  },
  event: {
    shop: {
      notFound: '未找到商店',
      bought: '有货'
    },
    cinders: {
      name: '余烬',
      perProducer: '每个生产者',
      candle: {
        tealight: '小蜡烛',
        regular: '蜡烛',
        aroma: '香薰蜡烛',
        chandelier: '枝形吊灯',
        duration: '持续{0}',
        sootGain: {
          0: '燃烧后产生 ',
          1: ' ',
          2: '烟灰'
        }
      }
    },
    bloom: {
      name: '绽放',
      tier: '等级',
      canSell: '可售价为{0} ',
      sell: '选择一朵花出售。当你的库存已满并获得一朵花时，该类型中等级最低的花将自动出售。',
      dragToBreeder: '将一朵花拖到此处开始培育',
      wildGrowth: '为你库存中的所有花朵随机获得一个基因。这不能绕过每朵花3个基因的限制。',
      boost: '立即获得1天的进展',
      genes: '基因',
      wildgrowth: '野生生长',
      flower: {
        daisy: '雏菊',
        poppy: '罂粟花',
        iris: '鸢尾花',
        lily: '百合花',
        orchid: '兰花',
        cornflower: '矢车菊'
      },
      gene: {
        valuable: {
          name: '珍贵',
          description: '花朵价值3倍'
        },
        mutating: {
          name: '变异',
          description: '基因出现几率2倍'
        },
        splitting: {
          name: '分裂',
          description: '25%几率培育出2朵新花'
        },
        resistant: {
          name: '抗性',
          description: '+10%等级提升几率'
        },
        huge: {
          name: '巨大',
          description: '+1等级并在合并时消耗此基因'
        }
      }
    },
    weatherChaos: {
      name: '天气混乱',
      chanceToCatch: '捕获几率',
      powerNeeded: '所需钓鱼力量',
      maxSize: '最大尺寸',
      owned: '已拥有',
      fishingPowerDescription: '钓鱼力量决定了你能钓到哪种鱼。达到钓鱼力量要求的两倍，捕获该鱼的几率最大。',
      fishSizeDescription: '尺寸等于或低于平均尺寸的鱼被捕获的几率相同。尺寸高于平均尺寸的鱼，每大一个尺寸，捕获难度就会增加。',
      fishDescription: '如果你没有钓到宝藏，就有机会钓到一条鱼。可钓到的鱼的种类取决于位置和天气。',
      trashTitle: '垃圾几率',
      trashDescription: '当你未能钓到宝藏或鱼时，会钓到垃圾。',
      treasureDescription: '你有很小的几率钓到一个宝藏。如果你的钓鱼力量至少为{0}，宝藏中可能包含鱼饵、新鱼竿或新位置的钥匙。',
      treasureDescriptionFinal: '你有很小的几率钓到一个宝藏。宝藏中可能包含鱼饵或新鱼竿。',
      changeWeather: '改变天气',
      location: {
        pond: '池塘',
        lake: '湖泊',
        river: '河流',
        ocean: '海洋',
        mountain: '山脉',
        cave: '洞穴'
      },
      fish: {
        bronzefish: '青铜鱼',
        snail: '蜗牛',
        cablebiter: '咬线鱼',
        blueshimmer: '蓝闪鱼',
        introvero: '引鱼',
        zapling: '电鱼',
        starcone: '星锥鱼',
        phelaria: '费拉里亚鱼',
        coldgil: '寒鳍鱼',
        silverbrass: '银黄铜鱼',
        circlejelly: '圆水母',
        woodcrawler: '木爬虫',
        longdano: '长丹诺鱼',
        legabara: '莱加巴拉鱼',
        biggiesnail: '大蜗牛',
        sunshine: '阳光鱼',
        platiglob: '扁球鱼',
        stormdazer: '风暴震撼者',
        riverTurtle: '河龟',
        streamsnail: '溪蜗牛',
        ralmon: '拉尔蒙鱼',
        wonelle: '沃内尔鱼',
        grillgil: '烤鳍鱼',
        sleepysoo: '瞌睡鱼',
        oozior: '奥齐奥鱼',
        paleblob: '苍白Blob鱼',
        crystakin: '晶刺鱼',
        shadowbiter: '暗影咬鱼'
      },
      fishingRod: {
        name: '鱼竿',
        basic: '基础鱼竿',
        fast: '快速鱼竿',
        leafy: '多叶鱼竿',
        heavy: '重型鱼竿',
        hardwood: '硬木鱼竿',
        master: '大师鱼竿',
        smelly: '臭鱼竿',
        turbo: '涡轮鱼竿',
        golden: '黄金鱼竿',
        dull: '钝鱼竿',
        mystical: '神秘鱼竿',
        twins: '双竿'
      },
      bait: {
        juicyBait: '多汁鱼饵',
        rainbowBait: '彩虹鱼饵',
        trashNet: '垃圾网',
        magnet: '磁铁'
      }
    },
    summerFestival: {
      name: '夏日庆典',
      produces: '产出',
      producesNothing: '无产出',
      empty: '空',
      constructing: '建造中',
      upgrading: '升级中',
      deleting: '删除中',
      emptyQueue: '无排队建筑',
      inQueue: '排队中',
      inDeletionQueue: '排队删除中',
      placeOn: '必须放置在',
      rotateDescription: '旋转建筑',
      deleteDescription: '删除此建筑。资源不予退还，且此操作需要在建筑队列中花费时间。',
      complete: '完成',
      build: '建造',
      freeExpansion: {
        s: '{0}个免费扩建',
        p: '{0}个免费扩建'
      },
      quest: {
        name: '任务',
        currency: '收集{0} ',
        building: '建造{0}个{1}级{2}'
      },
      tile: {
        beach: '海滩',
        water: '水域',
        palm: '棕榈树',
        forest: '森林',
        mountain: '山脉',
        plain: '平原',
        land: '陆地'
      },
      tilePos: {
        0: '中心',
        1: '右侧',
        2: '右下角',
        3: '左下角',
        4: '左侧',
        5: '左上角',
        6: '右上角'
      },
      building: {
        collector: {
          name: '收集器',
          description: '自动从相邻瓷砖收集资源'
        },
        mainStage: {
          name: '主舞台',
          description: '产生音乐并解锁更多建筑'
        },
        speaker: {
          name: '扬声器',
          description: ''
        },
        vegetablePatch: {
          name: '菜圃',
          description: ''
        },
        kitchen: {
          name: '厨房',
          description: '使用食材制作餐食',
          action: {
            coconutSalad: '椰子沙拉',
            saltyShell: '咸贝壳',
            lemonCandy: '柠檬糖果',
            steak: '牛排',
            fishSticks: '鱼条'
          }
        },
        sawmill: {
          name: '锯木厂',
          description: '将建筑材料切割成组件',
          action: {
            cutPlates: '切割板材',
            cutSandstone: '切割砂岩',
            smeltSteel: '冶炼钢铁',
            combineMaterial: '合成材料'
          }
        },
        huntingArea: {
          name: '狩猎区',
          description: ''
        },
        excavator: {
          name: '挖掘机',
          description: ''
        },
        lighthouse: {
          name: '灯塔',
          description: ''
        },
        grill: {
          name: '烤架',
          description: '使用煤炭烹饪食物',
          action: {
            cookMeat: '烤肉',
            cookFish: '烤鱼'
          }
        },
        mine: {
          name: '矿场',
          description: '从山脉中提取资源'
        },
        hugeSpade: {
          name: '大铲子',
          description: '从海滩挖掘沙子'
        },
        shellOpener: {
          name: '贝壳开启器',
          description: '打开贝壳获取金属零件和稀有物品',
          action: {
            openShell: '打开贝壳'
          }
        },
        waterPurifier: {
          name: '水净化器',
          description: '净化咸海水并提取盐'
        },
        fishingNet: {
          name: '渔网',
          description: '从海洋捕鱼'
        },
        pepperField: {
          name: '胡椒田',
          description: '种植和收获胡椒植物'
        },
        beehive: {
          name: '蜂巢',
          description: '从勤劳的蜜蜂那里获取蜂蜜'
        },
        citrusPlantation: {
          name: '柑橘种植园',
          description: '种植和收获柑橘类水果'
        }
      },
      buildingEffect: {
        autocollectMult: '自动收集数量',
        pearlChance: '珍珠几率'
      }
    },
    nightHunt: {
      name: '夜间狩猎',
      potions: '药水',
      performRitual: '进行仪式',
      performRitualDescription: '消耗所有选定的材料来进行仪式。如果你找到正确的材料组合，就能解锁一种新药水。材料的放置位置也很重要！',
      asBonusIngredient: '作为额外材料',
      findablePotions: '此等级可找到的药水',
      ritualStabilityDescription: '稳定性基于百分比影响多个几率：',
      ritualStabilityDescription1: '100% - 200%：保留基础材料的几率（当前为{0}%）',
      ritualStabilityDescription2: '0% - 100%：保留额外材料的几率（当前为{0}%）',
      ritualStabilityDescription3: '-100% - 0%：仪式失败且无任何奖励的几率（当前为{0}%）',
      ritualSuccessDescription: '成功的仪式将产出用于新仪式的夜间狩猎代币，还有可能发现一种新药水。对已知药水进行成功的仪式会提升其等级，产出夜间狩猎代币，并使该药水提升到下一级别变得更困难。',
      ritualFamiliarityDescription: '如果此仪式失败，以此数值提升该仪式的稳定性和成功几率。此加成可叠加，并在仪式成功时重置。',
      ritualHintDescription: '有几率揭示关于某个材料槽位或材料数量的提示。提示仅在成功的新仪式中给出。每次找到提示后，此几率会降低{0}%。当找到提示所指向的仪式时，提示和提示几率惩罚将重置。',
      clickToAdd: '点击材料将其添加到仪式中',
      ingredientSizeDescription: '材料大小决定了你每次使用魔法货币能找到的材料数量',
      favouriteIngredient: {
        title: '喜爱的材料',
        description: '你可以选择一种材料作为喜爱的材料，每次找到一种材料时，你也会获得你喜爱的材料',
        copy: '复制找到的材料'
      },
      sackDescription: '袋子可能在高魔法值时出现，消耗10倍的魔法，并包含10倍数量的材料，这些材料会平均分配到所有可用的材料上',
      newDescription: {
        empty: '这里你可以查看当前配方是否为新配方（之前未成功过）',
        isNew: '这是一个新配方，如果成功，你将获得一个夜间狩猎代币',
        isNewPotion: '你也有可能发现一种新药水',
        discoveredPotion: '这是一个已知的药水配方。如果此仪式成功，你将提升药水等级并获得夜间狩猎代币',
        pointless: '这是一个已知的配方，对此进行更多仪式没有意义'
      },
      potion: {
        power: '力量药水',
        insight: '洞察药水',
        rage: '愤怒药水',
        calming: '镇定药水',
        sorrow: '悲伤药水',
        energy: '能量药水',
        nature: '自然药水',
        intensity: '强化药水',
        hysteria: '狂热药水',
        insanity: '疯狂药水',
        patience: '耐心药水',
        transformation: '变形药水',
        silence: '沉默药水',
        photosynthesis: '光合作用药水',
        sun: '太阳药水',
        growth: '生长药水',
        solidification: '凝固药水',
        liquification: '液化药水',
        glowing: '发光药水',
        stasis: '停滞药水',
        creativity: '创意药水',
        poison: '毒药药水',
        warmth: '温暖药水'
      }
    },
    snowdown: {
      name: '雪降之战',
      fightCount: '战斗次数',
      fight: '战斗',
      fightDescription: '花费一些雪球与显示的对手战斗',
      fightWin: '如果你获胜，你将获得',
      fightWinProducer: '一个你选择的生产者',
      fightWinItem: '三个随机物品之一',
      pickProducer: '选择一个生产者',
      pickItem: '选择一个物品',
      reroll: '重新掷骰',
      rerollDescription: '将已拥有的物品重新掷骰为另一个物品',
      buyItem: '购买物品',
      buyItemDescription: '获得三个随机物品之一',
      attackDescription: '你的攻击造成的伤害量。最终伤害量将在你攻击力的80%到120%之间',
      healthDescription: '在你被冻结并无法战斗之前所能承受的伤害量',
      defenseDescription: '以固定数值减少受到的伤害',
      critDescription: '每点暴击等级使你造成暴击的几率增加1%。暴击造成+10点额外伤害。当暴击几率超过25%时，随着暴击几率接近75%，每点暴击等级增加的暴击几率会减少。每因此损失1%的暴击几率，获得+0.2的暴击伤害。乘法攻击力加成也会增加暴击伤害',
      blockDescription: '增加你格挡攻击并免受伤害的几率',
      boost: '立即获得1天的进度',
      revenge: {
        name: '复仇',
        description: '你已连续输掉{0}场战斗。这会提升你的属性，直到你赢得一场雪球战斗',
        statsBase: '输掉一场战斗时，攻击力和生命值增加5%',
        statsScaling: '输掉一场战斗时，攻击力和生命值增加5%，暴击等级增加{0}，格挡等级增加{1}。每次输掉战斗，你还会额外获得每场战斗损失{2}%的攻击力和生命值加成'
      },
      fighter: {
        snowOwl: '雪鸮',
        dog: '狗',
        cat: '猫',
        penguin: '企鹅',
        rabbit: '兔子',
        turtle: '乌龟',
        toddler: '幼儿',
        babysitter: '保姆',
        kid: '小孩',
        toughKid: '强壮的小孩',
        teenager: '青少年',
        bully: '恶霸',
        youngAdult: '年轻人',
        hooligan: '流氓',
        adult: '成年人',
        veteran: '老手',
        wallOfIce: '冰墙',
        snowBot: '雪机器人'
      },
      item: {
        rollingPin: {
          name: '擀面杖',
          description: ''
        },
        forest: {
          name: '森林',
          description: ''
        },
        snowCannon: {
          name: '雪炮',
          description: ''
        },
        shepherd: {
          name: '牧羊人',
          description: ''
        },
        animalTooth: {
          name: '动物牙齿',
          description: ''
        },
        collar: {
          name: '项圈',
          description: ''
        },
        chili: {
          name: '辣椒',
          description: ''
        },
        drumstick: {
          name: '鸡腿',
          description: ''
        },
        mouse: {
          name: '老鼠',
          description: '当你的宠物攻击时，治疗玩家1点生命值'
        },
        bone: {
          name: '骨头',
          description: '你的宠物攻击时，治疗自身1点生命值'
        },
        gravestone: {
          name: '墓碑',
          description: '宠物被冻结时，治疗玩家和其他宠物15点生命值'
        },
        spikedCollar: {
          name: '带刺项圈',
          description: '随机一只宠物获得30点暴击和格挡等级，当该宠物被冻结时，此加成转移到另一只随机宠物上'
        },
        heartCollar: {
          name: '心形项圈',
          description: '随机一只宠物可复活一次'
        },
        treatBag: {
          name: '零食袋',
          description: '宠物可以选择恢复自身最大生命值的50%而不是攻击。每个零食袋有3个零食'
        },
        tennisBall: {
          name: '网球',
          description: '当玩家被冻结时，所有宠物复活'
        },
        appleJuice: {
          name: '苹果汁',
          description: '玩家可以选择恢复自身最大生命值的50%而不是攻击。一次性使用'
        },
        hotWater: {
          name: '热水',
          description: '玩家可复活一次，生命值为25%'
        },
        dumbbell: {
          name: '哑铃',
          description: '玩家每次攻击时获得0.5点攻击力'
        },
        target: {
          name: '靶子',
          description: '玩家每次攻击时获得4点暴击等级'
        },
        gloves: {
          name: '手套',
          description: '玩家被攻击时获得0.2点攻击力和1点暴击等级'
        },
        snowboard: {
          name: '滑雪板',
          description: '玩家前5次攻击必定暴击'
        },
        tea: {
          name: '茶',
          description: '当敌人被冻结后，玩家下一次攻击时治疗25点生命值并暴击'
        },
        starShield: {
          name: '星之盾',
          description: '玩家在前3回合获得5点防御力'
        },
        coffee: {
          name: '咖啡',
          description: '玩家暴击时治疗8点生命值'
        },
        pebbles: {
          name: '鹅卵石',
          description: '玩家暴击时使目标眩晕1回合'
        },
        sunShield: {
          name: '太阳盾',
          description: ''
        },
        moonShield: {
          name: '月亮盾',
          description: ''
        },
        fireplace: {
          name: '壁炉',
          description: ''
        },
        specialSnowflake: {
          name: '特殊雪花',
          description: ''
        },
        candyCane: {
          name: '拐杖糖',
          description: ''
        },
        shovel: {
          name: '铲子',
          description: ''
        },
        turkey: {
          name: '火鸡',
          description: ''
        }
      }
    },
    merchant: {
      name: '商人'
    },
    casino: {
      name: '赌场',
      prize: '奖品',
      bingo: {
        1: '1倍宾果',
        2: '2倍宾果',
        3: '3倍宾果'
      }
    },
    bank: {
      name: '银行',
      description: '通过3种选项之一管理你的黄宝石。使用其中一个选项会禁用其他所有选项。偿还贷款不需要或不消耗行动。',
      project: {
        name: '项目',
        expandVault: '扩展金库',
        persuadeInvestors: '说服投资者',
        improveCreditScore: '提高信用评分',
        businessMarketing: '商业营销',
        cardTournament: '赞助卡牌锦标赛',
        fund: '资助'
      },
      investment: {
        name: '投资',
        description: '投资黄宝石，在下一次银行活动时连本带利收回。前{1}个黄宝石可获得{0}%的利息，超出部分为{2}%的利息',
        invest: '投资'
      },
      loan: {
        name: '贷款',
        description: '以{0}%的利息借入黄宝石，并在以后偿还。当你的黄宝石达到满额时，债务会自动偿还。',
        repay: '偿还',
        borrow: '借入'
      }
    },
    calendar: '日历',
    rewards: '奖励'
  },
  globalLevel: {
    name: '全局等级',
    description: '基于多个数值的总和。用于解锁新功能',
    mining_0: '打破的最深矿石矿井岩石',
    mining_1: '打破的最深气态巨行星岩石',
    village_0: '最大住房数量',
    village_1: '达到的制作里程碑',
    horde_0: '击败的最高区域首领',
    horde_1: '战斗通行证等级',
    farm_0: '所有作物等级总和',
    gallery_0: '总美观度的以4为底的对数',
    debug: '调试'
  },
  theme: {
    name: '主题',
    icon: {
      hasCustomNavbar: '自定义导航栏',
      hasCustomBackground: '自定义背景',
      hasCustomColors: '自定义调色板',
      hasCustomUI: '自定义用户界面元素',
      hasAnimations: '包含动画',
      hasParticles: '包含粒子效果'
    },
    default: '蓝色',
    cyan: '青色',
    green: '绿色',
    yellow: '黄色',
    orange: '橙色',
    brown: '棕色',
    red: '红色',
    pink: '粉色',
    purple: '紫色',
    grey: '灰色',
    sepia: '棕褐色',
    factory: '工厂',
    forest: '森林',
    cherry: '樱花',
    sky: '天空',
    polar: '极地',
    prismatic: '棱柱',
    candlelight: '烛光',
    colorful: '多彩',
    rain: '雨',
    waves: '波浪',
    autumnForest: '秋林',
    frozen: '冰冻'
  },
  settings: {
    keybinds: {
      name: '快捷键',
      prevMainFeature: {
        name: '上一个主要功能'
      },
      nextMainFeature: {
        name: '下一个主要功能'
      },
      debugSkip1m: {
        name: '跳过1分钟'
      },
      debugSkip10m: {
        name: '跳过10分钟'
      },
      debugSkip1h: {
        name: '跳过1小时'
      },
      debugSkip1d: {
        name: '跳过1天'
      }
    },
    theme: {
      name: '主题'
    },
    general: {
      name: '通用',
      pause: {
        name: '暂停'
      },
      dark: {
        name: '黑暗模式'
      },
      autosaveTimer: {
        name: '自动保存'
      },
      lang: {
        name: '语言',
        en: '英语',
        de: '德语',
        zhHans: '简体中文'
      },
      tabDisplayDesktop: {
        name: '桌面标签显示',
        icon: '仅图标',
        text: '仅文本',
        both: '图标和文本'
      },
      tabDisplayMobile: {
        name: '移动设备标签显示',
        icon: '仅图标',
        text: '仅文本',
        both: '图标和文本'
      },
      relativeUpgradeStats: {
        name: '相对升级统计',
        description: '显示差值而非升级前后的值'
      },
      useLegacyFarmSelect: {
        name: '旧版农场选择',
        description: '使用旧菜单在农场中选择作物和建筑'
      }
    },
    automation: {
      name: '自动化',
      progressMining: {
        name: '采矿自动进度限制',
        description: '首次打破岩石时，如果打破它所需时间为X秒或更短，你将自动进入下一个深度'
      },
      fightHordeBoss: {
        name: '自动战斗部落首领'
      }
    },
    performance: {
      name: '性能',
      upgradeListItems: {
        name: '每页升级数量'
      },
      cssShadows: {
        name: '文本阴影',
        0: '无',
        1: '简单',
        2: '平滑'
      },
      particleAmount: {
        name: '粒子数量',
        0: '无',
        1: '减少',
        2: '平均',
        3: '增加'
      },
      recordAutoplay: {
        name: '记录自动播放数据'
      }
    },
    notification: {
      name: '通知',
      position: {
        name: '位置',
        0: '左上角',
        1: '顶部',
        2: '右上角',
        3: '右下角',
        4: '底部',
        5: '左下角'
      },
      autosave: {
        name: '自动保存提示'
      },
      backupHint: {
        name: '备份提示',
        0: '关闭',
        1: '很少',
        2: '一般',
        3: '频繁'
      },
      updateCheck: {
        name: '检查更新'
      },
      note: {
        name: '便签提示'
      },
      achievement: {
        name: '成就提示'
      },
      heirloom: {
        name: '传家宝提示'
      },
      cardPackContent: {
        name: '卡牌包内容提示'
      },
      cropReady: {
        name: '作物成熟提示'
      }
    },
    confirm: {
      name: '确认',
      prestige: {
        name: '声望'
      },
      gem: {
        name: '宝石购买'
      },
      eventToken: {
        name: '活动代币购买'
      },
      farmRareResources: {
        name: '农场稀有资源购买'
      },
      treasureDelete: {
        name: '宝藏删除'
      }
    },
    experiment: {
      name: '实验性',
      warning: '这些设置仍处于实验阶段，可能存在漏洞、未完成、性能消耗大或令人困惑的问题。请自行承担启用风险，如果您正在使用它们，请留下反馈！如果此部分为空，则表示目前没有可用的实验性设置，或者您尚未进展到足以查看它们的程度',
      currencyLabel: {
        name: '显示货币标签',
        description: '无需悬停即可显示货币收益和达到容量所需的时间'
      }
    }
  },
  statBreakdown: {
    base: '基础值',
    min: '最小值',
    max: '最大值',
    globalLevel: '全局等级',
    prestige: '威望',
    graniteBreaksMult: '以10为底的对数突破',
    miningTemperature: '温度',
    villageOffering: '祭品',
    zoneCleared: '已清除区域',
    zoneClearedTotal: '已清除的最高区域',
    zone: '区域',
    hordeMaxDifficulty: '已清除难度',
    hordeBasicLoot: '基础战利品',
    hordeItemPermanent: '装备效果',
    hordeMastery: '装备精通',
    hordeRest: '休息',
    hordeNostalgia: '怀旧',
    hordeNostalgiaLost: '已找到传家宝',
    hordeClassMult: '职业乘数',
    hordeClassLevel: '职业等级',
    hordeBattlePass: '战斗通行证',
    hordeEnergy: '能量',
    hordeMana: '法力',
    hordeTime: '时间',
    hordeSacrifice: '牺牲',
    farmEarlyGame: '首批作物',
    galleryCanvas: '画布',
    cards: '卡片',
    cardsShiny: '闪亮卡片',
    treasure: '宝藏',
    debug: '调试',
    bankInvestment: '投资',
    alloying: '合金化',
    miningResin: '树脂',
    cryolab: '低温实验室',
    ritualTier: '仪式等级',
    ritualPotionLevel: '药水等级',
    ritualHint: '已发现提示',
    ritualIngredient: '额外成分',
    snowdownRevenge: '复仇',
    interest: '利息',
    multiplier: '乘数'
  },

  // 特定功能的翻译
  mining: {
    mine: '挖矿',
    gainSummary: '每次攻击获得{0}，每次破坏获得{1}（乘以{2}），每秒获得{3}',
    gainSummaryHit: '每次攻击获得{0}',
    gainSummaryBreak: '每次破坏获得{0}',
    depthDweller: '深度居民',
    dweller: {
      title: '当前/可能的最高居民深度',
      description1: '居民开始时速度很快，越接近极限速度越慢。',
      description2: '当前居民深度每完成半米，您的威望奖励就会增加。',
      description3: '可能的最高居民深度是您在矿井中最大深度的{0}%。',
      description4: '最大居民深度',
      descriptionOvercap: '居民在达到其可能的最高深度后可以获得额外深度，从而线性增加您的威望奖励。居民速度降低到{0}%，并且在达到可能的最高深度后每增加10%，速度再次降低到{0}%',
      nextTime: '您将在{1}内到达{0}米'
    },
    pickaxePower: '这是您的镐的力量和基础伤害。通过制作更好的镐来提升它。',
    damage: '伤害',
    timeToBreak: '打破当前岩石所需的时间',
    durability: '耐久性',
    durabilityDescription: '打破这块岩石所需的伤害量',
    durabilityBreaks: {
      s: '这块岩石被打破了{0}次',
      p: '这块岩石被打破了{0}次'
    },
    toughness: '韧性',
    toughnessDescription: '以固定数值减少受到的伤害',
    toughnessHigh: '韧性严重降低了您的伤害',
    toughnessTooHigh: '韧性太高，无法造成任何伤害',
    scrapDescription: '在您至少破坏一次这块岩石后，每次造成伤害时都会获得废料。当您破坏一块岩石时，获得{0}倍的废料奖励',
    scrapNotBroken: '您尚未获得废料，因为这块岩石从未被打破过',
    oreNotBroken: '您尚未获得矿石，因为这块岩石从未被打破过',
    oreDescription: {
      short: '可在{0}米或以下找到',
      long: '可在{0}米 - {1}米找到，如果深度能被{2}整除，则可在更低处找到'
    },
    rareEarthNotBroken: '您尚未获得稀土，因为这块岩石从未被打破过',
    rareEarthDescription: {
      granite: '对于被打破1000次或更多次的岩石，可在{0}米或以下找到。在此基础上，每增加10的幂次的打破次数，获得的数量翻倍',
      salt: '对于恰好有1种矿石的岩石，可在{0}米或以下找到',
      coal: '在每块岩石的首次打破时，可在{0}米或以下找到',
      sulfur: '在击中最深的岩石时，可在{0}米或以下找到',
      niter: '在10的幂次的岩石打破次数时，可在{0}米或以下找到',
      obsidian: '如果您的镐未强化，可在{0}米或以下找到',
      deeprock: '如果当前深度的数字相加等于14或更高，可在{0}米或以下找到',
      glowshard: '可在{0}米或以下找到，每低于限制1米有0.1%的几率。获得一个需要您再向下挖掘1米，此限制每天降低10%'
    },
    rareEarthNotAffected: '此资源不受稀土增益影响',
    scrapGainHint: '在击中您从未打破过的岩石时，您不会获得废料。有时，留在当前深度收集更多废料而不是立即向下挖掘会更明智。',
    oreCrafting: '点击矿石将其添加到制作槽中',
    crafting: {
      power: '力量',
      purity: '纯度',
      impurity: '杂质',
      oreQuality: '制作镐所需的矿石数量除以您的矿石质量',
      craftPickaxe: '制作镐',
      purityDescription: '要达到至少50%的最低质量，您的纯度需要与杂质匹配。',
      premiumSlot: '这是一个高级制作槽。杂质高于1倍时减半，纯度加倍。',
      minPurity: '您需要至少0.1%的最低质量才能制作镐'
    },
    craftingDescription: '消耗选定的矿石并创建一个具有随机力量值的新镐。如果它比您当前的镐（{0}力量）更好，则替换它。',
    resinDescription: '每块树脂增加30%的力量和25%的纯度。每次制作镐最多可使用{0}块树脂。',
    smokeDescription: '消耗所有烟雾以创建一个具有固定力量值的新镐',
    smeltery: '冶炼厂',
    smelteryTemperatureDescription: '达到特定温度以解锁更多冶炼厂。冶炼厂在高于要求温度的每一度还会获得+{0}%的速度提升',
    smelteryTemperatureDescription2: '由于温度，这个冶炼厂有+{0}%的速度提升',
    smelterySpeedDescription: '这个冶炼厂的基础时间是{0}',
    smelt: '冶炼',
    enhance: '强化',
    enhancement: {
      title: '强化',
      description: '使用金属条对您的镐应用强化。每个金属条都有其独特的强化效果，可以多次应用。但要小心，每次成功强化都会使下一次强化更困难，所以要考虑您在镐上添加哪些强化效果',
      barsDescription: '强化首先需要任何类型的金属条。这个数量会随着每次强化而增加',
      enhancementDescription: '然后您需要特定类型的金属条来确定强化类型。这种金属条的数量也会随着这种类型的每次强化而增加',
      barAluminium: '轻质',
      barBronze: '坚固',
      barSteel: '锋利',
      barTitanium: '挖掘者',
      barShiny: '丰富',
      barIridium: '熔化',
      barDarkIron: '虚空'
    },
    gasGain: {
      0: '当您打破这块岩石时，获得 ',
      1: '%的可获得 ',
      2: '。您在这个深度最多可获得 ',
      3: '。'
    },
    beacon: {
      noBeacon: '无信标',
      clickToPlace: '点击放置信标',
      selectToPlace: '选择一个信标放置',
      place: '放置',
      remove: '移除信标',
      removeDescription: '您可以随时移除信标，但您需要等待20小时才能移除另一个信标',
      removeCooldown: '在{0}后才能再次移除信标',
      piercing: '穿透信标',
      rich: '丰富信标',
      wonder: '奇迹信标',
      hope: '希望信标'
    },
    anomaly: {
      name: '异常',
      toughness: '这块岩石有100倍的韧性'
    }
  },
  village: {
    job: {
      name: '工作',
      collector: '收集者',
      farmer: '农民',
      harvester: '收割者',
      miner: '矿工',
      wellWorker: '井工',
      librarian: '图书管理员',
      glassblower: '玻璃吹制工',
      entertainer: '艺人',
      lumberjack: '伐木工',
      blastMiner: '爆破矿工',
      fisherman: '渔夫',
      scientist: '科学家',
      gardener: '园丁',
      oilWorker: '石油工人',
      sculptor: '雕塑家',
      explorer: '探险家'
    },
    policy: {
      name: '政策',
      taxes: '税收',
      immigration: '移民',
      religion: '宗教',
      scanning: '扫描'
    },
    crafting: {
      unlockNew: '新的制作配方： ',
      owned: '{0}已拥有',
      changeStat: {
        value: '将价值增加到{0}',
        timeNeeded: '将制作时间减少到{0}'
      },
      nextEffect: '下一次制作效果',
      special: {
        description: '特殊制作在制作时提供永久奖励，并且其进度在威望时不会重置。它们的成本随着每次制作而增加，并且没有里程碑'
      },
      crafts: '{0} / {1}次制作',
      sellEvery: '大约每{0}出售1个',
      sellPrice: '出售价格（价值：{0}）',
      rope: '绳子',
      woodenPlanks: '木板',
      brick: '砖块',
      screws: '螺丝',
      waterBottle: '水瓶',
      cocktailGlass: '鸡尾酒杯',
      boomerang: '回旋镖',
      polishedGem: '抛光宝石',
      oilLamp: '油灯',
      shower: '淋浴器',
      pouch: '小袋',
      cupboard: '橱柜',
      weight: '砝码',
      scissors: '剪刀',
      herbTea: '草药茶',
      glasses: '眼镜',
      arrows: '箭',
      bowl: '碗',
      chain: '链条',
      spear: '矛',
      goldenRing: '金戒指',
      poisonedArrows: '毒箭',
      frostSpear: '冰矛',
      spicySoup: '辣汤',
      stopwatch: '秒表',
      smallChest: '小箱子',
      bush: '灌木丛',
      handSaw: '手锯',
      garage: '车库',
      diamondRing: '钻石戒指'
    },
    buildings: '建筑物',
    village: '村庄',
    pray: '祈祷',
    unemployed: '失业',
    unemployedDescription: '失业公民不生产资源。将他们分配到下面的工作中',
    taxpayers: '纳税人',
    taxpayersDescription1: '所有工作的公民每秒最多消耗{0}的每种食物，并支付等于{1} ',
    taxpayersDescription2: ' 的税收，每消耗一个食物项目。',
    happinessDescription: '幸福度会修改所有资源收益（金币和信仰除外）',
    powerDescription: '每点力量使所有材料和食物收益增加20%。您当前的力量将材料和食物收益乘以x{0}',
    pollutionDescription: '每点污染使幸福度降低1%。如果您的污染超过容忍度，幸福度惩罚将在超过容忍度的每点污染上再增加1%。您的下一点污染将使幸福度降低{0}%',
    lootDescription: '每次进度条填满时找到新的战利品',
    lootRarity: '战利品质量决定您的战利品稀有度分布：',
    lootNeedQuality: '需要超过{0}的质量',
    buildingStat: '已建造的建筑物总数',
    housingStat: '已建造的住房总数（每栋建筑前25个）',
    coinNotAffected: '金币不受“所有资源收益”影响',
    faithNotAffected: '信仰不受“所有资源收益”和“精神资源收益”影响',
    artisanDescription: '工匠可以被分配为您制作物品',
    counterDescription: '柜台可用于向您的村民出售制作的物品',
    offering: {
      name: '祭品',
      description: {
        0: '牺牲 ',
        1: '以获取 ',
        2: '，并使祭品收益每小时增加 ',
        3: '。'
      },
      sacrifice: '牺牲',
      notUnlocked: '这个祭品尚未解锁。您仍然可以花费祭品，但不能牺牲，并且在您解锁祭品之前，资源容量不会应用',
      notUnlockedHint: '这个祭品尚未解锁，所以资源容量目前不适用'
    },
    material: '材料',
    food: '食物',
    mental: '精神资源',
    loot: '战利品',
    specialIngredient: '特殊成分',
    foodConsume: '每秒最多消耗{0}'
  },
  horde: {
    horde: '部落',
    zone: '区域',
    player: '玩家',
    enemy: '敌人',
    loadoutName: '装备配置名称',
    newLoadout: '新的装备配置',
    noLoadouts: '无装备配置',
    monsterPartHint: '前往10+区域并击败敌人#101以发现一种新货币！该货币对于进一步发展至关重要，因为它可以帮助您提高骨头容量。',
    enemyDescription: '同一区域的每个敌人与前一个敌人相比，攻击力乘以x{0}，生命值乘以x{1}，骨头增加+{2}%。这是敌人#{3}，攻击力乘以x{4}，生命值乘以x{5}，骨头增加+{6}%。所有这些效果在您死亡时重置。',
    enemyDescriptionClasses: '同一区域的每个敌人与前一个敌人相比，攻击力乘以x{0}，生命值乘以x{1}，血液增加+{2}%。这是敌人#{3}，攻击力乘以x{4}，生命值乘以x{5}，血液增加+{6}%。所有这些效果在您死亡时重置。',
    enemySigil1: {
      s: '此区域的敌人有{0}个印记',
      p: '此区域的敌人有{0}个印记',
    },
    enemySigil2: {
      s: '。',
      p: '，从{0}种不同类型中选择。',
    },
    damageTypes: {
      title: '伤害类型',
      description: '每次攻击有三种伤害类型之一。每种伤害类型的伤害输出和承受都可以被修改。',
      dealt: '输出',
      taken: '承受',
      physic: '物理',
      magic: '魔法',
      bio: '生物'
    },
    itemFindDescription: '击败敌人后，您有机会找到此装备',
    attackDescription: '每次攻击造成的伤害量',
    attackConversion: {
      text: '普通攻击每秒发生一次，伤害分布如下： ',
      physic: '{0}%物理',
      magic: '{0}%魔法',
      bio: '{0}%生物',
      strengthAmp: '每点力量使您的普通攻击伤害增加+{0}%，总计增加+{1}%。这将您的普通攻击伤害提升至{2}。'
    },
    healthDescription: '您在死亡前可以承受的伤害量',
    respawnDescription: '您从死亡中恢复所需的时间',
    reviveDescription: '不用死亡，使用一次复活可将您治愈至满血',
    critDescription: '普通攻击有几率造成更高伤害。暴击几率可以超过100%，在这种情况下，攻击伤害会被多次相乘',
    toxicDescription: '造成等于其攻击伤害一定百分比的中毒伤害（生物）',
    divisionShieldDescription: '将您所受的所有伤害除以（分割护盾 + 1），并在被攻击后失去1点分割护盾',
    firstStrikeDescription: '如果这是您的第一次攻击，则造成额外的魔法伤害',
    spellbladeDescription: '使用装备效果后造成额外魔法伤害。对于冷却时间低于10秒的装备效果，此效果并非每次都生效。',
    cuttingDescription: '攻击后，造成目标当前生命值一定百分比的生物伤害。',
    recoveryDescription: '杀死敌人后，恢复你缺失生命值的一定百分比。',
    defenseDescription: '根据你最大生命值的一定百分比减少受到的伤害。',
    executeDescription: '若敌人生命值低于特定阈值，则立即将其击杀。',
    energyDescription: '部分主动技能需要消耗能量来使用。能量会随时间自动恢复。',
    manaDescription: '部分主动技能需要消耗法力来使用。法力会缓慢恢复。',
    boss: '首领',
    miniboss: '小首领',
    minibossDescription: '小首领会代替普通敌人出现，且实力稍强。它们持有珍贵的战利品，最多可有2个同时在场。击败一个小首领等同于击败4个普通敌人。',
    minibossSoul: '小首领持有{0}个灵魂。',
    minibossHeirloom: '小首领持有{0}个灵魂，并有{1}%的几率掉落传家宝（{2}点怀旧值）。',
    poisonPlayer: '你已中毒，每秒受到{0}点伤害。',
    poisonEnemy: '此敌人已中毒，每秒受到{0}点伤害。',
    silencePlayer: '你已被沉默，无法使用主动技能。',
    silenceEnemy: '此敌人已被沉默，无法使用主动技能。',
    stunPlayer: '你已被眩晕，无法攻击。',
    stunEnemy: '此敌人已被眩晕，无法攻击。',
    shieldbreak: '更快地打破分割护盾。',
    stunResist: '更快地从眩晕状态中恢复。',
    stunBoss: '首领获得 +2点眩晕抗性。',
    stunMiniboss: '小首领获得 +1点眩晕抗性。',
    bossBioResist: '首领仅承受10%的生物伤害，但会受到多35%的魔法伤害。',
    minibossBioResist: '小首领仅承受50%的生物伤害，但会受到多10%的魔法伤害。',
    enemyRespawn: '敌人需要{0}时间重生，最多可有{1}个敌人等待刷新。击败首领将立即重置所有敌人的重生。',
    bossBonusDifficulty: '首领难度',
    bossNoReward: '你可以在任何难度下再次挑战此首领，但不会获得奖励。',
    energyIncompatible: '你当前选择的职业无法使用此饰品，因为它需要能量。',
    manaIncompatible: '你当前选择的职业无法使用此饰品，因为它需要法力。',
    taunt: {
      title: '嘲讽模式',
      description: '被嘲讽时，即使没有敌人等待刷新，敌人也会持续生成，但所有提前生成的敌人不会携带战利品。嘲讽仅在尝试挑战首领时生效。',
      on: '嘲讽模式已开启',
      off: '嘲讽模式已关闭',
      clickToToggle: '点击切换'
    },
    reachBoss: {
      title: '挑战首领',
      description: '要挑战此区域的首领，你需要在不死亡的情况下击败{0}个敌人。'
    },
    fightBoss: {
      title: '与首领战斗',
      description: '你已击败足够数量的敌人，可以挑战此区域的首领。'
    },
    fleeBoss: {
      title: '逃离首领',
      description: '逃离这场战斗，继续与普通敌人战斗。'
    },
    defeatedBoss: {
      title: '首领已被击败',
      description: '你已击败此区域的首领，这使你能够前往下一个区域。'
    },
    souls: '灵魂',
    stat: {
      crit: '暴击'
    },
    rampage: {
      name: '暴怒',
      description: '与同一敌人战斗太久会使其发怒！你与这个敌人战斗了{0}，它每{1}开始暴怒一次。',
      effect: '每次敌人暴怒时，其攻击力提升至x{0}，暴击几率增加{1}%，暴击伤害增加{2}%，眩晕抗性增加{3}，并免疫攻击降低效果。',
      effectCurrent: '此敌人已暴怒{0}次。它的攻击力为x{1}，暴击几率增加{2}%，暴击伤害增加{3}%，眩晕抗性为{4}。'
    },
    sigil: {
      name: '印记',
      hasActive: '具有主动效果',
      min: '出现在{0}级或更高等级的区域',
      special: '仅在特殊条件下出现',
      inactive: '未激活',
      power: '力量',
      health: '生命值',
      bashing: '重击',
      recovery: '恢复',
      toughness: '韧性',
      strength: '力量',
      magic: '魔法',
      magicBolt: '魔法箭',
      fireball: '火球术',
      incorporeal: '无形',
      focus: '专注',
      wisdom: '智慧',
      sparks: '火花',
      protection: '保护',
      shielding: '护盾',
      resistance: '抗性',
      precision: '精准',
      screaming: '尖叫',
      cure: '治愈',
      sharp: '锋利',
      spitting: '吐息',
      burst: '爆发',
      resilience: '韧性',
      growing: '成长',
      cold: '寒冷',
      fury: '狂怒',
      angelic: '神圣',
      toxic: '毒性',
      foulBreath: '恶臭气息',
      nuke: '核弹',
      rainbow: '彩虹',
      drain: '吸取',
      shocking: '电击',
      defense: '防御',
      executing: '处决',
      berserk: '狂暴',
      iceGiant: '冰霜巨人',
      generic: '普通'
    },
    corruption: {
      name: '腐化',
      effects: '效果',
      power: '攻击和生命值 x{0}',
      sigil: '印记 +{0}',
      revive: '复活 +{0}',
      execute: '处决 +{0}%'
    },
    activeCooldown: '主动技能冷却时间',
    activeBuffFor: '持续 {0}：',
    itemsEquipped: '已使用的装备栏位',
    cleared: '已通关',
    fighting: '战斗中',
    items: {
      name: '装备',
      usableInStun: '眩晕时可使用',
      utilityOvertime: '辅助主动技能可以储存多个充能，充能速度为前一个的一半。',
      inactive: '未激活的装备效果以正常速率的{0}%恢复冷却时间。',
      takeEquipped: '获取已装备的',
      dagger: '匕首',
      shirt: '衬衫',
      guardianAngel: '守护天使',
      milkCup: '一杯牛奶',
      starShield: '星之盾',
      longsword: '长剑',
      mace: '钉头锤',
      boots: '靴子',
      liver: '肝脏',
      fireOrb: '火焰宝珠',
      campfire: '篝火',
      clover: '三叶草',
      snowflake: '雪花',
      oppressor: '压迫者',
      toxin: '毒素',
      corruptEye: '腐化之眼',
      meatShield: '肉盾',
      wizardHat: '巫师帽',
      redStaff: '红色法杖',
      cleansingSpring: '净化之泉',
      marblePillar: '大理石柱',
      rainbowStaff: '彩虹法杖',
      antidote: '解毒剂',
      brokenStopwatch: '损坏的秒表',
      luckyCharm: '幸运符',
      mailbreaker: '破甲者',
      club: '棍棒',
      goldenStaff: '黄金法杖',
      toxicSword: '毒剑',
      scissors: '剪刀',
      cat: '猫',
      healthyFruit: '健康水果',
      glasses: '眼镜',
      deadBird: '死鸟',
      shieldDissolver: '护盾溶解器',
      calmingPill: '镇静药丸',
      cleansingFluid: '清洁液',
      forbiddenSword: '禁忌之剑',
      corruptedBone: '腐化之骨',
      plaguebringer: '瘟疫使者',
      forbiddenShield: '禁忌之盾',
      dangerShield: '危险护盾',
      forbiddenToxin: '禁忌毒素',
      glowingEye: '发光之眼',
      experimentalVaccine: '实验疫苗',
      microscope: '显微镜',
      moltenShield: '熔铸护盾',
      cutter: '裁纸刀',
      book: '书籍',
      chocolateMilk: '巧克力牛奶',
      bigHammer: '大锤',
      spookyPumpkin: '诡异南瓜',
      strangeChemical: '奇怪的化学物质',
      forbiddenHeartShield: '禁忌之心护盾',
      cloudStaff: '云之法杖',
      secretWeapon: '秘密武器',
      bomb: '炸弹',
      leechingStaff: '吸血法杖',
      shatteredGem: '破碎宝石',
      hourglass: '沙漏',
      glue: '胶水',
      firework: '烟花',
      bowTie: '领结',
      forbiddenStopwatch: '禁忌秒表',
      mysticalAccelerator: '神秘加速器',
      blazingStaff: '炽热法杖',
      shield: '盾牌',
      armor: '盔甲',
      natureStone: '自然石',
      evergrowingVine: '常青藤',
      energyDrink: '能量饮料',
      dragonheart: '龙之心',
      prism: '棱镜',
      deathsword: '死亡之剑',
      needle: '针',
      mine: '地雷',
      maskOfJoy: '欢乐面具',

      // 国际象棋棋子
      pawn: '兵',
      knight: '骑士',
      bishop: '象',
      rook: '车',
      queen: '后',
      king: '王'
    },
    active: {
      damagePhysic: {
        0: '造成',
        1: '物理伤害'
      },
      damageMagic: {
        0: '造成',
        1: '魔法伤害'
      },
      damageBio: {
        0: '造成',
        1: '生物伤害'
      },
      maxdamagePhysic: {
        0: '造成',
        1: '敌人生命值的物理伤害'
      },
      maxdamageMagic: {
        0: '造成',
        1: '敌人生命值的魔法伤害'
      },
      maxdamageBio: {
        0: '造成',
        1: '敌人生命值的生物伤害'
      },
      heal: {
        0: '恢复',
        1: '生命值'
      },
      bone: {
        0: '获得',
        1: '最高区域的骨头'
      },
      blood: {
        0: '获得',
        1: '最高难度的血液'
      },
      monsterPart: {
        0: '获得',
        1: '最高区域的怪物部件'
      },
      stun: {
        0: '眩晕对手 ',
        1: '秒'
      },
      silence: {
        0: '沉默对手 ',
        1: '秒'
      },
      revive: {
        0: '补充',
        1: '次复活机会'
      },
      removeAttack: {
        0: '移除对手 ',
        1: '点攻击力'
      },
      poison: {
        0: '施加 ',
        1: '点中毒效果'
      },
      antidote: {
        0: '解除 ',
        1: '点中毒效果'
      },
      permanentStat: {
        0: '增加 ',
        2: '，直至威望重置',
        1: ' '
      },
      gainStat: {
        0: '永久增加 ',
        2: ' ',
        1: ' '
      },
      divisionShield: {
        0: '获得 ',
        1: '点分割护盾'
      },
      removeDivisionShield: {
        0: '移除对手 ',
        1: '点分割护盾'
      },
      executeKill: {
        0: '击杀生命值低于 ',
        1: '的敌人'
      },
      refillEnergy: {
        0: '恢复 ',
        1: '点能量'
      },
      refillMana: {
        0: '恢复 ',
        1: '点法力'
      },
      buff: {
        duration: '增益持续时间',
        suffix: '(增益)'
      },
      canCrit: '可暴击，效率为{0}%',
      canCritDiff: '主动技能暴击效率',
      reviveAll: '补充所有复活机会',
      removeStun: '解除眩晕'
    },
    heirloom: {
      name: '传家宝',
      min: '出现在 {0} 区或更高区域',
      special: '不会出现在普通小头目身上',
      description: '传家宝是强大的神器，可以从小头目身上找到，并永久拥有。前往更高区域可找到更多类型。',
      descriptionTower: '传家宝是强大的神器，每 {0} 层可以找到一个，并永久拥有。前往更高区域或不同的塔楼可找到更多类型。',
      descriptionDouble: '数量最少的传家宝获得几率翻倍。如果有多个传家宝数量相同且为最少，则此规则不适用。',
      descriptionNostalgia: '怀旧值会增加你找到传家宝的几率。借助怀旧值找到一个传家宝后，在下次威望重置前会扣除1点怀旧值。',
      power: '力量',
      fortitude: '坚韧',
      wealth: '财富',
      spirit: '精神',
      sharpsight: '敏锐视力',
      reaping: '收割',
      remembrance: '回忆',
      holding: '持有',
      expertise: '专长',
      mystery: '神秘',
      brick: '砖块',
      heat: '火焰',
      ice: '冰霜',
      crystal: '水晶',
      vitality: '活力'
    },
    itemMastery: {
      name: '精通',
      description: '使用该装备击败 {0} 区或更高区域的头目或小头目，可获得精通点数。更高区域的头目会给予更多精通点数。',
      gain: '在此区域击败头目可获得 {0} 精通点数，击败小头目可获得该数值的 {1}%（{2}）。',
      bonuses: '提升你的精通等级，解锁该装备的加成。',
      current: '该装备拥有 {0} / {1} 精通点数',
      1: '威望重置后保留该装备',
      2: '增加一个选项，可禁用装备主动技能，使被动效果提升 {0}%',
      3: '威望重置后保留装备等级',
      4: '主动技能冷却时间减半，禁用主动技能时，加成提升至 {1}%，而非 {0}%',
      5: '最多可收集 {0} 个神秘碎片。每提升一级精通，该数值增加 {1}。'
    },
    tower: {
      name: '塔楼',
      description: '塔楼是特殊场所，需要塔楼钥匙才能进入。你可以与敌人战斗获取皇冠和独特的传家宝，直至死亡。到达特定楼层可永久解锁新的加成。',
      zoneDescription: '你在这座塔楼中到达的最高楼层的敌人，强度大致相当于 {0} 区的敌人。它们起始强度与 {1} 区的敌人相同，每提升一层，获得相当于 {2} 个区域的属性加成。',
      floorTitle: '已击败的最高楼层',
      floorDescription: '在特定楼层击败敌人，可解锁永久加成：',
      rewardTitle: '奖励',
      rewardDescription1: '每击败一个敌人获得 {0} 个皇冠',
      rewardDescription2: '敌人每 {0} 层掉落传家宝，且部分传家宝仅在此塔楼出现：',
      keyDescription: '解锁新塔楼时可获得 {0} 把塔楼钥匙，每周可获得1把塔楼钥匙（下一把将在 {1} 后获得）',
      enter: '进入',
      enterCost: '需要',
      floor: '第 {0} 层',
      brick: '砖块塔楼',
      fire: '火焰塔楼',
      ice: '冰霜塔楼',
      danger: '危险塔楼',
      toxic: '毒性塔楼'
    },
    classes: {
      skill: '技能',
      skillPointsLeft: '{0} 个技能点剩余',
      skillPointCost: '升级需要 {0} 个技能点',
      skillTreeChoice: '在此你可以做出选择，选择其中一个技能将锁定其他路径。',
      adventurer: {
        name: '冒险者',
        description: '一名全能的战士，能够应对各种情况'
      },
      archer: {
        name: '弓箭手',
        description: '一名远程战士，专注于暴击和稳定输出伤害'
      },
      mage: {
        name: '法师',
        description: '一名运用法术快速击败敌人并可自动施法的战士'
      },
      knight: {
        name: '骑士',
        description: '一名坚韧的战士，虽然缓慢地击败对手，但能应对强大的敌人'
      },
      assassin: {
        name: '刺客',
        description: '一名敏捷的战士，专注于快速击杀敌人'
      },
      shaman: {
        name: '萨满',
        description: '一名与自然相连的战士，利用治疗和毒药来赢得战斗'
      },
      pirate: {
        name: '海盗',
        description: '海盗可能不是最佳战斗者，但擅长掠夺'
      },
      undead: {
        name: '不死族',
        description: '一名较弱的战士，通过数量优势弥补这一弱点'
      },
      cultist: {
        name: '邪教徒',
        description: '一名全能的战士，每次专注于一项任务'
      },
      scholar: {
        name: '学者',
        description: '一名辅助型战士，帮助其他职业'
      }
    },
    battlePass: {
      name: '战斗通行证',
      quest: {
        stat: '达到 {0} {1}',
        zone: '通关 {0} 个 {1} 区',
        level: '达到等级 {0}',
        boss: '击败 {0} 个（+{1}）'
      },
      statType: {
        base: '基础 {0}',
        total: '总计 {0}'
      }
    },
    enemyName: {
      soldier: '士兵',
      officer: '警官',
      hunter: '猎人',
      sniper: '狙击手',
      strongMonkey: '强壮的猴子',
      angryMonkey: '愤怒的猴子',
      dartMonkey: '飞镖猴',
      monkeyWizard: '猴子巫师',
      monkeyDefender: '猴子守卫',
      monkeyMonk: '猴子僧侣',
      puppy: '小狗',
      kitten: '小猫',
      seal: '海豹',
      piglet: '小猪',
      panda: '熊猫',
      koala: '考拉',
      rabbit: '兔子',
      guineaPig: '豚鼠'
    },
    bossName: {
      ohilio_guard1: '守卫A',
      ohilio_guard2: '守卫B',
      ohilio: '奥希利奥',
      chriz1: '克里兹',
      chriz2: '克里兹',
      mina: '米娜'
    },
    area: {
      zoneEndless: '无尽区域',
      zoneBoss: '首领（{0}）',
      zone: '区域{0}',
      difficulty: '{0}难度',
      enemyAmount: '此区域有{0}个敌人',
      warzone: '战区',
      monkeyJungle: '猴子丛林',
      loveIsland: '爱情岛'
    },
    sign: {
      sign_1: {
        text: '我的瞄准完美无缺，从不失手！你最好小心点！',
        signed: '奥希利奥'
      },
      sign_2: {
        text: '你觉得你能伤到我？绝不可能！我会躲开一切，你甚至都打不到我！我是无敌的！',
        signed: '奥希利奥'
      },
      sign_3: {
        text: '我是最伟大、最优秀、完美无缺、不可战胜的！就连我的守卫和我相比都不值一提！你觉得你有机会战胜我？哈！准备受死吧！',
        signed: '奥希利奥'
      },
      sign_4: {
        text: '仔细观察这些可爱的动物后，你发现它们并非真实存在。它们只是鬼火罢了！但它们为什么会在这里？是为了让你心情变差吗？没时间思考了，你得战斗，突破这些动物灵魂的阻拦。',
        signed: '???'
      }
    },
    quest: {
      name: '任务',
      description: '完成任务以推进你的战斗通行证并解锁永久奖励',
      completed: '{0}已完成',
      allCompleted: '所有任务已完成'
    },
    trinket: {
      rarity: {
        0: '未拥有',
        1: '普通',
        2: ' uncommon',
        3: '稀有',
        4: '史诗',
        5: '传说',
        6: '神话',
        7: '非凡',
        8: '光辉',
        9: '棱彩',
        10: '最终定型',
        timeless: '永恒'
      },
      equipped: '已选择的饰品（威望后装备）',
      vitality: '活力',
      energy: '能量',
      magic: '魔法',
      fists: '拳力',
      sparks: '火花',
      haste: '急速',
      precision: '精准',
      wrath: '愤怒',
      strength: '力量',
      toxins: '毒素',
      wisdom: '智慧',
      extraction: '萃取',
      learning: '学识',
      preservation: '保存',
      energize: '赋能',
      automation: '自动化',
      cure: '治愈',
      duality: '二元性',
      love: '爱'
    },
    sacrifice: {
      name: '牺牲',
      description: '在此你可以暂时牺牲装备栏位，以换取强大的奖励'
    }
  },
  farm: {
    farm: '农场',
    unlockSeed: '解锁种子',
    experience: '经验',
    expToLevelUp: '你还需要收获 {0} 次才能达到下一级',
    yield: '产量',
    rareDrops: '稀有掉落',
    huntedRareDrops: '猎杀稀有掉落',
    addRareDrop: '添加稀有掉落（{0}）',
    addRareDropAmount: '{0} 数量',
    prestige: {
      description: '当作物达到4级时，你可以进行声望提升，将其声望等级提升至当前等级以获得奖励。这将重置该作物的所有经验、等级和基因。每个声望等级将所有作物收益乘以1.04。',
      current: '你当前的声望等级是 {0}，所有作物收益乘以 {1}。',
      next: '提升该作物的声望等级将使你的声望等级增加 {0}。这会将你的总声望等级提升至 {1}，作物收益提升至 {2} 倍。',
      nextNoEffect: '该作物的等级不高于其声望等级。提升声望等级不会增加你的声望等级，但仍会重置等级和基因。',
      cropOnField: '由于该作物正在田间种植，你现在无法进行声望提升',
      increasedGLRequirement: '达到10级后，作物每升两级才会提升一次全局等级'
    },
    button: {
      plantAll: '在所有空地块上种植选定的作物（{0}）。你也可以通过点击空地块来种植单一作物',
      replant: '所有成熟的作物将被收获并在同一地块上重新种植',
      replantFertilizer: '如果可能，也将使用相同的肥料',
      harvestAll: '收获所有成熟的作物。你也可以通过点击单一作物来收获它',
      delete: '从地块中移除作物。已花费的资源不予退还',
      deleteBuilding: '建筑物也可以通过这种方式移除，并返回你的物品栏',
      color: '可以为地块上色，以便更轻松地管理大片农田。选择一种颜色，然后点击地块进行涂色。当你选择了一种颜色后，批量操作将仅影响相同颜色的地块',
      colorFilter: '仅影响此颜色的地块'
    },
    timeDescription: '生长所需时间',
    overgrowDescription: '完全成熟后，你的植物可以再次生长，但需要 {0} 倍（1 / 过度生长 + 1）倍的时间来生长。每个完整的生长周期都算作一次额外收获，并享有所有收益。',
    fertilizerCostDescription: '每株作物所需肥料',
    goldChance: '金币几率',
    goldChanceDescription: '收获植物时有一定几率获得金币，几率基于作物生长时间和放置的花园侏儒数量',
    goldChanceMultiple: '金币几率超过100% 时仍会增加金币收益，你保证能找到 {0} 金币，并有 {1}% 的几率再找到1枚金币',
    goldChanceWarning: '在田间放置一个花园侏儒以开始获得金币',
    freeUpgrades: {
      s: '剩余1个基因',
      p: '剩余 {0} 个基因'
    },
    fertilizerCannotBeBought: '无法购买',
    crop: {
      carrot: '胡萝卜',
      blueberry: '蓝莓',
      wheat: '小麦',
      tulip: '郁金香',
      potato: '土豆',
      raspberry: '树莓',
      barley: '大麦',
      dandelion: '蒲公英',
      corn: '玉米',
      watermelon: '西瓜',
      rice: '水稻',
      rose: '玫瑰',
      leek: '韭菜',
      honeymelon: '香瓜',
      rye: '黑麦',
      daisy: '雏菊',
      cucumber: '黄瓜',
      grapes: '葡萄',
      hops: '啤酒花',
      violet: '紫罗兰',
      goldenRose: '金玫瑰',
      sweetPotato: '红薯',
      strawberry: '草莓',
      sesame: '芝麻',
      sunflower: '向日葵',
      spinach: '菠菜'
    },
    gene: {
      name: '基因',
      pickLevel: '选择一个 {0} 级基因',
      dnaDescription: '当该作物达到新等级时，你将获得DNA，并可用于基因升级。下一个作物等级将给予 {0} 点DNA',
      dnaDuplicate: '你选择的基因在下一次声望提升时不会出现。不选择基因将使所有4个基因在下一次声望提升时可用',
      dnaBlocked: '锁定的基因',
      hasUpgrade: '有基因升级',
      lockOnField: '当该作物在田间种植时，无法选择此基因',
      basics: '基础',
      yield: '产量',
      gold: '金币',
      exp: '经验',
      rareDrop: '稀有掉落',
      grow: '生长',
      overgrow: '过度生长',
      giant: '巨型',
      grass: '草丛',
      dna: 'DNA',
      gnome: '侏儒',
      lonely: '孤独',
      fertile: '肥沃',
      mystery: '神秘',
      conversion: '转化',
      prestige: '声望',
      rareDropChance: '发现几率',
      lucky: '幸运',
      finalize: '最终确定',
      selfless: '无私',
      unyielding: '不屈',
      teamwork: '团队合作',
      hunter: '猎手',
      patient: '耐心'
    },
    fertilizerEffect: {
      vegetable: '仅对蔬菜有效',
      berry: '仅对浆果有效',
      grain: '仅对谷物有效',
      flower: '仅对花卉有效'
    },
    building: {
      premium: '高级 {0}',
      premiumOwned: '高级：已拥有 {0}',
      owned: '已拥有 {0}',
      gardenGnome: {
        name: '花园侏儒',
        description: '当花园侏儒放置在田间时，田间的作物收获时可能会获得金币。几率基于作物生长时间。',
        descriptionPremium: '当花园侏儒放置在田间时，田间的作物收获时可能会获得金币。几率翻倍，且基于作物生长时间。'
      },
      sprinkler: {
        name: '洒水器',
        description: '同一行的作物生长速度加快50%，过度生长增加150%',
        descriptionPremium: '同一行的作物生长速度加快100%，过度生长增加300%'
      },
      lectern: {
        name: '讲台',
        description: '同一列的作物获得三倍经验',
        descriptionPremium: '同一列的作物获得五倍经验'
      },
      pinwheel: {
        name: '风车',
        description: '周围8个地块中每有一个独特作物，田间掉落几率增加0.015倍',
        descriptionPremium: '周围8个地块中每有一个独特作物，田间掉落几率增加0.03倍'
      },
      flag: {
        name: '旗帜',
        description: '如果作物与旗帜位置正确，作物收益增加50%。蔬菜：左上角，浆果：右上角，谷物：左下角，花卉：右下角',
        descriptionPremium: '如果作物与旗帜位置正确，作物收益增加100%。蔬菜：左上角，浆果：右上角，谷物：左下角，花卉：右下角'
      }
    }
  },
  gallery: {
    gallery: '画廊',
    auction: '拍卖',
    colorSuffix: '颜色',
    openPackage: '打开',
    colorGainReduced: '颜色达到100后，额外收益将降至平方根',
    drumCompounding: '要找到这个鼓，你必须在同一包裹中找到所有之前颜色的鼓。这会降低找到这个鼓的实际几率',
    allConverterInfo: '转换一种颜色总是会消耗所有转换器',
    converterOverload: '你拥有的转换器数量远多于此次转换所需的颜色数量，转换收益将乘以 {0}',
    idea: {
      tier: '第 {0} 层创意',
      unlock: '解锁创意',

      makeItPretty: '美化它',
      stompBerries: '踩碎浆果',
      carvePumpkins: '雕刻南瓜',
      sortWaste: '分类垃圾',
      advertise: '做广告',
      beImpatient: '不耐烦',
      beExcited: '兴奋起来',

      makeLemonade: '制作柠檬水',
      growATree: '种一棵树',
      buildComposter: '建造堆肥器',
      observeRainbow: '观察彩虹',
      buildRedReservoir: '建造红色蓄水池',
      orderMassiveSafe: '订购大型保险箱',
      buyPen: '购买钢笔',

      drawOcean: '绘制海洋',
      makeWine: '酿造葡萄酒',
      calculateOdds: '计算几率',
      buildOrangeReservoir: '建造橙色蓄水池',
      thinkHarder: '更努力思考',
      paintFaster: '更快作画',
      buyBrush: '购买画笔',

      harvestOranges: '收获橙子',
      pulverizeGold: '粉碎黄金',
      buildYellowReservoir: '建造黄色蓄水池',
      paintForFun: '为乐趣而作画',
      printNewspaper: '印刷报纸',
      expandCanvas: '扩大画布',
      hyperfocus: '高度专注',

      cutGrass: '割草',
      shapeClay: '塑造黏土',
      buildGreenReservoir: '建造绿色蓄水池',
      beMysterious: '故作神秘',

      lookAtTheSky: '仰望天空',
      chewBubblegum: '嚼泡泡糖',
      buildBlueReservoir: '建造蓝色蓄水池'
    },
    nextInspiration: {
      0: '下一次 ',
      1: ' 在 '
    },
    shapes: {
      name: '形状',
      upgrades: '形状升级',
      description: '将一个形状拖动到相邻的形状上以交换位置，或点击一个形状进行收集。收集需要5个相同类型的形状相连，每个形状获得的形状数量等于收集连击数。',
      cost: '每次操作花费',
      special: {
        name: '特殊形状',
        description: '特殊形状有{0}%的几率替代普通形状出现，特殊收集可获得{1}倍数量的形状。网格上只能有一个特殊形状。',
        bomb: '呈“+”形的所有形状都会被特殊收集。',
        dice: '所有与该形状上方（如果在顶行则为下方）形状不匹配的形状将被重新随机生成。',
        accelerator: '周围8个形状会被特殊收集。如果这8个形状都相同，消耗所有动力可获得更多形状。',
        sparkles: '直接相邻的4个形状若满足条件会被普通收集，并计为一个大连击。',
        hourglass: '立即获得转换器和包裹，收集形状可增加持续时间。',
        chest: '特殊收集附近10个形状，即周围8个以及左右各一个。如果这10个形状都不同，可获得特殊奖励，并再次以初始倍率应用特殊形状的加成。'
      },
      buyFor: {
        0: '购买',
        1: '花费'
      },
      reroll: '重新随机生成整个网格，花费',
      unlock: '解锁形状：{0}',
      circle: '圆形',
      rectangle: '矩形',
      triangle: '三角形',
      star: '星形',
      ellipse: '椭圆形',
      heart: '心形',
      square: '正方形',
      octagon: '八边形',
      pentagon: '五边形',
      hexagon: '六边形',
      bomb: '炸弹',
      dice: '骰子',
      accelerator: '加速器',
      sparkles: '火花',
      hourglass: '沙漏',
      chest: '宝箱'
    },
    canvas: {
      name: '画布',
      description: '在画布上添加颜色，可缓慢提升其画布等级，为你提供永久加成。',
      level: '画布等级',
      untilNextLevel: '距离下一级还差{0}'
    }
  },
  gem: {
    newGemsTime: '每次进度条填满时可获得新宝石。生成器每{0}生成新宝石。',
    newGemsTimeAchievement: '每次进度条填满时可获得新宝石。每次获得成就可使生成速度提高{0}%。你已获得的{1}个成就使生成速度提高了{2}%，从{3}提升至{4}。'
  },
  achievement: {
    relicReward: '完成此成就的下一级时，将获得该遗物作为奖励。',
    secret: '此成就为隐藏成就，不提供任何奖励。'
  },
  treasure: {
    effectSummary: '效果概述',
    tier: '品级',
    tierItem: '品级{0}的宝藏',
    tierEffect: {
      globalLevel: '你的全局等级会提升宝藏品级以及获得更高级别宝藏的几率。',
      upgrade: '升级花费',
      destroy: '摧毁时获得的碎片',
      regular: '常规效果',
      special: '特殊效果'
    },
    buyFragment: {
      0: '购买碎片（',
      1: '）花费'
    },
    buyTreasure: '获得一个随机品级和效果的宝藏',
    upgradeDescription: '使用碎片升级宝藏。碎片花费取决于宝藏品级和等级。',
    destroyDescription: '摧毁一个宝藏可根据宝藏品级获得碎片。所有用于升级该宝藏的碎片也将一并返还。'
  },
  relic,
  card
}
