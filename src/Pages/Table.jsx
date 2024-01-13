import React, { useState } from 'react'
import "./Table.css"
import "./FilterTab.css"
import EditForm from '../Components/EditForm';
import TableData from '../Components/TableData';



const Table = ( ) => {

  return (
    <div className='tableContainer'>
                    <table>
                        <thead>
                          <tr>
                            <th className='titleHead'>Title</th>
                            <th className='titleDescription'>Description</th>
                            <th className='titleSubject'>Subject</th>
                            <th className='titleSchedule'>Schedule</th>
                            <th className='titleActions'>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                         <TableData/>
                        </tbody>
                    </table>
    </div>
  )
}

export default Table