import * as React from 'react';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { setFilterAction } from 'redux/filter';

export function FindForm() {
  const dispatch = useDispatch();

  const handleFilterInput = event => {
    const filterStr = event.target.value;
    dispatch(setFilterAction(filterStr));
  };

  return (
    <TextField
      fullWidth
      id="filter"
      label="Filter Contacts"
      name="filter"
      variant="standard"
      sx={{ mb: 4 }}
      onChange={handleFilterInput}
    />
  );
}
