import { configureStore } from '@reduxjs/toolkit';
import stockReducer from '../stock/stockSlice';

export const store = configureStore({
  reducer: {
    stock: stockReducer,
  },
});
