import axios from 'axios';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const getProducts = createAsyncThunk(
    'products/getProducts', 
    async() => {
        const res = await axios.get('http://localhost:5000/products/view-products', {withCredentials: true});
        return res.data;
    }
)

const getProductsSlice = createSlice({
    name : 'products',
    initialState : {
        list : [],
        status : null
    },
    extraReducers : {
        [getProducts.pending] : (state) => {
            state.status = 'loading'
        },
        [getProducts.fulfilled] : (state, {payload}) => {
            state.list = payload
            state.status = 'success'
        },
        [getProducts.rejected] : (state) => {
            state.status = 'failed'
        }
    }
})

export default getProductsSlice.reducer