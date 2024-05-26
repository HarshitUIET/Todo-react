import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
    const res = await fetch('https://todo-react-0nnu.onrender.com/api/tasks');
    return res.json();
});

const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        isEdit: false,
        isAdd: false,
        clickedId: null,
    },
    reducers: {
        setIsEdit: (state, action) => {
            state.isEdit = action.payload.isEdit;
            state.clickedId = action.payload.id;
        },
        setIsAdd: (state, action) => {
            state.isAdd = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTasks.fulfilled, (state, action) => {
            state.tasks = action.payload;
        });
    }
});

export const { setIsEdit, setIsAdd } = taskSlice.actions;
export default taskSlice.reducer;
