import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Post from './Post'

const PostPage = () => {
  return (
    <div> 
        <h2>PostPage</h2>
        <ul>
            <li><Link to="1">Post1</Link></li>
            <li><Link to="2">Post2</Link></li>
            <li><Link to="3">Post3</Link></li>
        </ul>    
    </div>
  )
}

export default PostPage