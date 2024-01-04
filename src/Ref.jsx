import React, { useRef, useState } from 'react'

const Ref = () => {
    const [myNum ,setMyNum]=useState(0);
    const inputOne=useRef();
    const inputTwo=useRef();
    const countVal =useRef(0);
    
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
 const getCount=()=>{
   countVal.current=countVal.current+1;
   console.log(countVal.current ,"counter");
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
         <h3>Count Value is {countVal.current}</h3>
         <button type="button" onClick={()=>getOne()}>Rupees</button>
         <button type="button" onClick={()=>getTwo()}>Dollars</button>
         <button type="button" onClick={()=>getCount()}>Counting</button>
    </div>
  )
}

export default Ref