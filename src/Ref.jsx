import React, { useRef, useState } from 'react'

const Ref = () => {
    const [myNum ,setMyNum]=useState(0);
    const inputOne=useRef();
    const inputTwo=useRef();
  const getOne=()=>{
    console.log("hello");
    console.log(inputOne.current);
    inputOne.current.style.width="400px"
  }
 const getTwo=()=>{
  console.log("world");
  console.log(inputTwo.current);
  inputTwo.current.focus();
 }
  return (
    <div>
        <input
        ref={inputOne}
        type="number"
        value={myNum}
        style={{width:"200px"}}
        onChange={(e)=>setMyNum(e.target.value)}
        />
        <h3>{myNum}</h3>
        <input
        ref={inputTwo} 
        type="text"
        value={myNum}
        onChange={(e)=>setMyNum(e.target.value)}
         />
         <button type="button" onClick={()=>getOne()}>Rupees</button>
         <button type="button" onClick={()=>getTwo()}>Dollars</button>
    </div>
  )
}

export default Ref