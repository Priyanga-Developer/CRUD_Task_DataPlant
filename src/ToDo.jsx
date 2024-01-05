import React, { useEffect, useState } from 'react'
import apiRequest from './apiRequest';

const ToDo = () => {
    const [list,setList]=useState([]);
    const [task,setTask]=useState("");
    const API_URL="http://localhost:3500/todo_list"
    useEffect(()=>{
    const fetchItems=async()=>{
        try {
        const results =await fetch(API_URL);
         const listData=await results.json();
         setList(listData)
            
        } catch (error) {
            console.log(error.message);
        }
    }
    fetchItems();
    },[])
    const addItem=async(task)=>{
      const newItem ={
        id:Date.now(),
        task:task,
        checked:false
      }
      const listItems=[...list,newItem]
      setList(listItems);
      const postOptions={
        method:"POST",
        headers:{
            'Content-Type':'application/JSON'
        },
        body:JSON.stringify(newItem)
      }
      const result=await apiRequest(API_URL,postOptions);
      if(result) throw Error("please check once")
      
    }
    const handleSubmit=()=>{
          addItem(task);
          setTask("")
    }
    const handleCheck=async(id)=>{
        const items=list.map((eachList)=>
            eachList.id==id ? {...eachList,checked:!eachList.checked}:eachList
        )
        setList(items);
        const filterItem=items.filter((items)=>items.id===id)
        const patchOptions={
            method:"PATCH",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({checked:filterItem[0].checked})
        }
        const requestURL=`${API_URL}/${id}`
        const result=await apiRequest(requestURL,patchOptions);
    
    }
    const handleDelete=async(id)=>{
        const filterItems=list.filter((eachList)=>{
            return eachList.id!==id
        })
        setList(filterItems);
        const deleteOptions={
            method:"DELETE",
            headers:{
                'content-Type':'application/JSON'
            },
            body:JSON.stringify(filterItems)
        }
      const reqURL=`${API_URL}/${id}`
      const request=await apiRequest(reqURL,deleteOptions);
 
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