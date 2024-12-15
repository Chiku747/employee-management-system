import { useState } from 'react'
import Dashboard from './Pages/Dashboard/Dashboard'
import './App.css'
import Layout from './Layout'
import { Outlet } from 'react-router-dom'



function App() {

  return (
    <>
  <Outlet />
    </>
  )
}

export default App
