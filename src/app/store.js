import { configureStore,getDefaultMiddleware } from '@reduxjs/toolkit';
import loginReducer from '../features/Auth/loginSlice';
import snackbarReducer from '../features/Alert/snackBarSlice';
import mediaLoadingsReducer from '../features/Alert/loading';
import saleRentReducer from '../features/saleSlice';
import modalReducer from '../features/modalSlice';

export default configureStore({
  reducer: {
      login: loginReducer,
      snackBar: snackbarReducer,
      SaleRent: saleRentReducer,
      modal: modalReducer,
      Loadings: mediaLoadingsReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false
  })
})