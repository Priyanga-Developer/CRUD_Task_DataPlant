import { useContext } from 'react';

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
// import Memo from './Memo';
// import Callback from './Callback';
// import Reducer from './Reducer';
// import Event from './Event';
// import ControlledInputs from './ControlledInputs';
// import ToDo from './ToDo';
import Header from './RouterComponents/Header';
import Footer from './RouterComponents/Footer';
import { Outlet, Route, Routes } from 'react-router-dom';
import Home from './RouterComponents/Home';
import About from './RouterComponents/About';
import PostPage from './RouterComponents/PostPage';
import Post from "./RouterComponents/Post";
import Missing from './RouterComponents/Missing';
import { auth ,provider} from "./firebase/firebaseconfig";
import { signInWithPopup } from "firebase/auth"

const App = () => {
//  const {count,handleOnclick}=useContext(DataContext)
// console.log("function1");
// useEffect (()=>{
//    console.log("useEffect");
// },[])
// console.log("function2");

const handleGoogleLogin=async()=>{
  try {
    const results= await signInWithPopup(auth,provider);
     console.log(auth?.currentUser?.email);
     console.log(results.user.email);

  } catch (error) {
     console.log(error.message);
  }
}
  return (
    <div>
      {/* <h1>{count}</h1>
      <button type="button" onClick={()=>handleOnclick()}>count</button> */}
      {/* <Ref/> */}
      {/* <Memo/> */}
      {/* <Callback/> */}
      {/* <Reducer/> */}
      {/* <Event/> */}   
      {/* <ControlledInputs/> */}
      {/* <ToDo/> */}
      {/* <Header/>
      <Footer/>
      <Routes>
        <Route path='/' element={<DashBoard/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='postPage'>
          <Route index  element={<PostPage/>}/>
          <Route path=':id' element={<Post/>}/>
        </Route>
        <Route path='*' element={<Missing/>}/>
      </Routes> */}
      <h1>Login using Google</h1>
      <button type='button' onClick={()=>handleGoogleLogin()}>Login Using Google</button>
    </div>
  )
}

export default App