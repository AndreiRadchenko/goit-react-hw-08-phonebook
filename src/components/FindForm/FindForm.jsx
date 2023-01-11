import * as React from 'react';
import TextField from '@mui/material/TextField';

export function FindForm() {
  return (
    <TextField
      fullWidth
      id="filter"
      label="Filter Contacts"
      name="filter"
      variant="standard"
      sx={{ mb: 4 }}
    />
  );
}
