import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import getUsersReducer from './getUsersSlice'
import getProductsReducer from './getProductsSlice'
import getOrdersReducer from './getOrdersSlice'

export default configureStore({
  reducer: {
    isLoggedIn : authReducer,
    users : getUsersReducer,
    products : getProductsReducer,
    orders : getOrdersReducer
  }
})