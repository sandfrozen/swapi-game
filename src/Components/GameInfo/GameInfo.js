import React from "react"
import { GameContextConsumer } from "../../GameContext/GameContext"

export default function({ id }) {
  return (
    <GameContextConsumer>
      {({ players, lastWinner, setNewGame }) => {
        const cards = players[0].card && players[1].card
        const winner =
          lastWinner === 0
            ? "Player 1 won!"
            : lastWinner === 1
            ? "Player 2 won!"
            : "Draw!"
        return (
          <div>
            <h1>Info</h1>
            <h3>{cards && winner}</h3>
            {cards && <button onClick={setNewGame}>New game</button>}
            {!cards && <div>Waiting for players.</div>}
          </div>
        )
      }}
    </GameContextConsumer>
  )
}
