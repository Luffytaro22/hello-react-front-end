import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API = '/greetings';

const getGreeting = createAsyncThunk('greeting/getGreeting', async () => {
  try {
    const response = await axios.get(API);
    return response.data;
  } catch (error) {
    throw new Error('Greeting not found');
  }
});

const greetingSlice = createSlice({
  name: 'greetings',
  initialState: {
    greeting: {},
  },
  reducers: {},
  extraReducers:(builder) => {
    builder
      .addCase(getGreeting.fulfilled, (state, action) => {
        // Update the greeting state with the info form the API.
        state.greeting = action.payload;
      })
      .addCase(getGreeting.rejected, () => {
        // Handle the error if the API call fails
        throw new Error('Failed to load greeting');
      })
  }
});

export { getGreeting };
export default greetingSlice.reducer;