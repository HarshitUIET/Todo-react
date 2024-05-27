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
            <div className=' block md:flex sm:flex-col md:flex-row md:justify-between px-4 py-4 border-b border-lightpink'>
                <div classname=" mx-auto max-w-md p-4">
                    <div classname="text-2xl my-2 text-gray-300">{title}</div>
                    <div classname="text-lg my-2 overflow-hidden whitespace-nowrap overflow-ellipsis">{description}</div>
                    <div classname=" text-lg">{duedate}</div>
                </div>

                <div className='  w-2/3 sm:w-1/4 sm:flex   justify-evenly'>
                    <div className='rounded-md mt-4 sm:h-[50px] w-[110px] py-2 px-2 bg-lightBlue text-white'>
                        <p className='text-lg'>{status}</p>
                    </div>
                    <div className='  md:flex md:justify-between mt-6 sm:mt-0'>
                        <button className='mr-2 md:ml-0' onClick={EditHandler}><MdEditNote size={40} /></button>
                        <button onClick={() => DeleteHandler(id)}><RiDeleteBinLine className='ml-2 md:ml-0' color='red' size={40} /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Taskitems;
