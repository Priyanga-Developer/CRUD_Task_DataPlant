import React ,{useContext, useState} from 'react'
import DataContext from '../Hooks/DataContext';
import EditForm from './EditForm';

const TableData = () => {
    const {schedules,
      handleDelete,handleEdit,displayTime,data,setData}=useContext(DataContext)
  
   
  return (
               <>
               {schedules.map((schedule)=>{
                return     <tr key={schedule.id}>
                     <td className='titleBody'>  {schedule.title}</td>
                     <td className='bodyDescription'>{schedule.description}</td>
                     <td className='bodySubject'>{schedule.subject}</td>
                     <td className='bodySchedule'>{schedule.frequency} at {schedule.repeat} at {displayTime(schedule.time)}</td>
                     <td className='bodyActions'>
                       <div style={{display:"flex", gap:"16px"}}>
                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" onClick={()=>handleEdit(schedule.id)}>
                             <path d="M0 12.8538V15.5556C0 15.8045 0.195528 16 0.444383 16H3.14623C3.26177 16 
                             3.37731 15.9556 3.4573 15.8667L13.1626 6.17025L9.82975 2.83738L0.133315 
                             12.5338C0.0444384 12.6227 0 12.7293 0 12.8538ZM15.74 3.59283C16.0867 
                             3.24622 16.0867 2.68629 15.74 2.33968L13.6603 0.259964C13.3137 -0.0866546 12.7538 
                             -0.0866546 12.4072 0.259964L10.7807 1.8864L14.1136 5.21928L15.74 3.59283Z" fill="black"/>
                         </svg>
                        <EditForm/>
                           <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none" onClick={() => handleDelete(schedule.id)}>
                                   <path d="M2.625 16C2.14375 16 1.73177 15.8259 1.38906 15.4778C1.04635 15.1296 0.875 
                                   14.7111 0.875 14.2222V2.66667H0V0.888889H4.375V0H9.625V0.888889H14V2.66667H13.125V14.2222C13.125 
                                   14.7111 12.9536 15.1296 12.6109 15.4778C12.2682 15.8259 11.8562 16 
                                   11.375 16H2.625ZM11.375 2.66667H2.625V14.2222H11.375V2.66667ZM4.375 
                                   12.4444H6.125V4.44444H4.375V12.4444ZM7.875 12.4444H9.625V4.44444H7.875V12.4444Z" fill="#3C1E5A"/>
                           </svg>
                      </div>
                     </td>
                   </tr>
               })}
           
     </>
  )
}

export default TableData