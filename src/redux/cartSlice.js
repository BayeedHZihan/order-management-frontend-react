import {createSlice} from '@reduxjs/toolkit'
export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        list: []
    },
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.list.some(item => item.product._id === action.payload._id);
            //console.log(itemInCart)
            // const currentList = state.list;
            // const itemToCart = action.payload;
            // let i;
            // for (i=0; i<currentList.length; i++) {
            //     if (currentList[i]._id === itemToCart._id) break;
            // }
            // console.log(i!==currentList.length)
            if (!itemInCart){
                //action.payload.amount = 1;
                const itemToCart = {
                    product: action.payload,
                    amount: 1
                }
                //Object.assign(itemToCart, {amount: 1});
                state.list = [...state.list, itemToCart]
            }
            else{
                const currentList = state.list;
                currentList.map(item => {
                    if (item.product._id === action.payload._id) 
                        item.amount += 1;
                })
            }
        }
    }
})

export const {addToCart} = cartSlice.actions

export default cartSlice.reducer