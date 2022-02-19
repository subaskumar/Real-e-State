import { createSlice } from "@reduxjs/toolkit";

const Token = localStorage.getItem('token')
const initialState = {
    token: Token,
    isAuthenticated: Token ? true : false,
    isLoading: false,
    error: ""
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginPending: (state) => {
        state.isLoading = true;
    },
    loginSuccess: (state, action) => {
        const { payload } = action;
        localStorage.setItem('token', payload.access);
        state.isLoading = false;
        state.isAuthenticated = true;
    },
    loginFail: (state, action) => {
        const { payload } = action;
        state.isLoading = false;
        state.error = payload;
    },
    logOut: (state) => {
        localStorage.removeItem('token');
        localStorage.removeItem('user')
        state.token = null
        state.isAuthenticated = false
        state.isLoading = false
    }
  },
});

const { reducer, actions } = loginSlice;

export const { loginPending, loginSuccess, loginFail,logOut } = actions;

export default reducer;