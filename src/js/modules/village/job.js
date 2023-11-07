export default {
    collector: {
        max: null,
        needed: 1,
        rewards: [
            {type: 'base', name: 'currencyVillageWoodGain', amount: 0.15},
            {type: 'base', name: 'currencyVillagePlantFiberGain', amount: 0.15},
            {type: 'base', name: 'currencyVillageStoneGain', amount: 0.15}
        ]
    },
    farmer: {
        max: 0,
        needed: 2,
        rewards: [
            {type: 'base', name: 'currencyVillagePlantFiberGain', amount: 1},
            {type: 'base', name: 'currencyVillageGrainGain', amount: 0.25}
        ]
    },
    harvester: {
        max: 0,
        needed: 2,
        rewards: [
            {type: 'base', name: 'currencyVillageWoodGain', amount: 1},
            {type: 'base', name: 'currencyVillageFruitGain', amount: 0.25}
        ]
    },
    miner: {
        max: 0,
        needed: 2,
        rewards: [
            {type: 'base', name: 'currencyVillageStoneGain', amount: 1},
            {type: 'base', name: 'currencyVillageMetalGain', amount: 0.25}
        ]
    },
    wellWorker: {
        max: 0,
        needed: 3,
        rewards: [
            {type: 'base', name: 'currencyVillageWaterGain', amount: 2}
        ]
    },
    librarian: {
        max: 0,
        needed: 4,
        rewards: [
            {type: 'base', name: 'currencyVillageKnowledgeGain', amount: 0.015}
        ]
    },
    glassblower: {
        max: 0,
        needed: 4,
        rewards: [
            {type: 'base', name: 'currencyVillageGlassGain', amount: 0.15}
        ]
    },
    entertainer: {
        max: 0,
        needed: 5,
        rewards: [
            {type: 'base', name: 'villageHappiness', amount: 0.03}
        ]
    },
    lumberjack: {
        max: 0,
        needed: 6,
        rewards: [
            {type: 'base', name: 'currencyVillageWoodGain', amount: 6},
            {type: 'base', name: 'currencyVillageHardwoodGain', amount: 0.15}
        ]
    },
    blastMiner: {
        max: 0,
        needed: 6,
        rewards: [
            {type: 'base', name: 'currencyVillageStoneGain', amount: 6},
            {type: 'base', name: 'currencyVillageGemGain', amount: 0.15}
        ]
    },
    fisherman: {
        max: 0,
        needed: 7,
        rewards: [
            {type: 'base', name: 'currencyVillageFishGain', amount: 15}
        ]
    },
    scientist: {
        max: 0,
        needed: 8,
        rewards: [
            {type: 'base', name: 'currencyVillageScienceGain', amount: 0.005}
        ]
    },
    gardener: {
        max: 0,
        needed: 8,
        rewards: [
            {type: 'base', name: 'currencyVillagePlantFiberGain', amount: 10},
            {type: 'base', name: 'currencyVillageVegetableGain', amount: 20}
        ]
    },
    oilWorker: {
        max: 0,
        needed: 11,
        rewards: [
            {type: 'base', name: 'currencyVillageOilGain', amount: 0.2}
        ]
    },
    sculptor: {
        max: 0,
        needed: 14,
        rewards: [
            {type: 'base', name: 'currencyVillageMarbleGain', amount: 0.001}
        ]
    },
    explorer: {
        max: 0,
        needed: 600,
        rewards: [
            {type: 'base', name: 'villageLootGain', amount: 2}
        ]
    }
}
