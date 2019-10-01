import React from "react"
import "./GameButton.scss"

export default function({ label, title, onClick }) {
  return (
    <span>
      {label && <div className='game__button__label'>{label}</div>}
      <button className='game__button' onClick={onClick}>{title}</button>
    </span>
  )
}
