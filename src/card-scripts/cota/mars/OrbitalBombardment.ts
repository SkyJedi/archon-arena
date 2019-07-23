import { CardScript } from "../../types/CardScript"
import { cardScripts } from "../../CardScripts"
import { activePlayerState, allCreatures, dealDamage, revealCards } from "../../ScriptUtils"
import { House } from "../../../shared/keyforge/house/House"
import { Creature } from "../../../shared/gamestate/Creature"

const cardScript: CardScript = {
    // Play: Reveal any number of Mars cards from your hand. For each card revealed this way, deal 2<D> to a creature. (You may choose a different creature each time.)
    amber: () => 1,
    onPlay: {
        validTargets: allCreatures,
        numberOfTargets: (state) => activePlayerState(state).hand.filter(x => x.backingCard.house === House.Mars).length,
        uniqueTargets: () => false,
        perform: (state, config) => {
            const revealedCards = activePlayerState(state).hand.filter(x => x.backingCard.house === House.Mars)
            revealCards(state, revealedCards)
            dealDamage(config.targets as Creature[], 2)
        }
    }
}

cardScripts.scripts.set("orbital-bombardment", cardScript)