import {CardScript} from "../../types/CardScript"
import {cardScripts} from "../../types/CardScripts"
import {activePlayerState, putInHand, shuffleDeck} from "../../types/ScriptUtils"

const cardScript: CardScript = {
    power: () => 4,
    reap: {
        validTargets: (state) => {
            return activePlayerState(state).library.concat(activePlayerState(state).discard)
                .filter(card => card.backingCard.cardTitle === "War Grumpus")
        },
        numberOfTargets: () => 1,
        perform: (state, config) => {
            putInHand(config.targets[0])
            shuffleDeck(state)
        }
    }
}

cardScripts.scripts.set("grumpus-tamer", cardScript)