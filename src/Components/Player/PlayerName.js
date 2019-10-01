import React from "react"
import { GameContextConsumer } from "../../GameContext/GameContext"

export default function({ id }) {
  return (
    <GameContextConsumer>
      {({ players, setPlayerName }) => <input value={players[id].name}  onChange={e => setPlayerName(id, e.target.value)} className='player__name__input'/>}
    </GameContextConsumer>
  )
}
