import React, { useContext } from "react"
import { GameContext, GameContextTypes } from "../../GameContext/GameContext"

type PlayerScoreProps = {
  id: number
}

export default function({ id }: PlayerScoreProps) {
  
  // @ts-ignore
  const { players }: GameContextTypes = useContext(GameContext)
  
  return (
    <div>{players[id].score}</div>
  )
}
