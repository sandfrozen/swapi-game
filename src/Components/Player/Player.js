import React from "react"
import PlayerName from "./PlayerName"
import PlayerScore from "./PlayerScore"
import Card from "../Card/Card"

export default function({ id }) {
  return (
    <div>
      <p>Player:</p>
      <PlayerName id={id} />
      <PlayerScore id={id} />
    </div>
  )
}
