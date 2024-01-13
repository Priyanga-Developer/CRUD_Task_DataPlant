import React from 'react'
import "../Pages/FilterTab.css"
import { useContext } from 'react';
import DataContext from '../Hooks/DataContext';


const AddForm = () => {
        const {  showAdd, handleAddClose,formData,handleSubmit,handleChange,handleDayClick}=useContext(DataContext)

  return (
    <>
    { showAdd&&<div className='modalBackground'>
            <div className='modalContainer'>
                  <div className='title'>
                     <h1>Add Schedule</h1>
                  </div>
                  <div className='body'>
                     <form onSubmit={(e)=>e.preventDefault()} >
                        <div className='inputContainer'>
                                <label>Title</label>
                                <input type="text" 
                                        name="title" 
                                        placeholder="Sample Subject"
                                        style={{height:"32px",fontSize:"12px"}}
                                        value={formData.title}
                                        onChange={handleChange}
                                      
                                />
                        </div>
                        <div className='inputContainer'>
                                <label>Description</label>
                                <textarea 
                                    name="description" 
                                    id="description" 
                                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
                                    style={{ height: "64px",fontSize:"12px",overflow:"hidden"}}
                                    value={formData.description}
                                    onChange={handleChange}
                                />
                        </div>
                        <div className='inputContainer'>
                        <label>Subject</label> 
                        <input type="text" 
                                        name="subject" 
                                        placeholder="Sample Subject"
                                        style={{height:"32px",fontSize:"12px"}}
                                        value={formData.subject}
                                        onChange={handleChange}
                                      
                                />
                        </div>
                        <div className='inputContainer'>
                                    <label>Frequency</label>
                                    <select name="frequency" style={{height: "32px",fontSize:"12px"}} 
                                     value={formData.frequency} onChange={handleChange}
                                    >
                                        <option value="Weekly">Weekly</option>
                                        <option value="Monthly">Monthly</option>
                                        <option value="Daily">Daily</option>
                                    </select>
                        </div>
                        {formData.frequency === 'Monthly'&&   <div className='inputContainer'>
                                    <label>Repeat</label>
                                    <select name="repeat" style={{height: "32px",fontSize:"12px"}} 
                                    value={formData.repeat} onChange={handleChange} >
                                <option value="First Monday">First Monday</option>
                                <option value="Last Friday">Last Friday</option>
                                <option value="Daily">Daily</option>
                                </select>
                        </div>}
                        {formData.frequency === 'Weekly' && <div className='inputContainer'>
                                    <label>Repeat</label>
                                    <div className='repeatDaily' >
                                   
                                       <button 
                                                className={`optionBtn 
                                                ${formData.repeat === 'Sunday' ? 'selected' : ''}`}  
                                                onClick={() => handleDayClick('Sunday')}>S
                                       </button>
                                       <button 
                                                className={`optionBtn 
                                                ${formData.repeat === 'Monday' ? 'selected' : ''}`}  
                                                onClick={() => handleDayClick('Monday')}>M
                                       </button>
                                       <button 
                                                className={`optionBtn 
                                                ${formData.repeat === 'Tuesday' ? 'selected' : ''}`}  
                                                onClick={() => handleDayClick('Tuesday')}>T
                                       </button>
                                       <button 
                                                className={`optionBtn 
                                                ${formData.repeat === 'Wednesday' ? 'selected' : ''}`}  
                                                onClick={() => handleDayClick( 'Wednesday')}>W
                                       </button>
                                       <button 
                                                className={`optionBtn 
                                                ${formData.repeat === 'Thursday' ? 'selected' : ''}`}  
                                                onClick={() => handleDayClick('Thursday')}>T
                                       </button>
                                       <button 
                                                className={`optionBtn 
                                                ${formData.repeat === 'Friday' ? 'selected' : ''}`}  
                                                onClick={() => handleDayClick('Friday')}>F
                                       </button>
                                       <button 
                                                className={`optionBtn 
                                                ${formData.repeat === 'Saturday' ? 'selected' : ''}`}  
                                                onClick={() => handleDayClick('Saturday')}>S
                                       </button>
                                      </div> 
                        </div>}
                        <div className='inputContainer'>
                        <label>Time</label> 
                        <input type="time" 
                                       name="time" value={formData.time} 
                                       onChange={handleChange} 
                                       style={{height: "32px",fontSize:"12px",textAlign:"center" ,cursor:"pointer"}}    
                                />    
                        </div>

                     </form>
                  </div>
                  <div className='footer'>
                     <button type="button" className='cancelBtn' onClick={ handleAddClose}>Cancel</button>
                     <button type="button" className='doneBtn' onClick={handleSubmit}>Done</button>
                  </div>
            </div>
          </div>}
          </>
  )

}

export default AddForm