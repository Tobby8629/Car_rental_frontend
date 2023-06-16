import { configureStore } from '@reduxjs/toolkit';
import UserSlice from './UserSlice';
import ReservationSlice from './ReservationSlice';

const store = configureStore({
  reducer: {
    Users: UserSlice,
    Reserve: ReservationSlice,
  },
});

export default store;
