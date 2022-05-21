import React from 'react'
import './Footer.css'

const footer = () => {

    const date = new Date();

  return (
    <footer className='bg-primary bg-gradient text-white text-center p-2 fixed-bottom'>
        © {date.getFullYear()} My Bank. All Rights Reserved.
    </footer>
  )
}

export default footer