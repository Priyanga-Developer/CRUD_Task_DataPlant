import { useContext } from 'react';
import './App.css'
// import ClassComp from './Class'
// import ErrorBoundary from './ErrorBoundary'
// import Func from './Func'
// import Login from './Component/Login'
// import Main from "./Component/Main"
// import {createBrowserRouter,Outlet ,RouterProvider ,redirect,Navigate} from "react-router-dom"
// import React from 'react'
// import Header from './Component/Header'
// import ProtectedRoute from './Component/ProtectedRoute'

// const AppLayout = () => { 

//   return (
//     <div className='App'>
//        <Header/>
//        <Outlet/>
//     </div>
//   )
  
// }
// const loggedIn=true

// const Router=createBrowserRouter([{
//   path:"/",
//   // loader: () => (loggedIn ? redirect('/Login') : null),
//   element:<AppLayout/>,
//   children:[
//     {
//     path:"/",
//     element:
//     <ProtectedRoute>
//        <Main/>
//     </ProtectedRoute>,
//     },
//     {
//       path:"/Login",
//       element:<Login/>,
//     },
// ]
// }])

// const App=()=> <RouterProvider router={Router}/>
// export default App

// function App() {
//   const newData="this is prop"
//   return (
//     <>
//     <Login/>
//     <ErrorBoundary>
//         <ClassComp/>
//      </ErrorBoundary>
//      <Func newprop={newData}/>
//     </>
//   )
// }

// export default App

import React from 'react'
// import DataContext from './Hooks/DataContext';
// import Ref from './Ref';
import Memo from './Memo';
import Callback from './Callback';
import Reducer from './Reducer';
import Event from './Event';

const App = () => {
//  const {count,handleOnclick}=useContext(DataContext)
// console.log("function1");
// useEffect (()=>{
//    console.log("useEffect");
// },[])
// console.log("function2");
  return (
    <div>
       <h2>Hii</h2>
      {/* <h1>{count}</h1>
      <button type="button" onClick={()=>handleOnclick()}>count</button> */}
      {/* <Ref/> */}
      {/* <Memo/> */}
      {/* <Callback/> */}
      {/* <Reducer/> */}
      {/* <Event/> */}
      
      
      
    </div>
  )
}

export default App