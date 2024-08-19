import { createAsyncThunk } from '@reduxjs/toolkit';
import { clearToken, contactsApi, setToken } from '../../config/contactsApi';

export const register = createAsyncThunk(
  'auth/register',
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

export const login = createAsyncThunk(
  'auth/login',
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

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await contactsApi.post('/users/logout');
    clearToken();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const savedToken = thunkAPI.getState().auth.token;
    if (savedToken === null) {
      return thunkAPI.rejectWithValue('token is not exist');
    }
    try {
      setToken(savedToken);
      const response = await contactsApi.get('/users/current');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
