/* eslint-disable import/no-extraneous-dependencies */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://ed-68aw.onrender.com/api/v1';

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

export const getCars = createAsyncThunk('car/getCar', async () => {
  const response = await axios.get(`${baseUrl}/cars`);
  return response.data;
});

export const Car = createAsyncThunk('car/Car', async (payload) => {
  const response = await axios.get(`${baseUrl}/cars/${payload}`);
  return response.data;
});

export const Deletecar = createAsyncThunk('car/Deletecar', async (payload) => {
  const response = await axios.delete(`${baseUrl}/cars/${payload.id}`);
  return response.data;
});

const initialState = {
  cars: [],
  car: '',
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
    builder.addCase(Car.fulfilled, (state, action) => {
      state.car = action.payload;
    });
    builder.addCase(getCars.fulfilled, (state, action) => {
      state.cars = action.payload;
    });
  },
});

export const { addCar } = CarSlice.actions;

export default CarSlice.reducer;
