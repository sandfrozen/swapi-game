import React from "react"
import getResource from "../API/swapi"

const GameContext = React.createContext()

export class GameContextProvider extends React.Component {
  state = {
    players: [
      {
        name: "Player 1",
        score: 0,
        card: null
      },
      {
        name: "Player 2",
        score: 0,
        card: null
      }
    ],
    gameMode: "people",
    singleplayer: true,
    lastWinner: -1
  }

  getNewCardFor = async playerIndex => {
    let { players, singleplayer, gameMode } = this.state

    if (playerIndex === 0 && singleplayer) {
      players[1].card = await getResource(gameMode)
    }
    players[playerIndex].card = await getResource(gameMode)
    this.setState({ players })
    this.getWinner()
  }

  getWinner = () => {
    const { players, gameMode } = this.state
    const card1 = players[0].card
    const card2 = players[1].card
    const attr = gameMode === "people" ? "mass" : "crew"

    if (card1 && card2) {
      const attr1 = parseInt(card1[attr], 10) || 0
      const attr2 = parseInt(card2[attr], 10) || 0
      console.log(attr1, attr2)

      if (attr1 > attr2) {
        this.addPointFor(0)
      } else if (attr1 < attr2) {
        this.addPointFor(1)
      } else {
        this.setState({ lastWinner: -1 })
      }
    }
  }

  addPointFor = playerIndex => {
    let { players } = this.state
    players[playerIndex].score += 1
    this.setState({ players, lastWinner: playerIndex })
  }

  setNewGame = () => {
    let { players } = this.state
    players[0].card = null
    players[1].card = null
    this.setState({ players })
  }

  render() {
    return (
      <GameContext.Provider
        value={{
          players: this.state.players,
          gameMode: this.state.gameMode,
          singleplayer: this.state.singleplayer,
          lastWinner: this.state.lastWinner,
          getNewCardFor: this.getNewCardFor,
          setNewGame: this.setNewGame
        }}
      >
        {this.props.children}
      </GameContext.Provider>
    )
  }
}

export const GameContextConsumer = GameContext.Consumer
