import React from "react"

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
    gameMode: "People",
    singleplayer: true,
    lastWinner: -1
  }

  getNewCardFor = playerIndex => {
    let { players, singleplayer } = this.state
    if (playerIndex === 0 && singleplayer) {
      players[1].card = {}
    }
    setTimeout(() => {
      players[playerIndex].card = {}
      this.setState({ players })
      this.getWinner()
    }, 1500)
  }

  getWinner = () => {
    const { players, gameMode } = this.state
    const card1 = players[0].card
    const card2 = players[1].card
    const attr = gameMode === "People" ? "mass" : "crew"

    if (card1 && card2) {
      if (card1[attr] > card2[attr]) {
        this.addPointFor(0)
      } else if (card1[attr] > card2[attr]) {
        this.addPointFor(1)
      } else {
        // this.addPointFor(0)
        // this.addPointFor(1)
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
