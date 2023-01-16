import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Link, useLocation } from 'react-router-dom';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { FindForm } from 'components/FindForm/FindForm';
import Typography from '@mui/material/Typography';
import { AddCircle } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContactsOperation, deleteContactOperation } from 'redux/contacts';
import { Contact } from 'components/Contact';
import { selectVisibleContacts } from 'redux/filter';

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export function Contacts() {
  const dispatch = useDispatch();
  const location = useLocation();
  const visibleContacts = useSelector(selectVisibleContacts);
  const reversedContacts = [...visibleContacts].reverse();

  React.useEffect(() => {
    dispatch(fetchContactsOperation());
  }, [dispatch]);

  const handleDeleteContact = id => {
    dispatch(deleteContactOperation(id));
  };

  return (
    <Container maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 12,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5" sx={{ mr: 4 }}>
            Contacts
          </Typography>
          <IconButton
            color="primary"
            size="medium"
            component={Link}
            to={'add'}
            state={{ from: location }}
          >
            <AddCircle size="large" sx={{ fontSize: '2rem' }} />
          </IconButton>
        </Box>

        <FindForm />
        <Demo>
          <List>
            {reversedContacts.map(({ id, name, number }) => (
              <Contact
                key={id}
                id={id}
                name={name}
                number={number}
                onClick={handleDeleteContact}
              />
            ))}
          </List>
        </Demo>
      </Box>
    </Container>
  );
}
