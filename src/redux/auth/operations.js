import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  clearToken,
  contactsApi,
  setToken,
} from '../../components/config/contactsApi';

export const registerThunk = createAsyncThunk(
  'register',
  async (credentiales, thunkAPI) => {
    try {
      const response = await contactsApi.post('/users/signup', credentiales);
      setToken(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const loginThunk = createAsyncThunk(
  'login',
  async (credentiales, thunkAPI) => {
    try {
      const response = await contactsApi.post('/users/login', credentiales);
      setToken(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const logOutThunk = createAsyncThunk('logout', async (_, thunkAPI) => {
  try {
    await contactsApi.post('/users/logout');
    clearToken();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// export const getMeThunk = createAsyncThunk('getMe', async (_, thunkAPI) => {
//   try {
//     const response = await contactsApi.get('/users/current');
//     return response.data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });
