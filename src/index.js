import React from "react"
import ReactDOM from "react-dom"
import { GameContextProvider } from "./GameContext/GameContext"
import GameSettings from "./Components/GameSettings/GameSettings"
import GameInfo from "./Components/GameInfo/GameInfo"
import GameBoard from "./Components/GameBoard/GameBoard"
import { GameContainer } from "./index.styled"

function App() {
  return (
    <GameContextProvider>
      <GameContainer>
        <GameSettings />
        <GameInfo />
        <GameBoard />
      </GameContainer>
    </GameContextProvider>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
