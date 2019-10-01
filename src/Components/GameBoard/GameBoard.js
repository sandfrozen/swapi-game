import React from "react"
import Player from "../Player/Player"
import Card from "../Card/Card"
import { GameContextConsumer } from "../../GameContext/GameContext"

export default function() {
  return (
    <GameContextConsumer>
      {({ players }) => (
        <div>
          <h1>GameBoard</h1>
          <div>
            {players.map((p, id) => (
              <div key={id}>
                <Player id={id} />
                <Card id={id} />
              </div>
            ))}
          </div>
        </div>
      )}
    </GameContextConsumer>
  )
}
