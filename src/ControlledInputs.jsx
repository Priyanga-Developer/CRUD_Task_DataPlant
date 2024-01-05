import React, { useState } from 'react'

const ControlledInputs = () => {
    const [name,setName]=useState("")
  return (
    <div>
        <input
         type="text"
         value={name} 
        name="text"
         id="text" 
         onChange={(e)=>setName(e.target.value)}/>
         <h1>{name}</h1>
    </div>
  )
}

export default ControlledInputs