/* eslint-disable import/no-extraneous-dependencies */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://che-v1m0.onrender.com/api/v1';

export const AddnewCar = createAsyncThunk(
  'api/AddnewCar',
  async (payload, { rejectWithvalue }) => {
    try {
      const token = JSON.parse(localStorage.getItem('token'));
      const response = await axios.post(`${baseUrl}/cars`, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithvalue(await error.response.data);
    }
  },
);

const initialState = {
  cars: [],
};

const CarSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    addCar: (state, action) => {
      state.cars.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(AddnewCar.fulfilled, (state, action) => {
      state.cars = action.payload;
    });
  },
});

export const { addCar } = CarSlice.actions;

export default CarSlice.reducer;
