import React, { useState } from 'react'
import './CreateTask.css'

const CreateTask = () => {

const [title,setTitle] = useState('');
const [date,setDate] = useState('');
const [category,setCategory] = useState('');
const [desc,setDesc] = useState('');


  return (
    <>
      <div className="main-task-container">
        <form
        onSubmit={(e)=>{
          e.preventDefault()
          const tasks = JSON.parse(localStorage.getItem("tasks")) || []
          tasks.push({id:Date.now(),title,date,category,desc})
          localStorage.setItem('tasks',JSON.stringify(tasks))
          setTitle('');
          setDate('');
          setCategory('');
          setDesc('')
        }}
        className="add-task-form-group" >
          <div className='input-group-1'>
            <label htmlFor="task-title">Task Title</label>
            <input onChange={(e)=>{
              setTitle(e.target.value)
            }}
            value={title}
             type="text" name="task-title" id="task-title" placeholder="Make a UI Design" />
            <label htmlFor="date-field">Date</label>
            <input
            onChange={(e)=>{
              setDate(e.target.value)
            }}
            value={date}
            type="date" name="date-field" id="date-field" />
            <label htmlFor="assign-task">Assign to</label>
            <input
             type="text" name="assign-task" id="assign-task" placeholder="Employee name" />
            <label htmlFor="category">Category</label>
            <input
            onChange={(e)=>{
              setCategory(e.target.value)
            }}
            value={category}
            type="text" name="category" id="category" placeholder="Dev, Writer" />
          </div>
          <div className='input-group-2'>
            <label htmlFor="description">Description</label>
            <textarea 
            onChange={(e)=>{
              setDesc(e.target.value)

            }}
            value={desc}
            name="description" id="description" rows={9} cols={60}></textarea>
            <button className='add-task-btn'>Create Task</button>
          </div>
        </form>
      </div>

    </>
  )
}

export default CreateTask