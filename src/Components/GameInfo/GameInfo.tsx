import React, { useContext } from "react"
import { GameContext, GameContextTypes } from "../../GameContext/GameContext"
import GameButton from "../GameButton/GameButton"
import "./GameInfo.scss"

export default function() {
  
  // @ts-ignore
  const { players, lastWinner, setNewGame }: GameContextTypes = useContext(GameContext)

  const cards = players[0].card && players[1].card
  const winner =
    lastWinner > -1
      ? `${players[lastWinner].name} won!`
      : "Draw!"
  
  return (
    <div className='game__info__container'>
      {cards && <div className='game__winner'>{winner}</div>}
      {cards && <GameButton title="New Game" onClick={setNewGame}/>}
      {!cards && <div className='get__new__card'>Take a new Card!</div>}
    </div>
  )
}
