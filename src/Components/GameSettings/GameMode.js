import React from "react"
import { GameContextConsumer } from "../../GameContext/GameContext"

export default function() {
  return (
    <GameContextConsumer>
      {({ gameMode }) => <p>Game mode: {gameMode}</p>}
    </GameContextConsumer>
  )
}
