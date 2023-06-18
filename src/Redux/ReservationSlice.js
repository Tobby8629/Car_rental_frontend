import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const createReserve = createAsyncThunk('reserve/createReserve', async (payload) => {
  const data = {
    city: payload.city,
    pick_up: payload.pickup,
    return_date: payload.return,
    car_id: payload.car,
  };
  const response = await fetch(
    'https://ed-68aw.onrender.com/api/v1/reservations',
    {
      method: 'post',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data),
    },
  );
  const res = response.json();
  return res;
});

const initialState = {
};

const ReservationSlice = createSlice({
  name: 'reserve',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(createReserve.fulfilled, (state, action) => {
      state.regsuccess = action.payload;
      if (action.payload.token) {
        localStorage.setItem('success', JSON.stringify(action.payload));
      }
    });
    // builder.addCase(logUser.fulfilled, (state, action) => {
    //   state.loginpass = action.payload;
    //   if (action.payload.token) {
    //     localStorage.setItem('token', JSON.stringify(action.payload));
    //   }
    // });
  },
});

export default ReservationSlice.reducer;
