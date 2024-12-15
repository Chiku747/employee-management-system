import React from 'react'
import './TaskList.css'
import TaskCard from '../TaskCard/TaskCard'
const TaskList = () => {

  const taskList = JSON.parse(localStorage.getItem("tasks")) || []

  return (
    <>
      <div className="task-list-container">

        {
          taskList.map((task,idx) => <TaskCard data={task} key={idx} />)
        }
      </div>
    </>
  )
}

export default TaskList