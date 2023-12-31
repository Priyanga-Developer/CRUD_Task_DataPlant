import React, { useState } from 'react'

const Func = () => {
    const [count ,setCount] =useState(0);
    const OnIncrement=()=>{
        setCount(count+1)
    }
    const OnDecrement=()=>{
        setCount(count-1)
    }
  return (
    <div>
        <h2>Functional Compenent</h2>
        <h1> Count is {count}</h1>
        <button onClick={OnIncrement}>Increment</button>
        <button onClick={OnDecrement}>Decrement</button>
        
    </div>
  )
}

export default Func