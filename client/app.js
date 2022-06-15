import React from 'react'
import {Navbar} from './components'
// import 'bootstrap/dist/css/bootstrap.min.css';

import Storefront from './components/Storefront'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <Navbar />
      <Storefront />
      <Routes />
    </div>
  )
}

export default App
