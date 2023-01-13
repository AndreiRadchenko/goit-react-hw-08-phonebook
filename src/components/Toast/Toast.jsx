import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export const Toast = ({ open, toastText, severity, onClose }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Alert
        onClose={onClose}
        severity={severity}
        variant="filled"
        sx={{ width: '100%' }}
      >
        Sorry, can't register user with this credentials!
      </Alert>
    </Snackbar>
  );
};
