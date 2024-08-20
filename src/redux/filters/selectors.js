import { createSelector } from '@reduxjs/toolkit';

const selectFilter = state => state.filters.name;
const selectContacts = state => state.contacts.items;

export const selectNameFilter = createSelector(
  [selectContacts, selectFilter],
  (contacts, value) =>
    contacts.filter(contact => {
      return value
        ? contact.name
            .toLowerCase()
            .trim()
            .includes(value.toLowerCase().trim()) ||
            contact.number.includes(value.trim())
        : contact;
    }),
);
