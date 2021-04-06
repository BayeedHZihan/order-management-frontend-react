import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist'
import thunk from 'redux-thunk'

import authReducer from './authSlice'
import getUsersReducer from './getUsersSlice'
import getProductsReducer from './getProductsSlice'
import getOrdersReducer from './getOrdersSlice'
import cartReducer from './cartSlice'

const reducers = combineReducers({
    isLoggedIn : authReducer,
    users : getUsersReducer,
    products : getProductsReducer,
    orders : getOrdersReducer,
    cart : cartReducer
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
})

export default store

// export default configureStore({
//   reducer: {
//     isLoggedIn : authReducer,
//     users : getUsersReducer,
//     products : getProductsReducer,
//     orders : getOrdersReducer,
//     cart : cartReducer
//   }
// })