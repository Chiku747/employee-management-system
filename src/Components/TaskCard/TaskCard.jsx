import React from 'react'
import { useContext,useState } from 'react'
import { LoggedInUserContext } from '../../context/loggedInUserContext'
import './TaskCard.css'
const TaskCard = ({data}) => {



  const {loggedInUser} = useContext(LoggedInUserContext);

  const [completed, setCompleted] = useState(loggedInUser.completed)

  return (
    <div className="task-card">
    <div className="card-top"> <p>High</p> <p>{data.date}</p></div>
    <p className="heading">
     {data.title}
    </p>
    <p className="desc">
     {data.desc}
    </p>
    <div className="card-bottom">
      <button 
      onClick={()=>{
       setCompleted(true)
      }}
      className="card-bottom-btn">Accept Task</button>
      <button className="card-bottom-btn" >Completed</button>
      <button className="card-bottom-btn" >Mark as Failed</button>
    </div>
  </div>
  )
}

export default TaskCard