import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const postUser = createAsyncThunk('api/postUser', async (payload) => {
  const data = {
    username: payload.username
  } 
  const response = await fetch(
    'https://che-v1m0.onrender.com/api/v1/register', 
    data,
    { method: 'post',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(data)
    });
    const dee = response.text()
  return dee;
});

const initialState = {
    users: [],
    result: ''
}

const Userslice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
      builder.addCase(postUser.fulfilled, (state,action)=>{
        console.log(action.payload)
      })
    }
})


export default Userslice.reducer
