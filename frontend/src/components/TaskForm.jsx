import React, { useState } from 'react'
import { toast } from 'react-hot-toast';

const TaskForm = ({Edit,id}) => {


    

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
    
    const AddHandler = (e) => {
        e.preventDefault();



        const addTask = async () => {
            const res = await fetch('http://localhost:5000/api/tasks', {    
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await res.json();  
            console.log(data);
        }
        addTask();


        toast.success("Added Successfully");
    }

    const EditHandler = (e) => {
        e.preventDefault();
        console.log(formData);


        const editTask = async () => {
            const res = await fetch(`http://localhost:5000/api/tasks/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await res.json();
            console.log(data);
        }
        editTask();


        toast.success("Edit Successfully");
    }

  return (
    
       <div>
         {
              Edit ? 
              
              <form  className=' flex flex-col w-[500px] h-[350px]' onSubmit={EditHandler}>
              <div className=' flex flex-col mb-3'>
              <label htmlFor="title">Title</label>
               <input className=' px-2 border border-gray-100 py-2' type='text' placeholder='Enter the title of the task' id='title'  required onChange={changeHandler} value={formData.title} name='title' />
              </div>
              <div className=' flex flex-col mb-3'>  
               <label htmlFor='desc' >Description</label>
               <input className=' px-2 border border-gray-100 py-2' type='text' placeholder='Enter the Description of the task' id='desc' required onChange={changeHandler} value={formData.description}  name='description' />
              </div>
                 <div className=' flex flex-col  '>
                 <label htmlFor='status'>Status</label>
                 <select  required className='px-2 border border-gray-100 py-2' name='status' id='status' onChange={changeHandler} value={formData.status}>
                     <option value='' disabled>Select</option>
                     <option value='completed'>Completed</option>
                     <option value='In progress'>In progress</option>
                     <option value='pending'>Pending</option>
                 </select>
                 </div>
                <div className=' flex flex-col my-3'>
                <label htmlFor='due'>Due Date</label>
                 <input className='px-2  border border-gray-100 py-2' required type='date' id='due' name='duedate' onChange={changeHandler} value={formData.duedate} />
                </div>
                 <button className=' rounded-md h-[70px] w-[120px] bg-lightBlue text-white' type='submit'>Edit Task</button>
             </form>

              : 

              <form  className=' flex flex-col w-[500px] h-[350px]' onSubmit={AddHandler}>
              <div className=' flex flex-col mb-3'>
              <label htmlFor="title">Title</label>
               <input className=' px-2 border border-gray-100 py-2' type='text' placeholder='Enter the title of the task' id='title'  required onChange={changeHandler} value={formData.title} name='title' />
              </div>
              <div className=' flex flex-col mb-3'>  
               <label htmlFor='desc' >Description</label>
               <input className=' px-2 border border-gray-100 py-2' type='text' placeholder='Enter the Description of the task' id='desc' required onChange={changeHandler} value={formData.description}  name='description' />
              </div>
                 <div className=' flex flex-col  '>
                 <label htmlFor='status'>Status</label>
                 <select required className='px-2 border border-gray-100 py-2' name='status' id='status' onChange={changeHandler} value={formData.status}>
                    <option value='' disabled>Select</option>
                     <option value='completed'>Completed</option>
                     <option value='In progress'>In progress</option>
                     <option value='pending'>Pending</option>
                 </select>
                 </div>
                <div className=' flex flex-col my-3'>
                <label htmlFor='due'>Due Date</label>
                 <input className='px-2  border border-gray-100 py-2' required type='date' id='due' name='duedate' onChange={changeHandler} value={formData.duedate} />
                </div>
                 <button className=' rounded-md h-[70px] w-[120px] bg-lightBlue text-white' type='submit'> Add Task</button>
             </form>
         }
       </div>
    
  )
}

export default TaskForm