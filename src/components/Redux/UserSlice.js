import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const postUser = createAsyncThunk('api/postUser', async (payload) => {
  const data = {
    username: payload.username,
  };
  const response = await fetch('https://che-v1m0.onrender.com/api/v1/register',
    {
      method: 'post',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data),
    });
  const dee = response.json();
  return dee;
});

export const logUser = createAsyncThunk('api/logUser', async (payload) => {
  const data = {
    username: payload,
  };
  const response = await fetch(
    'https://che-v1m0.onrender.com/api/v1/login',
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
  users: [],
  loginpass: [],
  regsuccess: [],
};

const Userslice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: () => {
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postUser.fulfilled, (state, action) => {
      state.regsuccess = action.payload;
      if (action.payload.token) {
        localStorage.setItem('success', JSON.stringify(action.payload.token));
      }
    });
    builder.addCase(logUser.fulfilled, (state, action) => {
      state.loginpass = action.payload;
      if (action.payload.token) {
        localStorage.setItem('token', JSON.stringify(action.payload.token));
      }
    });
  },
});

export default Userslice.reducer;
export const { logout } = Userslice.actions;
