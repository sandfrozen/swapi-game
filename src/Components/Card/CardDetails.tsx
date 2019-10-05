import React from "react"

type CardDetailsProps = {
  card: any
}

export default function({ card }: CardDetailsProps) {

  const details = Object.keys(card).map((key, i) => <div key={i}>{key}: {card[key]}</div>)

  return (
    <div className='card__details'>
      {details}
    </div>
  )
}
