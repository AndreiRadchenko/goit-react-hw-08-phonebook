import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from 'redux/contacts';

export const selectFilter = state => state.filter;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return !filter
      ? contacts
      : contacts.filter(e =>
          e.name.toLowerCase().includes(filter.toLowerCase())
        );
  }
);
