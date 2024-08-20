import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  fetchContacts,
  updateContacts,
} from './operations';
import { logout } from '../auth/operations';

const initialState = {
  items: [],
  loading: false,
  error: null,
  currentContact: null,
};

const slice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    editContact: (state, action) => {
      state.currentContact = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading = false;
      })
      .addCase(updateContacts.fulfilled, (state, action) => {
        state.items = state.items.map(item => {
          return item.id === state.currentContact.id
            ? { ...action.payload }
            : item;
        });
        state.currentContact = null;
      })

      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
        state.loading = false;
      })
      .addCase(logout.fulfilled, () => {
        return initialState;
      })
      .addMatcher(
        isAnyOf(
          updateContacts.pending,
          fetchContacts.pending,
          deleteContact.pending,
          addContact.pending,
        ),
        state => {
          state.loading = true;
          state.error = null;
        },
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          deleteContact.rejected,
          addContact.rejected,
          updateContacts.rejected,
        ),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
          state.currentContact = null;
        },
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.fulfilled,
          deleteContact.fulfilled,
          addContact.fulfilled,
          updateContacts.fulfilled,
        ),
        state => {
          state.loading = false;
        },
      );
  },
});

export const contactReducer = slice.reducer;
export const { editContact } = slice.actions;
