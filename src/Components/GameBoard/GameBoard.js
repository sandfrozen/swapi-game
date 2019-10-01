import React from "react"
import Player from "../Player/Player"
import Card from "../Card/Card"
import styled from "styled-components"
import { GameContextConsumer } from "../../GameContext/GameContext"

const GameBoard = styled.div`
  display: flex;
`

const playersArray = [{}, {}]

export default function() {
  return (
    <GameContextConsumer>
      {({ players }) => (
        <div>
          <h1>GameBoard</h1>
          <GameBoard>
            {players.map((p, id) => (
              <div key={id}>
                <Player id={id} />
                <Card id={id} />
              </div>
            ))}
          </GameBoard>
        </div>
      )}
    </GameContextConsumer>
  )
}
