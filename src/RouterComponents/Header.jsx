import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <h2>Router</h2>
        <ul>
            <li><Link to="/home" >Home </Link></li>
            <li><Link to="/about">About </Link></li>
            <li><Link to="/postPage">Post Page </Link></li>
        </ul>
    </div>
  )
}

export default Header