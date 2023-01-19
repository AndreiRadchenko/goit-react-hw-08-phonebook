import { createSlice } from '@reduxjs/toolkit';

const initialFilter = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilter,
  reducers: {
    setFilterAction(state, action) {
      return action.payload;
    },
    resetFilter(state, _) {
      return '';
    },
  },
});

export const { setFilterAction, resetFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
