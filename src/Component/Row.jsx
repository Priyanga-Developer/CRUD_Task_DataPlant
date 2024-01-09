import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { newDatas ,getErrors,getStatus, dataFetching } from '../features/apigrab/userSlice';
import useWindowSize from '../Hooks/useWindowSize';


const Row = ({fetchURL ,heading}) => {
    const fetchedData=useSelector(newDatas);
    const fetchedErrors=useSelector(getErrors);
    const fetchedStatus=useSelector(getStatus);
    const dispatch=useDispatch();
    const {width}=useWindowSize();
   
    useEffect(()=>{
        if(fetchedStatus==="idle"){
            dispatch(dataFetching({fetchURL}))
        }  
    },[fetchedStatus,dispatch])
    
  return (
    <div>
        <h1>{heading}</h1>
        <ul>{fetchedData.map((eachData)=>{
            return <li key={eachData.id}>
               {eachData.title}
            </li>
        })}
          
        </ul>
        <div>
            <h1 style={{color: width>768 ? "red" :"green"}}>Hello world</h1>
        </div>
    </div>
  )
}

export default Row