import { configureStore} from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"
import todoReducer from "../features/Todo/todoSlice"
import userSliceReducer from "../features/apigrab/userSlice"

export const store=  configureStore({
    reducer:{
        counter:counterReducer,
        todo:todoReducer,
        data:userSliceReducer,
    }
})

