import React from "react"
import PlayerName from "./PlayerName"
import PlayerScore from "./PlayerScore"
import './Player.scss'

export default function({ id }) {
  return (
    <div className='player__box'>
      <div>
      <div className='player__label'>Player:</div>
      <PlayerName id={id} />
      </div>
      <div>
        <div className='player__label'>Score:</div>
        <PlayerScore id={id} />
      </div>
    </div>
  )
}
