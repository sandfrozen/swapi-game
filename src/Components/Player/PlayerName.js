import React from "react"
import { GameContextConsumer } from "../../GameContext/GameContext"

export default function({ id }) {
  return (
    <GameContextConsumer>
      {({ players }) => <p>Name: {players[id].name}</p>}
    </GameContextConsumer>
  )
}
