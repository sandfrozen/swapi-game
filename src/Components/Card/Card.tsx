import React, { useState, useContext, useEffect } from "react"
import CardDetails from "./CardDetails"
import GameButton from "../GameButton/GameButton"
import { GameContext, GameContextTypes } from "../../GameContext/GameContext"
import "./Card.scss"

type CardProps = {
  id: number
}

export default function({ id }: CardProps) {

  const [clicked, setClicked] = useState(false)
  // @ts-ignore
  const { lastWinner, singleplayer, players, getNewCardFor }: GameContextTypes = useContext(GameContext)

  // @ts-ignore
  const card = players[id].card
  // @ts-ignore
  const opponentIsReady = players[id ? 0 : 1].card !== null
  let content = null
  let classOutside = lastWinner === id ? "card__box card__box-winner" : "card__box"
  let classInside = "card__inside card__inside-unknown"
  
  useEffect(() => {
    setClicked(false)
  }, [card])
  
  
  //  if player do not have card yet
  if (!card) {
    //if player dont click, show button for second player and not singleplayer
    if (!clicked && !(id && singleplayer)) {
      content = <GameButton label='Press this button to' onClick={() => {
        // @ts-ignore
        getNewCardFor(id)
        //for UX
        setClicked(true)
      }} title={"Take a new card."}/>
    } else {
      content = <div className='card__question__mark'>?</div>
    }
    
  } else if (!opponentIsReady) {
    content = <div className="card__question__mark">?</div>
  } else {
    classInside = "card__inside"
    content = <CardDetails card={card} />
  }
  
  
  return (
    <div className={classOutside}>
      <div className={classInside}>
        {content}
      </div>
    </div>
  )
}
