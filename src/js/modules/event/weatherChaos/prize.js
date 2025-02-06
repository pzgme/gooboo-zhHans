import store from "../../../../store";

export default {
    theme_rain: {
        type: 'theme',
        item: 'rain',
        pool: {
            weatherChaos: {price: {event_weatherChaosToken: 260}}
        }
    },
    relic_trashCan: {
        type: 'relic',
        item: 'trashCan',
        pool: {
            weatherChaos: {price: {event_weatherChaosToken: 130}}
        }
    },
    relic_suitcase: {
        type: 'relic',
        item: 'suitcase',
        requirement() {
            return store.state.unlock.hordeItems.see;
        },
        pool: {
            weatherChaos: {price: {event_weatherChaosToken: 155}}
        }
    },
    cardPack_fishingForFun: {
        type: 'cardPack',
        item: 'fishingForFun',
        pool: {
            weatherChaos: {price: {event_weatherChaosToken: 30}}
        }
    },
    farm_smellyMud: {
        type: 'consumable',
        item: 'farm_smellyMud',
        amount: 5,
        requirement() {
            return store.state.unlock.farmFertilizer.see;
        },
        pool: {
            weatherChaos: {price: {event_weatherChaosToken: 1}}
        }
    }
}
