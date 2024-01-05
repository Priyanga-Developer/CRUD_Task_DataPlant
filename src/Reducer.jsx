import React, { useReducer, useState } from 'react'

const Reducer = () => {
    const initialState=[{id:Date.now(),name:"Priya",email:"priya@gmail.com"}];
    const reducer=(state,action)=>{
       switch (action.type) {
        case "add":
            return [...state,action.payload];
        case "delete":
            return state.filter((contact)=>{
                return contact.id!==action.payload.id
            })
       
        default:
            throw new Error();
       }
      
    }
    const [state,dispatch]=useReducer(reducer,initialState)
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const addAmount=(e)=>{
        e.preventDefault();
        const contact ={
            id:Date.now(),
            name,
            email,
        }
        console.log(contact);
        setName("");
        setEmail("")
        dispatch({
            type:"add",
            payload:contact
        })
  
    }

    
    // const [count,setCount]=useState(0);
    // const increment=()=>{
    //     setCount(count+1)
    // }
    // const decrement=()=>{
    //     setCount(count-1)
    // }
  return (
    <div>
         <h1>Use Reducer</h1>
         <form onSubmit={(e)=>e.preventDefault()}>
         <input type="text"
         value={name}
         onChange={(e)=>setName(e.target.value)}
          />
          <input 
          type="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)} />
          <button type="button" onClick={addAmount}>Add Contact</button>
         </form>
         <div>
               <ul>
                {state.map((contact)=>{
                  return  ( <li key={contact.id}>
                     <h2>{contact.name},{contact.email}</h2>
                     <div>
                         <button type='button' onClick={()=>dispatch({type:"delete",payload:{id:contact.id}})}>Delete</button>
                     </div>
                     </li>)

                }
                 
                 
                  
                )}

</ul>
              
                
         </div>
    </div>
  )
}

export default Reducer