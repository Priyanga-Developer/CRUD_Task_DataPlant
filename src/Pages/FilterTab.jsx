import React, {  useContext, useState } from 'react'
import "./FilterTab.css"
import { PiPlusCircleBold } from "react-icons/pi";
import AddForm from '../Components/AddForm';
import DataContext from '../Hooks/DataContext';


const FilterTab = () => {
   const {handleAddShow,searchTerm,handleSearchChange,handleSearchSubmit}=useContext(DataContext)
  return (
    <div className='main'>
        <div className='search-Container'>
            <input 
                type="search" 
                name="search" id="searchInput" 
                className='searchInput' 
                placeholder='Search'
                value={searchTerm}
                onChange={handleSearchChange}
             />
            <svg xmlns="http://www.w3.org/2000/svg" width="22" 
            height="21" viewBox="0 0 22 21" fill="none" 
            className='searchIcon' onClick={handleSearchSubmit}>
<path d="M17.4112 18.212L11.923 12.9068C11.4874 13.2436 10.9865 13.5103 10.4203 13.7068C9.85404 13.9033 9.2515 14.0015 8.61266 14.0015C7.03008 14.0015 5.6907 13.4717 4.59451 12.412C3.49832 11.3524 2.95023 10.0576 2.95023 8.52782C2.95023 6.998 3.49832 5.70326 4.59451 4.64361C5.6907 3.58396 7.03008 3.05414 8.61266 3.05414C10.1952 3.05414 11.5346 3.58396 12.6308 4.64361C13.727 5.70326 14.2751 6.998 14.2751 8.52782C14.2751 9.14537 14.1735 9.72782 13.9702 10.2752C13.7669 10.8226 13.4911 11.3068 13.1426 11.7278L18.6308 17.0331L17.4112 18.212ZM8.61266 12.3173C9.70159 12.3173 10.6272 11.9489 11.3894 11.212C12.1517 10.4752 12.5328 9.58046 12.5328 8.52782C12.5328 7.47519 12.1517 6.58045 11.3894 5.84361C10.6272 5.10677 9.70159 4.73835 8.61266 4.73835C7.52373 4.73835 6.59814 5.10677 5.83589 5.84361C5.07364 6.58045 4.69251 7.47519 4.69251 8.52782C4.69251 9.58046 5.07364 10.4752 5.83589 11.212C6.59814 11.9489 7.52373 12.3173 8.61266 12.3173Z" fill="#391E5A"/>
            </svg>

        </div>
        <div className='addContainer'>
          <button onClick={handleAddShow} className='addBtn'> <PiPlusCircleBold /><span>Add</span></button>
          <AddForm />
        </div>

    </div>
  )
}

export default FilterTab