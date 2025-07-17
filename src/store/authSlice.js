import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,   
    isAuthenticated: false,
  
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    isLogin: (state, action) => {
      state.user = action.payload.user;
            state.isAuthenticated = true;
        },
        isLogout: (state , action) => {
            state.user = null;
            state.isAuthenticated = false;
        }
    }
});

export const { isLogin , isLogout } = authSlice.actions;
export default authSlice.reducer;