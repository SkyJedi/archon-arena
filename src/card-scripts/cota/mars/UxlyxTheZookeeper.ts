import { CardScript } from "../../types/CardScript"
import { cardScripts } from "../../CardScripts"
import { enemyCreatures, putInArchives } from "../../ScriptUtils"

const cardScript: CardScript = {
    // Elusive. (The first time this creature is attacked each turn, no damage is dealt.)
    // Reap: Put an enemy creature into your archives. If that creature leaves your archives, it is put into its owner’s hand instead.
    power: () => 2,
    elusive: () => true,
    reap: {
        validTargets: enemyCreatures,
        numberOfTargets: () => 1,
        perform: (state, config) => {
            putInArchives(state, config.targets, true)
        }
    }
}

cardScripts.scripts.set("uxlyx-the-zookeeper", cardScript)