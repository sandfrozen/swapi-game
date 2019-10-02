import React from "react"
import "./GameButton.scss"

export default function({ label, title, onClick }) {
  return (
    <div>
      {label && <div className='game__button__label'>{label}</div>}
      <button className='game__button' onClick={onClick}>{title || 'Button'}</button>
    </div>
  )
}
