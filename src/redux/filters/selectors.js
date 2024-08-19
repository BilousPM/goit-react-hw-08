import { createSelector } from '@reduxjs/toolkit';

export const selectFilter = state => {
  return state.filters.name;
};
export const selectContacts = state => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, value) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(value.toLowerCase()),
    ),
);
