import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { newDatas ,getErrors,getStatus, dataFetching } from '../features/apigrab/userSlice';


const Row = ({fetchURL ,heading}) => {
    const fetchedData=useSelector(newDatas);
    const fetchedErrors=useSelector(getErrors);
    const fetchedStatus=useSelector(getStatus);
    const dispatch=useDispatch();
   
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
    </div>
  )
}

export default Row