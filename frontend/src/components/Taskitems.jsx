import React from 'react';
import toast from 'react-hot-toast';
import { MdEditNote } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { fetchTasks, setIsEdit } from '../redux/slices/TaskSlice';

const Taskitems = ({ task }) => {
    const dispatch = useDispatch();
    const { title, description, status, id, duedate } = task;

    const DeleteHandler = (id) => {
        const deleteTask = async () => {
            const res = await fetch(`https://todo-react-0nnu.onrender.com/api/tasks/${id}`, {
                method: 'DELETE'
            });
            const data = await res.json();
            console.log(data);
            dispatch(fetchTasks());
        };
        deleteTask();
        toast.error('Task Deleted');
    };

    const EditHandler = () => {
        dispatch(setIsEdit({ isEdit: true, id }));
    };

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
                    <button onClick={() => DeleteHandler(id)}><RiDeleteBinLine color='red' size={40} /></button>
                </div>
            </div>
        </div>
    );
};

export default Taskitems;
