import React from "react"
import { GameContextConsumer } from "../../GameContext/GameContext"

export default function() {
  return (
    <GameContextConsumer>
      {({ singleplayer }) => (
        <p>Player mode: {singleplayer ? "Singleplayer" : "Multiplayer"}</p>
      )}
    </GameContextConsumer>
  )
}
