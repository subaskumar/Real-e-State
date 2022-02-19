import { createSlice } from "@reduxjs/toolkit";

// const page_n = localStorage.getItem('page')
const initialState = {
    sale_rent : "For Sale",
    page : 1
    // page : page_n ? page_n : 1,
};

const saleSlice = createSlice({
  name: "SaleRent",
  initialState,
  reducers: {
    property_type: (state, action) => {
        const {payload} = action
        state.sale_rent = payload;
    },
    setPage_number: (state, action) => {
      const {payload} = action
      state.page = payload;
    },
    removePage_number: (state) => {
      state.page = 1;
    },
  }
});

const { reducer, actions } = saleSlice;
export const { property_type, setPage_number, removePage_number} = actions;
export default reducer;