import React from 'react'
import './TaskPanel.css'
import { useContext,useEffect,useState } from 'react'
import { LoggedInUserContext } from '../../context/loggedInUserContext'

const TaskPanel = () => {


  const {loggedInUser,completedTask} = useContext(LoggedInUserContext);
  useEffect(() => {
    const users =JSON.parse( localStorage.getItem("users")) || [];
   const user =  users.filter((user) => user.completed == false)
   console.log(user)

  }, [])

 

  return (
   <>
   <div className="task-panel">
    <div className="task-panel-elem" id="panel-elem-1"><p>0</p><p>New Task</p></div>
    <div className="task-panel-elem" id="panel-elem-2"><p>{loggedInUser.completed}</p><p>Completed</p></div>
    <div className="task-panel-elem" id="panel-elem-3"><p>{loggedInUser.accepted}</p><p>Accepted</p></div>
    <div className="task-panel-elem" id="panel-elem-4"><p>{loggedInUser.failed}</p><p>Failed</p></div>
   </div>
   </>
  )
}

export default TaskPanel