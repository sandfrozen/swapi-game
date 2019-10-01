import React from "react"
import { GameContextConsumer } from "../../GameContext/GameContext"

export default function() {
  return (
    <GameContextConsumer>
      {({ singleplayer, changeSingleplayer }) => (
        <p>
          Player mode: {singleplayer ? "singleplayer" : "multiplayer"}{" "}
          <button onClick={changeSingleplayer}>change</button>
        </p>
      )}
    </GameContextConsumer>
  )
}
