import {CardScript} from "../../types/CardScript"
import {cardScripts} from "../../types/CardScripts"
import {putInHand} from "../../types/ScriptUtils"
import {CardInGame} from "../../../shared/gamestate/CardInGame"

const cardScript: CardScript = {
    amber: () => 1,
    onPlay: {
        //TODO activePlayerDiscard in Util
        validTargets: activePlayerDiscard('creatures'),
        numberOfTargets: () => 1,
        perform: (state, config) => {
            config.targets.forEach(target => putInHand(target as CardInGame))
        }
    }
}

cardScripts.scripts.set("regrowth", cardScript)