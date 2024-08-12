import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

const Contact = () => {
    const {phone}=useContext(AppContext)
  return (
    <div>Contact
    <h3 className='text-white'> Phone:{phone}
    </h3>
    </div>
  )
}

export default Contact