import React, { useState } from 'react'

const ToDo = () => {
    const [list,setList]=useState(JSON.parse( localStorage.getItem("todo_list"))||[]);
    const [task,setTask]=useState("");
    const addItem=(task)=>{
      const newItem ={
        id:Date.now(),
        task:task,
        checked:false
      }
      const listItems=[...list,newItem]
      setList(listItems);
      localStorage.setItem("todo_list",JSON.stringify(listItems))
    }
    const handleSubmit=()=>{
          addItem(task);
          setTask("")
    }
    const handleCheck=(id)=>{
        const items=list.map((eachList)=>
            eachList.id==id ? {...eachList,checked:!eachList.checked}:eachList
        )
        setList(items);
        localStorage.setItem("todo_list",JSON.stringify(items))
    }
    const handleDelete=(id)=>{
        const filterItems=list.filter((eachList)=>{
            return eachList.id!==id
        })
        setList(filterItems);
        localStorage.setItem("todo_list",JSON.stringify(filterItems))

    }
  return (
    <div>
        <div> <form action="" method="post" onSubmit={(e)=>e.preventDefault()}>
            <input type="text" name="text" id="text"
            value={task}
            onChange={(e)=>setTask(e.target.value)}
            />
         
            <button type="submit" onClick={handleSubmit}>+</button>
            </form>
        </div>
        <div>
            <ul>
                {list.length?list.map((eachList)=>{
                    return(
                    
                    <li key={eachList.id}>{eachList.task} 
                    <input type="checkbox" name="" id=""  checked={eachList.checked} 
                    onChange={()=>handleCheck(eachList.id)}/>
                    <button type="button" onClick={()=>handleDelete(eachList.id)}>Delete</button>
                    </li>
                
                   
                )}):<p>List is Empty</p>}
            </ul>
        </div>
    </div>
  )
}

export default ToDo