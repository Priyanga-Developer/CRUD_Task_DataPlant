import React, { useState } from 'react'

const Event = () => {
    const [count ,setCount]=useState(0);
    const handleCount =()=>{
        setCount(count+1)
    }
  return (
    <div>
        <h2>Event Handlers</h2>
        <p>The Count is {count}</p>
        <button 
         type="button" 
         onClick={(e)=>handleCount(e)}>Count</button>
         {/* {handleCount()} click events happens without clicking */}
    </div>
  )
}

export default Event