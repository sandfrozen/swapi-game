import React from "react"
import { GameContextConsumer } from "../../GameContext/GameContext"

export default function({ id }) {
  return (
    <GameContextConsumer>
      {({ players }) => <p>Score: {players[id].score}</p>}
    </GameContextConsumer>
  )
}
