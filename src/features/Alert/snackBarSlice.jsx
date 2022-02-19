import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    openSnackBar: false,
    message: '',
    type: 'success'
};

const snackBarSlice = createSlice({
  name: "snackBar",
  initialState,
  reducers: {
    setSnackBar: (state, action) => {
        const {payload} = action
        state.openSnackBar = payload.open;
        state.message = payload.message
        state.type = payload.type
    },

  },
});

const { reducer, actions } = snackBarSlice;

export const { setSnackBar} = actions;

export default reducer;