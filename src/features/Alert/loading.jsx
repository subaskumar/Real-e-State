import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    isBackDrop: false
};

const mediaLoadingSlice = createSlice({
  name: "Loadings",
  initialState,
  reducers: {
    setMediaLoading: (state, action) => {
        const {payload} = action
        state.isLoading = payload.isLoading;
    },
    setBackDropLoading: (state, action) => {
      const {payload} = action
      state.isBackDrop = payload.isBackDrop;
    },
  },
});

const { reducer, actions } = mediaLoadingSlice;

export const { setMediaLoading,setBackDropLoading } = actions;

export default reducer;