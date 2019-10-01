import React from "react"
import GameSettings from "./GameSettings/GameSettings"
import GameInfo from "./GameInfo/GameInfo"
import GameBoard from "./GameBoard/GameBoard"

export default function() {
  return (
    <div>
      <GameSettings />
      <GameInfo />
      <GameBoard />
    </div>
  )
}
