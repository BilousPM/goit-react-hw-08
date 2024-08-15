import { createAsyncThunk } from '@reduxjs/toolkit';
import { contactsApi } from '../../components/config/contactsApi';

export const regiserThunk = createAsyncThunk(
  'register',
  async (credentiales, thunkAPI) => {
    try {
      const response = await contactsApi.post('/users/signup', credentiales);
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
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
