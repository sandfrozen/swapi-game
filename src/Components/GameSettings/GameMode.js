import React from "react"
import { GameContextConsumer } from "../../GameContext/GameContext"

export default function() {
  return (
    <GameContextConsumer>
      {({ gameMode, changeGameMode }) => (
        <p>
          Game mode: {gameMode} <button onClick={changeGameMode}>chagne</button>
        </p>
      )}
    </GameContextConsumer>
  )
}
