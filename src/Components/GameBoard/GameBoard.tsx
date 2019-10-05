import React, { useContext } from "react"
import Player from "../Player/Player"
import Card from "../Card/Card"
import { GameContext, GameContextTypes } from "../../GameContext/GameContext"
import "./GameBoard.scss"

export default function() {
  
  // @ts-ignore
  const { players }: GameContextTypes = useContext(GameContext)

  // @ts-ignore
  const playersBoards = players.map((p, id) => (
    <div className='player__container' key={id}>
      <Player id={id}/>
      <Card id={id}/>
    </div>
  ))

  return (
    <div className='game__board'>
      {playersBoards}
    </div>
  )
}
