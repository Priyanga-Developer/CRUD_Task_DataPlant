import React, { useContext } from 'react'
import "../Pages/FilterTab.css"
import axios from "../api/axios"
import DataContext from '../Hooks/DataContext'

const EditForm = () => {
  const {showEdit,handleEditClose,data,handleEditChange,handleEditDayClick,handleEditSubmit}=useContext(DataContext);




    
  return (
    <>
                     { showEdit&&<div className='modalBackground  editBlock'>
            <div className='modalContainer'>
                  <div className='title'>
                     <h1>Edit Schedule</h1>
                  </div>
                  <div className='body'>
                     <form onSubmit={(e)=>e.preventDefault()}>
                        <div className='inputContainer'>
                                <label>Title</label>
                                <input type="text" 
                                        name="title" 
                                        placeholder="Sample Subject"
                                        style={{height:"32px",fontSize:"12px"}}
                                        value={data.title}
                                        onChange={handleEditChange} 
                                />
                        </div>
                        <div className='inputContainer'>
                                <label>Description</label>
                                <textarea 
                                    name="description" 
                                    id="description" 
                                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
                                    style={{ height: "64px",fontSize:"12px",overflow:"hidden"}}
                                    value={data.description}
                                    onChange={handleEditChange}
                                />
                        </div>
                        <div className='inputContainer'>
                        <label>Subject</label> 
                        <input type="text" 
                                        name="subject" 
                                        placeholder="Sample Subject"
                                        style={{height:"32px",fontSize:"12px"}}
                                        value={data.subject}
                                        onChange={handleEditChange}     
                                />
                        </div>
                        <div className='inputContainer'>
                                    <label>Frequency</label>
                                    <select name="frequency" style={{height: "32px",fontSize:"12px"}}
                                     value={data.frequency} onChange={handleEditChange}
                                     >
                                <option value="Weekly">Weekly</option>
                                <option value="Monthly">Monthly</option>
                                <option value="Daily">Daily</option>
                                </select>
                        </div>
                        {data.frequency === 'Monthly'&& <div className='inputContainer'>
                                    <label>Repeat</label>
                                    <select name="repeat" style={{height: "32px",fontSize:"12px"}}    value={data.repeat} onChange={handleEditChange}  >
                                <option value="Weekly">Weekly</option>
                                <option value="Monthly">Monthly</option>
                                <option value="Daily">Daily</option>
                                </select>
                        </div>}
                        {data.frequency === 'Weekly' && <div className='inputContainer'>
                                    <label>Repeat</label>
                                    <div className='repeatDaily' >
                                   
                                   <button 
                                            className={`optionBtn 
                                            ${data.repeat === 'Sunday' ? 'selected' : ''}`}  
                                            onClick={() => handleDayClick('Sunday')}>S
                                   </button>
                                   <button 
                                            className={`optionBtn 
                                            ${data.repeat === 'Monday' ? 'selected' : ''}`}  
                                            onClick={() => handleEditDayClick('Monday')}>M
                                   </button>
                                   <button 
                                            className={`optionBtn 
                                            ${data.repeat === 'Tuesday' ? 'selected' : ''}`}  
                                            onClick={() => handleEditDayClick('Tuesday')}>T
                                   </button>
                                   <button 
                                            className={`optionBtn 
                                            ${data.repeat === 'Wednesday' ? 'selected' : ''}`}  
                                            onClick={() => handleEditDayClick( 'Wednesday')}>W
                                   </button>
                                   <button 
                                            className={`optionBtn 
                                            ${data.repeat === 'Thursday' ? 'selected' : ''}`}  
                                            onClick={() => handleEditDayClick('Thursday')}>T
                                   </button>
                                   <button 
                                            className={`optionBtn 
                                            ${data.repeat === 'Friday' ? 'selected' : ''}`}  
                                            onClick={() => handleEditDayClick('Friday')}>F
                                   </button>
                                   <button 
                                            className={`optionBtn 
                                            ${data.repeat === 'Saturday' ? 'selected' : ''}`}  
                                            onClick={() => handleEditDayClick('Saturday')}>S
                                   </button>
                                  </div> 
                                
                        </div>}
                        <div className='inputContainer'>
                        <label>Time</label> 
                        <input type="time" 
                                       name="time" value={data.time} 
                                       onChange={handleEditChange} 
                                       style={{height: "32px",fontSize:"12px",textAlign:"center" ,cursor:"pointer"}}
                                />
                        </div>
                     </form>
                  </div>
                  <div className='footer'>
                     <button type="button" className='cancelBtn' onClick={handleEditClose}>Cancel</button>
                     <button type="button" className='doneBtn' onClick={()=>handleEditSubmit(data.id)}>Done</button>
                  </div>
            </div>
          </div>}
    </>
  )
}

export default EditForm