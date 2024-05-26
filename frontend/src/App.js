import React, { useState } from 'react'
import Taskitems from './components/Taskitems'
import TaskForm from './components/TaskForm';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { toast } from 'react-hot-toast';

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
    title : "Sleep",
    description : "Sleep to rest",
    status : "completed",
    id : 3,
    duedate : "2021-09-30"
  },
  {
    title : "Code",
    description : "Code to build",
    status : "In progress",
    id : 4,
    duedate : "2021-09-30"
  },
  {

    title : "Repeat",
    description : "Repeat to succeed",
    status : "pending",
    id : 5,
    duedate : "2021-09-30"

  },
  ,
  {
    title : "Sleep",
    description : "Sleep to rest",
    status : "completed",
    id : 6,
    duedate : "2021-09-30"
  },
  {
    title : "Code",
    description : "Code to build",
    status : "In progress",
    id : 7,
    duedate : "2021-09-30"
  },
  {

    title : "Repeat",
    description : "Repeat to succeed",
    status : "pending",
    id : 8,
    duedate : "2021-09-30"

  },

  
]



const App = () => {


 
  const [isAdd,setIsAdd] = useState(false);

 const AddHandler = () => {
    setIsAdd(true);
    console.log("Added");
 }

 const handleToClose = () => {
    setIsAdd(false);
    console.log("Closed");  
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
            <Dialog open={isAdd} onClose={handleToClose}>
              <DialogTitle>Add Todo</DialogTitle>
              <DialogContent>
                
                 <div>
                 <TaskForm Edit={false} />
                 </div>
                
              </DialogContent>
              <DialogActions>
                <Button onClick={handleToClose} color='primary' autoFocus >Close</Button>
              </DialogActions>
            </Dialog>
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