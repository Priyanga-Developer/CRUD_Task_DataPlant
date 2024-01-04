import React , { createContext ,useState } from "react";

const DataContext=createContext({});
export const DataContextProvider=({children})=>{
    const [count,setCount]=useState(0);
    const handleOnclick=()=>{
      setCount(count+1)
    }
    return(
        <DataContext.Provider value={{count,handleOnclick}}>
            {children}
        </DataContext.Provider>
    )
}
export default DataContext