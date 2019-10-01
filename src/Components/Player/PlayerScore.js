import React from "react"
import { GameContextConsumer } from "../../GameContext/GameContext"

export default function({ id }) {
  return (
    <GameContextConsumer>
      {({ players }) => <div>{players[id].score}</div>}
    </GameContextConsumer>
  )
}
