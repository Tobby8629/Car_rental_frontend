import { configureStore } from '@reduxjs/toolkit';
import UserSlice from './UserSlice';
import CarSlice from './CarSlice';
import ReservationSlice from './ReservationSlice';

const store = configureStore({
  reducer: {
    Users: UserSlice,
    Cars: CarSlice,
    Reserve: ReservationSlice,
  },
});

export default store;
