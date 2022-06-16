import React from 'react'
import {Navbar} from './components'

import Storefront from './components/Storefront'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
    </div>
  )
}

export default App
