import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// const base = 'http://localhost:3000/api/v1'

const base = 'https://vc-vscc.onrender.com/api/v1';
export const createReserve = createAsyncThunk('reserve/createReserve', async (payload) => {
  const data = {
    city: payload.city,
    pick_up: payload.date,
    return_date: payload.return_date,
    car_id: payload.car,
    user_id: payload.user_id,
  };
  const response = await fetch(
    `${base}/reservations`,
    {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data),
    },
  );
  const res = response.json();
  return res;
});

export const getReserve = createAsyncThunk('reserve/getReserve', async () => {
  const response = await fetch(`${base}/reservations`);
  const data = await response.json();
  return data;
});

export const deleteReserve = createAsyncThunk('reserve/deleteReserve', async (payload) => {
  const response = await fetch(
    `${base}/reservations/${payload}`,
    {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload),
    },
  );
  const res = response.json();
  return res;
});

const initialState = {
  reservations: [],
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
    builder.addCase(getReserve.fulfilled, (state, action) => {
      state.reservations = action.payload;
    });
  },
});

export default ReservationSlice.reducer;
