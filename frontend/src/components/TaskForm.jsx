import React, { useState } from 'react'

const TaskForm = () => {


   const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: '',
    duedate: ''
    });

    const changeHandler = (e) => {
        setFormData((prev)=>{
            return {...prev, [e.target.name]: e.target.value};
        })
    }
    
    const SubmitHandler = (e) => {
        e.preventDefault();
        console.log(formData);
    }

  return (
    <div className='  '>
        <form onSubmit={SubmitHandler}>
          <label htmlFor="title">Title</label>
          <input type='text' placeholder='Enter the title of the task' id='title' onChange={changeHandler} value={formData.title} name='title' />
          <label htmlFor='desc' >Description</label>
          <input type='text' placeholder='Enter the Description of the task' id='desc' onChange={changeHandler} value={formData.description}  name='description' />
            <label htmlFor='status'>Status</label>
            <select name='status' id='status' onChange={changeHandler} value={formData.status}>
                <option value='completed'>Completed</option>
                <option value='In progress'>In progress</option>
                <option value='pending'>Pending</option>
            </select>
            <label htmlFor='due'>Due Date</label>
            <input type='date' id='due' name='duedate' onChange={changeHandler} value={formData.duedate} />
            <button type='submit'>Add Task</button>
        </form>
    </div>
  )
}

export default TaskForm