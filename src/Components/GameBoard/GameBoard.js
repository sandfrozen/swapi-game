import React from "react"
import Player from "../Player/Player"
import Card from "../Card/Card"
import { GameContextConsumer } from "../../GameContext/GameContext"
import './GameBoard.scss'

export default function() {
  return (
    <GameContextConsumer>
      {({ players }) => (
        <div className='game__board'>
          {players.map((p, id) => (
            <div className='player__container' key={id}>
              <Player id={id}/>
              <Card id={id}/>
            </div>
          ))}
        </div>
      )}
    </GameContextConsumer>
  )
}
