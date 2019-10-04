import React, { useContext } from "react"
import { GameContext } from "../../GameContext/GameContext"

export default function({ id }) {
  
  const { players } = useContext(GameContext)
  
  return (
    <div>{players[id].score}</div>
  )
}
