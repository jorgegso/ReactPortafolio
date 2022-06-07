import React from 'react'
import ResumenPdf from '../assets/jorgeSosaResume.pdf'
const Resume = () => {
  return (
    <div>
      <iframe
        title='Resume' 
        src={ResumenPdf}>
      </iframe>  
    </div>
  )
}

export default Resume