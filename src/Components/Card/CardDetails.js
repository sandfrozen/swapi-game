import React from "react"

export default function({ card }) {
  let keys = Object.keys(card)
  const details = keys.map((key, i) => {
    let value = card[key]
    // console.log(key, value)
    return (<div key={i}>{key}: {value}</div>)
  })
  
  return (
    <div className='card__details'>
      {details}
    </div>
  )
}
