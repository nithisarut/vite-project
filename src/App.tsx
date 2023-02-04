import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Header from './component/Header'
import Main from './component/Main'
import Login from './page/Login'
import Register from './page/Register'
import Trip from './page/Trip'

function App() {
 
  return (
   <React.Fragment>
    <Header/>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/Trip' element={<Trip/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Login' element={<Login/>}/>
    </Routes>
   </React.Fragment>
  
  )
}

export default App
