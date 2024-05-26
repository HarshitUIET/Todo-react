import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { MdEditNote } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';
import TaskForm from './TaskForm';

const Taskitems = ({ task }) => {
  const [isEdit, setIsEdit] = useState(false);
  const { title, description, status, id, duedate } = task;

  const DeleteHandler = (id) => {

    const deleteTask = async () => {
        const res = await fetch(`http://localhost:5000/api/tasks/${id}`, {
            method: 'DELETE'
        });
        const data = await res.json();
        console.log(data);
        }
        deleteTask();

    toast.error('Task Deleted');
    
  }

  const EditHandler = () => {

    
    setIsEdit(true);
  }

  const handleToClose = () => {
    setIsEdit(false);
  }

  return (
    <div className='text-white'>
      <div className='flex justify-between px-4 py-4 border-b border-lightpink'>
        <div>
          <p className='text-2xl text-light'>{title}</p>
          <p className='text-lg'>{description}</p>
          <p className='text-lg'>{duedate}</p>
        </div>
        <div className='w-1/4 flex justify-evenly'>
          <div className='rounded-md mt-4 h-[50px] w-[110px] py-2 px-2 bg-lightBlue text-white'>
            <p className='text-lg'>{status}</p>
          </div>
          <button onClick={EditHandler}><MdEditNote size={40} /></button>
          <Dialog open={isEdit} onClose={handleToClose}>
            <DialogTitle>Edit Todo</DialogTitle>
            <DialogContent>
              <div>
                <TaskForm id={id} Edit={true} />
              </div>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleToClose} color='primary' autoFocus>Close</Button>
            </DialogActions>
          </Dialog>
          <button onClick={() => DeleteHandler(id)}><RiDeleteBinLine color='red' size={40} /></button>
        </div>
      </div>
    </div>
  )
}

export default Taskitems;
