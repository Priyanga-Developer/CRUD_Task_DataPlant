import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodos, deleteTodo, list, updateTodo } from '../features/Todo/todoSlice';


const ToDoList = () => {
    const [task,setTask]=useState("");
    const [newtask,setNewtask]=useState("");
    const newList =useSelector(list);
    const dispatch=useDispatch();
  


  return (
    <div>
        <form action="" onSubmit={(e)=>e.preventDefault()}>
           <input type="text" value={task} onChange={(e)=>setTask(e.target.value)} />
           <button type="button" onClick={()=>dispatch(addTodos(task))}>+</button>
        </form>
        <div>
            <ul>
                {newList.map((eachList)=>{
                  return  <li key={eachList.id}>{eachList.taskName}
                    <button type='button' onClick={()=>dispatch(deleteTodo(eachList.id))}>Delete</button>
                    <input type="text" value={newtask} onChange={(e)=>setNewtask(e.target.value)} />
                    <button type='button' onClick={()=>dispatch(updateTodo({id:eachList.id,taskName:newtask}))}>Update</button>
                    </li>
                })}
               
            </ul>
        </div>
    </div>
  )
}

export default ToDoList