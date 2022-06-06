import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='center notFound '>
      <h1>404 - Not Found!</h1>
      <h1 className='hover:text-[#0061fc] duration-400 underline underline-offset-2'><Link to="/">Go Home</Link></h1>
    </div>
    
  )
}

export default NotFound