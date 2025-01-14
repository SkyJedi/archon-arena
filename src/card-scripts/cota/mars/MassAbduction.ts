import { CardActionConfig, CardScript } from "../../types/CardScript"
import { cardScripts } from "../../CardScripts"
import { GameState } from "../../../shared/gamestate/GameState"
import { allCreatures, putInArchives } from "../../ScriptUtils"
import { Creature } from "../../../shared/gamestate/Creature"

const cardScript: CardScript = {
    // Play: Put up to 3 damaged enemy creatures into your archives.
    // If any of these creatures leave your archives, they are put into their owner’s hand instead.
    amber: () => 1,
    onPlay: {
        validTargets: (state: GameState) => allCreatures(state)
            .filter(x => (x as Creature).tokens.damage > 0),
        upToTargets: () => true,
        perform: (state: GameState, config: CardActionConfig) => {
            putInArchives(state, config.targets, true)
        }
    }
}

cardScripts.scripts.set("mass-abduction", cardScript)