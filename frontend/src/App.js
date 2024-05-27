import React, { useEffect } from 'react';
import Taskitems from './components/Taskitems';
import TaskForm from './components/TaskForm';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { setIsEdit, fetchTasks, setIsAdd } from './redux/slices/TaskSlice';

const App = () => {
    const { isEdit, tasks, isAdd, clickedId } = useSelector((state) => state.tasks);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    const AddHandler = () => {
        dispatch(setIsAdd(true));
        console.log("Added");
    };

    const handleToClose = () => {
        dispatch(setIsAdd(false));
        console.log("Closed");
    };

    const handleToCloseEdit = () => {
        dispatch(setIsEdit({ isEdit: false, id: null }));
        console.log("Closed");
    };

    return (
        <div className='flex flex-col h-full w-full bg-lightgrey items-center justify-center'>
            <div className='px-4 rounded-md flex flex-col border border-orange-800 h-3/4 w-3/4 bg-bgblack'>
                <div className='flex justify-evenly mt-2'>
                    <div className='text-center mt-3'>
                        <span className='text-3xl font-bold text-lightpink'>Todo </span>
                        <span className='text-3xl font-bold text-lightBlue sm:px-2'>App</span>
                    </div>
                    <div>
                        <button onClick={AddHandler} className='bg-lightpink text-white  px-2 py-2 sm:px-4 sm:py-4 rounded-md mt-3'>Add Todo</button>
                        <Dialog open={isAdd} onClose={handleToClose}>
                            <DialogTitle>Add Todo</DialogTitle>
                            <DialogContent>
                                <div>
                                    <TaskForm Edit={false} />
                                </div>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleToClose} color='primary' autoFocus>Close</Button>
                            </DialogActions>
                        </Dialog>
                        <Dialog open={isEdit} onClose={handleToCloseEdit}>
                            <DialogTitle>Edit Todo</DialogTitle>
                            <DialogContent>
                                <div>
                                    <TaskForm Edit={true} id={clickedId} />
                                </div>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleToCloseEdit} color='primary' autoFocus>Close</Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                </div>
                <div className='max-h-[120] overflow-y-auto no-scrollbar'>
                    {tasks.length > 0 ? (
                        tasks.map((task) => (
                            <Taskitems task={task} key={task.id} />
                        ))
                    ) : (
                        <div className='text-center text-3xl  md:font-bold text-lightpink mt-44'>No Task to show</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default App;
