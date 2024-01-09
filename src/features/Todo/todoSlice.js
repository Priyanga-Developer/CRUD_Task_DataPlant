import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[{
        id:nanoid(),
        taskName:"programming C"
    }]
}
export const toDoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
     addTodos: (state,action)=>{
         const todo={
            id:nanoid(),
            taskName:action.payload
         }
         state.todos.push(todo)
     },
     deleteTodo:(state,action)=>{
       state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
     },
     updateTodo:(state,action)=>{
         state.todos=state.todos.map((todo)=>{
         if(todo.id==action.payload.id){
             todo.taskName=action.payload.taskName
         }
         return todo
        })
     }
    }
})

export default toDoSlice.reducer
export const list =(state)=>state.todo.todos;
export const {addTodos ,deleteTodo,updateTodo }=toDoSlice.actions
