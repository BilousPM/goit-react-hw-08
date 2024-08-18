import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/slice';
import { contactReducer } from './contacts/slice';
import { filterRedusere } from './filters/slice';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filters: filterRedusere,
    auth: authReducer,
  },
});
