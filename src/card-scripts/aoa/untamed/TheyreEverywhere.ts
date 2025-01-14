import { CardScript } from "../../types/CardScript"
import { cardScripts } from "../../CardScripts"
import { allFlankCreatures, allNonFlankCreatures, dealDamage } from "../../ScriptUtils"
import { GameState } from "../../../shared/gamestate/GameState"

const cardScript: CardScript = {
    // Play: Deal 2D to each enemy flank creature. Deal 1D to each enemy creature not on a flank.
    amber: () => 1,
    onPlay: {
        perform: (state: GameState) => {
            dealDamage(allFlankCreatures(state), 2)
            dealDamage(allNonFlankCreatures(state), 1)
        }
    }
}

cardScripts.scripts.set("theyre-everywhere", cardScript)