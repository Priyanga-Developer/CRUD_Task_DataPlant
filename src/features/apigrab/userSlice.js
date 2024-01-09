import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axioApi } from "../../newapi/axios";

export const dataFetching= createAsyncThunk( "datafetching",async({fetchURL})=>{
   try {
    const data=await axioApi.get(`/${fetchURL}`);
    console.log(data.data);
    return data.data
    
   } catch (error) {
     return error.message
   }
})

const initialState={
    data:[],
    status:"idle",
    error:null
}

export const userSlice=createSlice({
    name:"api",
    initialState,
    reducers:{

    },
    extraReducers(builder){
        builder 
        .addCase(dataFetching.pending,(state,action)=>{
            state.status="idle"
        })
        .addCase(dataFetching.fulfilled,(state,action)=>{
            state.status="fulfiled"
            state.data=action.payload
        })
        .addCase(dataFetching.rejected,(state,action)=>{
            state.status="rejected"
            state.error=action.payload
        })
    }
   
})

export const newDatas=(state)=>state.data.data
export const getStatus=(state)=>state.data.status
export const getErrors=(state)=>state.data.error
export default userSlice.reducer