import React from "react"
import { GameContextConsumer } from "../../GameContext/GameContext"
import GameButton from "../GameButton/GameButton"

export default function() {
  return (
    <GameContextConsumer>
      {({ gameMode, changeGameMode, singleplayer, changeSingleplayer }) => {
        const playerMode = singleplayer ? "Singleplayer" : "Multiplayer"
        return (
          <div>
            <GameButton title={gameMode} onClick={changeGameMode} />
            <GameButton title={playerMode} onClick={changeSingleplayer} />
          </div>
        )
      }}
    </GameContextConsumer>
  )
}
