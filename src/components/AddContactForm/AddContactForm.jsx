import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectIsLoading } from 'redux/contacts';
import { addContactOperation } from 'redux/contacts';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const regExName = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const regExNumber =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      regExName,
      'Name may contain only letters, apostrophe, dash and spaces.'
    )
    .required('Name required'),
  number: Yup.string()
    .matches(
      regExNumber,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Phone number required'),
});

const theme = createTheme();

export function AddContactForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const handleFormSubmit = ({ name, number }, { resetForm }) => {
    if (contacts.find(e => e.name === name)) {
      // Notify.warning(`${name} is already in contacts`);
      location.state.form = 'addContact';
      return;
    }
    dispatch(addContactOperation({ name, number }))
      .unwrap()
      .then(() => {
        navigate('/contacts');
      })
      .catch();
    resetForm();
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validationSchema: validationSchema,
    onSubmit: handleFormSubmit,
  });

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs">
        <CssBaseline />

        <Box
          sx={{
            marginTop: 12,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            New Contact
          </Typography>
          <Box
            component="form"
            // noValidate
            onSubmit={formik.handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="Contacts name"
                  name="name"
                  variant="standard"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="number"
                  label="Phone number"
                  name="number"
                  variant="standard"
                  value={formik.values.number}
                  onChange={formik.handleChange}
                  error={formik.touched.number && Boolean(formik.errors.number)}
                  helperText={formik.touched.number && formik.errors.number}
                />
              </Grid>
            </Grid>
            <LoadingButton
              type="submit"
              loading={isLoading}
              fullWidth
              variant="contained"
              sx={{ mt: 8, mb: 2 }}
            >
              Save
            </LoadingButton>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
