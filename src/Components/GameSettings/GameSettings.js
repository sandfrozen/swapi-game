import React from "react"
import GameMode from "./GameMode"
import PlayerMode from "./PlayerMode"

export default function() {
  return (
    <div>
      <h1>Settings</h1>
      <GameMode />
      <PlayerMode />
    </div>
  )
}
