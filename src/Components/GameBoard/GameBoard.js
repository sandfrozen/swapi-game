import React from "react"
import Player from "../Player/Player"

const playersArray = [{}, {}]

export default function() {
  const players = playersArray.map((p, i) => <Player id={i} />)

  return (
    <div>
      <h1>GameBoard</h1>
      {players}
    </div>
  )
}
