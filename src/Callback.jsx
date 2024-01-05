import React, { useEffect,useMemo, useState,useCallback} from 'react'

const Callback = () => {
    const [count,setCount]= useState(0);
    const result=useMemo(()=>{
       return factorial(count);
    },[count])
   
    const [name,setName] =useState("")
    function factorial (n){
        let i=0;
        while(i<20000000)i++; 
        //when the loop increases the whole gets freezed so usememo to memoize the values
        if(n<0){
            return -1
        }
        if(n==0){
            return 1
        }
        return n*factorial(n-1)
    }
    const displayName=useCallback(()=>{
            return name //helps to memoize the function
    },[name])
 
  return (
    <div>
       <h1>The factorial is {result}</h1>
       <h2>The count is {count}</h2>
       <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
      
       <DisplayName displayName={displayName}></DisplayName>
       <button type='button'onClick={()=>setCount(count+1)}>Increment</button>
       <button type='button' onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
  )

}

const DisplayName=({displayName})=>{
    const [value,setValue]=useState("");
    useEffect(()=>{
           setValue(displayName());
           console.log("component rendered");
    },[displayName])
    return <p>{`My name is ${value}`}</p>
}

export default Callback

