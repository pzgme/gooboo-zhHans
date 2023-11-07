import store from "../../../store";
import { buildNum } from "../../utils/format";

export default {
    maxDepth0: {value: () => store.state.stat.mining_maxDepth0.total, default: 1, milestones: lvl => lvl * 25 + 25},
    maxDepth1: {value: () => store.state.stat.mining_maxDepth1.total, default: 1, milestones: lvl => lvl * 10 + 10},
    maxDepthSpeedrun: {value: () => store.state.stat.mining_maxDepthSpeedrun.total, default: 1, milestones: lvl => lvl > 0 ? (lvl * 10 + 10) : 15, relic: {1: 'radar', 2: 'press', 3: 'cupboard', 5: 'bronzePickaxe', 9: 'washingMachine'}},
    totalDamage: {value: () => store.state.stat.mining_totalDamage.total, milestones: lvl => Math.pow(buildNum(200, 'K'), lvl) * buildNum(10, 'M'), relic: {6: 'openedGift'}},
    maxDamage: {value: () => store.state.stat.mining_maxDamage.total, milestones: lvl => Math.pow(buildNum(200, 'K'), lvl) * buildNum(10, 'K'), relic: {3: 'bomb'}},
    scrap: {value: () => store.state.stat.mining_scrap.total, milestones: lvl => Math.pow(8000, lvl) * buildNum(5, 'M'), relic: {3: 'jumprope', 4: 'oreShelf'}},
    oreTotal: {value: () => [
        store.state.stat.mining_oreAluminium.total,
        store.state.stat.mining_oreCopper.total,
        store.state.stat.mining_oreTin.total,
        store.state.stat.mining_oreIron.total,
        store.state.stat.mining_oreTitanium.total,
        store.state.stat.mining_orePlatinum.total
    ].reduce((a, b) => a + b, 0), milestones: lvl => Math.pow(10, lvl) * 100, relic: {2: 'aluminiumBrick', 3: 'copperBrick', 4: 'aluminiumHeap', 5: 'copperPickaxe', 6: 'tinBucket'}},
    oreVariety: {value: () => [
        store.state.stat.mining_oreAluminium.total,
        store.state.stat.mining_oreCopper.total,
        store.state.stat.mining_oreTin.total,
        store.state.stat.mining_oreIron.total,
        store.state.stat.mining_oreTitanium.total,
        store.state.stat.mining_orePlatinum.total
    ].reduce((a, b) => a + (b > 0 ? 1 : 0), 0), milestones: lvl => lvl + 2, relic: {1: 'copperHeap', 2: 'catalyst', 3: 'magnet'}},
    depthDwellerCap0: {value: () => store.state.stat.mining_depthDwellerCap0.total, milestones: lvl => lvl * 10 + (lvl === 0 ? 5 : 0), relic: {0: 'hammer'}},
    depthDwellerCap1: {value: () => store.state.stat.mining_depthDwellerCap1.total, milestones: lvl => lvl * 10 + (lvl === 0 ? 5 : 0)},
    coal: {value: () => store.state.stat.mining_coal.total, milestones: lvl => Math.pow(2.5, lvl) * 100, relic: {2: 'coalBrick'}},
    resin: {value: () => store.state.stat.mining_resin.total, milestones: lvl => Math.pow(2, lvl) * 50, relic: {3: 'honeyPot'}},
    craftingWasted: {value: () => store.state.stat.mining_craftingWasted.total, secret: true, display: 'boolean', cap: 1, milestones: () => 1},
    dwellerCapHit: {value: () => store.state.stat.mining_dwellerCapHit.total, secret: true, display: 'boolean', cap: 1, milestones: () => 1},
    craftingLuck: {value: () => store.state.stat.mining_craftingLuck.total, default: 1, secret: true, cap: 1, milestones: () => buildNum(1, 'M')},
}
