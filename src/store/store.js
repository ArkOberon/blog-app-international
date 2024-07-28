import { configureStore } from '@reduxjs/toolkit';
import appSlice from '../store/appSlice';
import cartSlice from '../store/cartSlice';

export const store = configureStore({
  reducer: {
    app: appSlice,

    cart: cartSlice,
  },
});
