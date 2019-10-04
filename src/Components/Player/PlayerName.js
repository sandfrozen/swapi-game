import React, { useContext } from "react"
import { GameContext } from "../../GameContext/GameContext"

export default function({ id }) {
  
  const { players, setPlayerName } = useContext(GameContext)
  
  return (
    <input value={players[id].name} onChange={e => setPlayerName(id, e.target.value)} className='player__name__input'/>
  )
}
