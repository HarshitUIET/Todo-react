import React from 'react'
import { MdEditNote } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";

const Taskitems = ({task}) => {


    const {title, description, status, id, duedate} = task;

    const DeleteHandler = (id) => {
        console.log('Delete')
    }

    const EditHandler = (id) => {
        console.log('Edit')
    }

  return (
    <div className=' text-white'>
        <div className='flex justify-between px-4 py-4 border-b border-lightpink'>
            <div>
            <h1 className='text-2xl text-light'>{title}</h1>
            <p className='text-lg'>{description}</p>
            <p className='text-lg'>{duedate}</p>
            </div>
            <div className=' w-1/4 flex justify-evenly '>
            <div className=' rounded-md mt-4 h-[50px] w-[110px] py-2 px-2 bg-lightBlue text-white '>
                <p className='text-lg'>{status}</p>
            </div>
            <button onClick={EditHandler}><MdEditNote size={40}/></button>
            <button onClick={DeleteHandler} ><RiDeleteBinLine color='red' size={40}/></button>
            </div>
        </div>
    </div>
  )
}

export default Taskitems