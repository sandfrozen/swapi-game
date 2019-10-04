import React, { useContext } from "react"
import Player from "../Player/Player"
import Card from "../Card/Card"
import { GameContext } from "../../GameContext/GameContext"
import "./GameBoard.scss"

export default function() {
  
  const { players } = useContext(GameContext)
  
  return (
    <div className='game__board'>
      {players.map((p, id) => (
        <div className='player__container' key={id}>
          <Player id={id}/>
          <Card id={id}/>
        </div>
      ))}
    </div>
  )
}
