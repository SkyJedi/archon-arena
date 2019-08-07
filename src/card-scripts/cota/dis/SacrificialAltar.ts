import { CardActionConfig, CardScript } from "../../types/CardScript"
import { cardScripts } from "../../CardScripts"
import { GameState } from "../../../shared/gamestate/GameState"
import { activePlayerState, friendlyCreatures, playCards, purgeCards } from "../../ScriptUtils"

const cardScript: CardScript = {
    // Action: Purge a friendly Human creature from play. If you do, play a creature from your discard pile.
    amber: () => 1,
    action: {
        validTargets: (state: GameState) => friendlyCreatures(state)
            .filter(x => x.backingCard.traits.includes("Human")),
        numberOfTargets: () => 1,
        upToTargets: () => true,
        perform: (state: GameState, config0: CardActionConfig) => {
            if (config0.targets.length > 1) {
                return {
                    validTargets: (state: GameState) => activePlayerState(state).discard,
                    numberOfTargets: () => 1,
                    perform: (state: GameState, config1: CardActionConfig) => {
                        purgeCards(state, config0.targets)
                        playCards(state, config1.targets)
                    }
                }
            }
        }
    }
}
cardScripts.scripts.set("sacrificial-altar", cardScript)