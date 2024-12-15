import React, { useEffect } from 'react'
import "./Dashboard.css"
import TaskPanel from '../../Components/TaskPanel/TaskPanel'
import TaskList from '../../Components/TaskList/TaskList'
import Navbar from '../../Components/Navbar/Navbar'
import { useContext } from 'react'
import { LoggedInUserContext } from '../../context/loggedInUserContext'
import { useNavigate } from 'react-router-dom'




const Dashboard = () => {
  const navigate = useNavigate()

  const { loggedInUser } = useContext(LoggedInUserContext)

  useEffect(() => {
    if(!loggedInUser){
      navigate("/login")
    }
  }, [])
  
  if(!loggedInUser) return null ;

  return (
    <>
      <Navbar />
      <TaskPanel />
      <TaskList />

    </>
  )
}

export default Dashboard