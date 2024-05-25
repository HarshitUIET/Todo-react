import React, { useState } from 'react'
import Taskitems from './components/Taskitems'
import TaskForm from './components/TaskForm';

const tasks = [
  {
    title : "Eat food",
    description : "Eat food to survive",
    status : "In progress",
    id : 1,
    duedate : "2021-09-30"
  },
  {
    title : "Sleep",
    description : "Sleep to rest",
    status : "completed",
    id : 2,
    duedate : "2021-09-30"
  },
  {
    title : "Eat food",
    description : "Eat food to survive",
    status : "completed",
    id : 1,
    duedate : "2021-09-30"
  },
  {
    title : "Sleep",
    description : "Sleep to rest",
    status : "completed",
    id : 2,
    duedate : "2021-09-30"
  },
  {
    title : "Code",
    description : "Code to build",
    status : "In progress",
    id : 3,
    duedate : "2021-09-30"
  },
  {

    title : "Repeat",
    description : "Repeat to succeed",
    status : "pending",
    id : 4,
    duedate : "2021-09-30"

  },
  ,
  {
    title : "Sleep",
    description : "Sleep to rest",
    status : "completed",
    id : 2,
    duedate : "2021-09-30"
  },
  {
    title : "Code",
    description : "Code to build",
    status : "In progress",
    id : 3,
    duedate : "2021-09-30"
  },
  {

    title : "Repeat",
    description : "Repeat to succeed",
    status : "pending",
    id : 4,
    duedate : "2021-09-30"

  },

  
]



const App = () => {


  const [isopen,setIsopen] = useState(false);

 const AddHandler = () => {
    setIsopen(true);
 }

  return ( 
   
   
    <div className='flex flex-col h-full w-full bg-lightgrey items-center justify-center  '>
      <div className=' px-4 rounded-md flex flex-col border  border-orange-800 h-3/4 w-3/4 bg-bgblack '>
        <div className=' flex justify-evenly mt-2'>
          <div className=' text-center mt-3'>
            <span className=' text-3xl font-bold text-lightpink'>Todo </span>
            <span className='text-3xl font-bold text-lightBlue px-2'>App</span>
          </div>
          <div className=''>
            <button onClick={AddHandler} className='bg-lightpink text-white px-4 py-4 rounded-md mt-3'>Add Todo</button>
          </div>
        </div>
       <div className=' max-h-[120] overflow-y-auto no-scrollbar'>
       {
          tasks.map((task)=>(
            <Taskitems task={task} key={task.id}/>
          ))
        }
       </div>
      </div>
    </div>
  
  )
}

export default App