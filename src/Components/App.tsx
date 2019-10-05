import React from "react"
import { GameContextProvider } from "../GameContext/GameContext"
import GameSettings from "./GameSettings/GameSettings"
import GameInfo from "./GameInfo/GameInfo"
import GameBoard from "./GameBoard/GameBoard"
import "./App.scss"

export default function App() {
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
