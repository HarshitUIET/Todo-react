import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
    try {
        const res = await fetch('http://localhost:5000/api/tasks');
        if (!res.ok) {
            throw new Error('Failed to fetch tasks');
        }
        return await res.json();
    } catch (error) {
    
        throw error; 
    }
});

export const TaskSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        isAdd: false,
        isEdit: false,
        error: null, // Add error state
    },
    reducers: {
        setIsAdd: (state, action) => {
            state.isAdd = action.payload;
        },
        setIsEdit: (state, action) => {
            state.isEdit = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.pending, (state) => {
                // Handle pending state if needed
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.tasks = action.payload;
                state.error = null; 
            })
            .addCase(fetchTasks.rejected, (state, action) => {
                state.error = action.error.message;
            });
    },
});

export const { setIsAdd, setIsEdit } = TaskSlice.actions;

export default TaskSlice.reducer;