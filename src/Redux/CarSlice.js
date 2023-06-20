import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://vc-vscc.onrender.com/api/v1';

export const AddnewCar = createAsyncThunk(
  'api/AddnewCar',
  async (payload) => {
    const response = await fetch(`${baseUrl}/cars`, {
      method: 'POST',
      body: payload,
    });
    const data = await response.json();
    return data;
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

export const userCars = createAsyncThunk('car/userCars', async (payload) => {
  const response = await axios.get(`${baseUrl}/cars/cars?id=${payload}`);
  return response.data;
});

const initialState = {
  cars: [],
  car: '',
  userCars: [],
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

    builder.addCase(userCars.fulfilled, (state, action) => {
      state.userCars = action.payload;
    });
  },

});

export const { addCar } = CarSlice.actions;

export default CarSlice.reducer;
