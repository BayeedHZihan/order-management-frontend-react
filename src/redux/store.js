import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import getUsersReducer from './getUsersSlice'
import getProductsSlice from './getProductsSlice'

export default configureStore({
  reducer: {
    isLoggedIn : authReducer,
    users : getUsersReducer,
    products : getProductsSlice
  }
})