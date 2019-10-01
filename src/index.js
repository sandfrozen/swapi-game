import React from "react"
import ReactDOM from "react-dom"
import { GameContextProvider } from "./GameContext/GameContext"
import GameSettings from "./Components/GameSettings/GameSettings"
import GameInfo from "./Components/GameInfo/GameInfo"
import GameBoard from "./Components/GameBoard/GameBoard"
import "./index.scss"

function App() {
  return (
    <GameContextProvider>
      <div className="app__container">
        <GameSettings />
        <GameInfo />
        <GameBoard />
      </div>
    </GameContextProvider>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
