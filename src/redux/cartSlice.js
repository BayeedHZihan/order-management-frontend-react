import {createSlice, current} from '@reduxjs/toolkit'
export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        list: []
    },
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.list.some(item => item.product._id === action.payload._id);

            if (!itemInCart){
                const itemToCart = {
                    product: action.payload,
                    amount: 1
                }
                state.list = [...state.list, itemToCart]
            }
            else{
                const currentList = state.list;
                currentList.map(item => {
                    if (item.product._id === action.payload._id) 
                        item.amount += 1;
                })
            }
        },
        removeFromCart: (state, action) => {
            const currentList = state.list;
            for (let i=0; i<currentList.length; i++){
                if (currentList[i].product._id === action.payload._id){
                    currentList[i].amount -= 1;
                    if (currentList[i].amount === 0){
                        currentList.splice(i,1);
                        break;
                    }
                }
            }
            state.list = currentList;
        }
    }
})

export const {addToCart, removeFromCart} = cartSlice.actions

export default cartSlice.reducer