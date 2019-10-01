import React from "react"
import ReactDOM from "react-dom"

import "./styles.css"
import GameBox from "./Components/GameBox"

function App() {
  return <GameBox />
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
