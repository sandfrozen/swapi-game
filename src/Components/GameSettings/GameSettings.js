import React, { useContext } from "react"
import { GameContext } from "../../GameContext/GameContext"
import GameButton from "../GameButton/GameButton"
import "./GameSettings.scss"

export default function() {
  
  const { gameMode, changeGameMode, singleplayer, changeSingleplayer } = useContext(GameContext)
  
  const playerMode = singleplayer ? "singleplayer" : "multiplayer"
  return (
    <div className='game__settings__container'>
      <GameButton label='Game mode' title={gameMode} onClick={changeGameMode}/>
      <GameButton label='Player mode' title={playerMode} onClick={changeSingleplayer}/>
    </div>
  )
}
