import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchContactsOperation,
  addContactOperation,
  deleteContactOperation,
} from './contacts-operations';

const initialContacts = {
  items: [],
  isLoading: false,
  error: null,
  addContactError: null,
};

const extraActions = [
  fetchContactsOperation,
  addContactOperation,
  deleteContactOperation,
];

const getActions = type => extraActions.map(action => action[type]);

const handlePending = state => {
  state.isLoading = true;
};

const handleAnySuccess = state => {
  state.isLoading = false;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  reducers: {
    addContactError(state, action) {
      state.addContactError = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContactsOperation.fulfilled.toString(), (state, action) => {
        state.items = action.payload;
      })

      .addCase(addContactOperation.fulfilled.toString(), (state, action) => {
        state.items.push(action.payload);
      })

      .addCase(deleteContactOperation.fulfilled.toString(), (state, action) => {
        const index = state.items.findIndex(e => e.id === action.payload.id);
        state.items.splice(index, 1);
      })

      .addMatcher(isAnyOf(...getActions('pending')), handlePending)
      .addMatcher(isAnyOf(...getActions('fulfilled')), handleAnySuccess)
      .addMatcher(isAnyOf(...getActions('rejected')), handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
