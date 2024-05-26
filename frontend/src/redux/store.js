import {configureStore} from '@reduxjs/toolkit';
import TaskReducer from './slices/TaskSlice';

export default configureStore({
    reducer: {
        tasks: TaskReducer,
    }
});

