import axios from 'axios';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const getOrders = createAsyncThunk(
    'orders/getOrders', 
    async() => {
        const res = await axios.get('http://localhost:5000/orders/get-orders', {withCredentials: true});
        return res.data;
    }
)

const getOrdersSlice = createSlice({
    name : 'orders',
    initialState : {
        list : [],
        status : null
    },
    extraReducers : {
        [getOrders.pending] : (state) => {
            state.status = 'loading'
        },
        [getOrders.fulfilled] : (state, {payload}) => {
            state.list = payload
            state.status = 'success'
        },
        [getOrders.rejected] : (state) => {
            state.status = 'failed'
        }
    }
})

export default getOrdersSlice.reducer