import React from "react"
import CardPerson from "./CardPerson"
import CardSpaceship from "./CardSpaceship"
import { GameContextConsumer } from "../../GameContext/GameContext"

export default function({ id }) {
  return (
    <GameContextConsumer>
      {({ gameMode, lastWinner, singleplayer, players, getNewCardFor }) => {
        const card = players[id].card
        const opponentIsReady = players[id ? 0 : 1].card !== null
        if (!card) {
          return (
            <div>
              {!(id && singleplayer) && (
                <button onClick={() => getNewCardFor(id)}>
                  Get a new card.
                </button>
              )}
            </div>
          )
        }
        if (!opponentIsReady) {
          return <div>?</div>
        } else {
          return (
            <div>
              {gameMode === "people" ? (
                <CardPerson card={card} />
              ) : (
                <CardSpaceship card={card} />
              )}
            </div>
          )
        }
      }}
    </GameContextConsumer>
  )
}
