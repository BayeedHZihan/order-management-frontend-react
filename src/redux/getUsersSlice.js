import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getUsers = createAsyncThunk(
    'users/getUsers',
    async() => {
        return fetch('http://localhost:5000/users')
                .then(res => res.json())
    }
)

const getUsersSlice = createSlice({
    name : 'users',
    initialState : {
        list : [],
        status : null
    },
    extraReducers: {
        [getUsers.pending] : (state) => {
            state.status = 'loading'
        },
        [getUsers.fulfilled] : (state, {payload}) => {
            state.list = payload
            state.status = 'success'
        },
        [getUsers.rejected] : (state) => {
            state.status = 'failed'
        }
    }
})

export default getUsersSlice.reducer