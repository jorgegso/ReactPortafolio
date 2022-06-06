import React from 'react'
import ResumenPdf from '../assets/jorgeSosaResume.pdf'
const resume = () => {
  return (
    <div>
      <iframe
      
      title='resume' 
      src={ResumenPdf}>
      </iframe>  
    </div>
  )
}

export default resume