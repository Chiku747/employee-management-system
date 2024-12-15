import React from 'react'
import Dashboard from './Pages/Dashboard/Dashboard'
import { BrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Login from './Pages/Login/Login'
import Signup from './Pages/Signup/Signup'
import CreateTask from './Components/CreateTask/CreateTask'
import LoggedInUserProvider from './context/LoggedInUserContext.jsx'
import { LoggedInUserContext } from './context/loggedInUserContext.js'
import UserProvider from './context/UserContext/UserProvider.jsx'
const Layout = () => {


  
  const router = createBrowserRouter(
    createRoutesFromElements(
    
      <Route path="/" element={
        <UserProvider>
        <LoggedInUserProvider>
      <App />
      </LoggedInUserProvider>
      </UserProvider>
      } >
         
        <Route path="" element={
           
          <Dashboard />
        
          }  />
         
          <Route path="addtask" element={<CreateTask />} />
       
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        </Route>

        )
        )
        return (
        <>
          <RouterProvider router={router} />

        </>
        )
}

        export default Layout