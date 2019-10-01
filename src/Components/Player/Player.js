import React from "react"
import PlayerName from "./PlayerName"
import PlayerScore from "./PlayerScore"
import Card from "../Card/Card"

export default function({ id }) {
  return (
    <div>
      <PlayerName id={id} />
      <PlayerScore id={id} />
      <Card id={id} />
    </div>
  )
}
