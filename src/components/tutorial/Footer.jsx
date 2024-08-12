import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

const Footer = () => {

    const {phone,name}=useContext(AppContext)
  return (
    <div>Footer
          <h3 className='text-white'> Phone:{phone}</h3>
       <h3 className='text-white'> name:{name}</h3>
    </div>
  )
}

export default Footer