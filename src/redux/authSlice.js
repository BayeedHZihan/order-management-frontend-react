import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'isLoggedIn',
  initialState: {
    value: false,
    userRole: ""
  },
  reducers: {
    login: (state, action) => {
      state.value = true
      state.userRole = action.payload
    },
    logout: state => {
      state.value = false
      state.userRole = ""
    }
  }
})

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions

export default authSlice.reducer