import React from "react"
import "./GameButton.scss"

type GameButtonProps = {
  label?: string,
  title: string,
  onClick: () => void
}

export default function({ label, title, onClick }: GameButtonProps) {
  return (
    <div>
      {label && <div className='game__button__label'>{label}</div>}
      <button className='game__button' onClick={onClick}>{title || 'Button'}</button>
    </div>
  )
}
