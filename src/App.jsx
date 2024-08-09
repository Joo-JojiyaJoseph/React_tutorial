import React from 'react'

import Nav from './layouts/Nav'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
<div>
<Nav/>
<Outlet/>
</div>
  )
}

export default App