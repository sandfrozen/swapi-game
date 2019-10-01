import React from "react"

export default function({ card }) {
  let keys = Object.keys(card)
  const details = keys.map(key => {
    let value = card[key]
    console.log(key, value)
    return (<div>{key}: {value}</div>)
  })
  
  return (
    <div className='card__details'>
      {details}
    </div>
  )
}
