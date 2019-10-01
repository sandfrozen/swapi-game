import React from "react"

export default function({ title, onClick }) {
  return <button onClick={onClick}>{title}</button>
}
