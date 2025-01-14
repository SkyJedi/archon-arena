import { CardScript } from "../../types/CardScript"
import { cardScripts } from "../../CardScripts"
import { GameState } from "../../../shared/gamestate/GameState"
import { activePlayerState, forgeKey, modifyAmber } from "../../ScriptUtils"

const cardScript: CardScript = {
    power: () => 3,
    onPlay: {
        perform: (state: GameState) => {
            modifyAmber(activePlayerState(state), -1)
            forgeKey(activePlayerState(state))
        }
    }
}

cardScripts.scripts.set("chota-hazri", cardScript)