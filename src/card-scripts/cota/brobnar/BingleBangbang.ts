import { CardActionConfig, CardScript } from "../../types/CardScript"
import { cardScripts } from "../../CardScripts"
import { GameState } from "../../../shared/gamestate/GameState"
import { Creature } from "../../../shared/gamestate/Creature"
import { dealDamage, getNeighbors } from "../../ScriptUtils"

const cardScript: CardScript = {
    power: () => 2,
    beforeFight: {
        perform: (state: GameState, config: CardActionConfig) => {
            const neighbors = getNeighbors(state, config.targets![0] as Creature)
            dealDamage(neighbors, 5)
        }
    }
}

cardScripts.scripts.set("bingle-bangbang", cardScript)
