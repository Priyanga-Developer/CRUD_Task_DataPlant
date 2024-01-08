import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  decrement, increment } from '../features/counter/counterSlice';


const Counter = () => {
    const dispatch =useDispatch();
    const count =useSelector((state)=>state.counter.count)
  return (
    <div>
        <h2>Counter</h2>
        <p>count is {count} </p>
        <button type="button" onClick={()=>dispatch(increment())} >+</button>
        <button type="button" onClick={()=>dispatch(decrement())} >-</button>
    </div>
  )
}

export default Counter