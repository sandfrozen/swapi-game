import React from "react"
import ReactDOM from "react-dom"

import "./styles.css"
import GameBox from "./Components/GameBox"
import { GameContextProvider } from "./GameContext/GameContext"

function App() {
  return (
    <GameContextProvider>
      <GameBox />
    </GameContextProvider>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
