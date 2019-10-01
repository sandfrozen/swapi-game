import React from "react"
import CardPerson from "./CardPerson"
import CardSpaceship from "./CardSpaceship"
import { GameContextConsumer } from "../../GameContext/GameContext"
import styled from "styled-components"

const Card = styled.div`
  border: 1px solid ${props => (props.winner ? "gold" : "black")};
`

export default function({ id }) {
  return (
    <GameContextConsumer>
      {({ gameMode, lastWinner, singleplayer, players, getNewCardFor }) => {
        const card = players[id].card
        const opponentIsReady = players[id ? 0 : 1].card !== null
        console.log("card", id, card)
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
            <Card winner={lastWinner === id}>
              {gameMode === "People" ? (
                <CardPerson card={card} />
              ) : (
                <CardSpaceship card={card} />
              )}
            </Card>
          )
        }
      }}
    </GameContextConsumer>
  )
}
