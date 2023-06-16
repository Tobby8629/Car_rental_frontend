import { configureStore } from '@reduxjs/toolkit';
import UserSlice from './UserSlice';
import CarSlice from './CarSlice';

const store = configureStore({
  reducer: {
    Users: UserSlice,
    Cars: CarSlice,
  },
});

export default store;
