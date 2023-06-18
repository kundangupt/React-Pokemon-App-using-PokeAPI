import React from 'react'

export default function Pokomen({num , moves, name}) {

  return (
   <>
   <h1>
    You Choose <span style={{color:"red"}}></span>{num}</h1>
   <h1>
    My Name <span style={{color:"red"}}></span>{moves}</h1>
   <h1>
     I have <span style={{color:"red"}}></span>{name}</h1>
  <select>
  <option value ="1">1</option>
  <option value="25">25</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>  
  </select>   
   
   </>
  )
}
