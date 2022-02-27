import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   open : false,
   component: '',
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
        const {payload} = action
        state.open = true
        state.component = payload
    },
    closeModal: (state, action) => {
        state.open = false
    },
  
  }
});

const { reducer, actions } = modalSlice;
export const { openModal,closeModal } = actions;
export default reducer;