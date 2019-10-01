import React from "react"
import { GameContextConsumer } from "../../GameContext/GameContext"
import GameButton from "../GameButton/GameButton"
import './GameSettings.scss'

export default function() {
  return (
    <GameContextConsumer>
      {({ gameMode, changeGameMode, singleplayer, changeSingleplayer }) => {
        const playerMode = singleplayer ? "singleplayer" : "multiplayer"
        return (
          <div className='game__settings__container'>
            <GameButton label='Game mode' title={gameMode} onClick={changeGameMode} />
            <GameButton label='Player mode' title={playerMode} onClick={changeSingleplayer} />
          </div>
        )
      }}
    </GameContextConsumer>
  )
}
