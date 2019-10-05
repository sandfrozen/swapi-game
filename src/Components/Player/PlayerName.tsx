import React, { useContext } from "react"
import { GameContext, GameContextTypes } from "../../GameContext/GameContext"

type PlayerNameProps = {
  id: number
}

export default function({ id }: PlayerNameProps) {
  
  // @ts-ignore
  const { players, setPlayerName }: GameContextTypes = useContext(GameContext)
  
  return (
    <input value={players[id].name} onChange={e => setPlayerName(id, e.target.value)} className='player__name__input'/>
  )
}
