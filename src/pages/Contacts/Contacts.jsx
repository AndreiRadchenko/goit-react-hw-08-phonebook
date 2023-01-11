import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Link, useLocation } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import CssBaseline from '@mui/material/CssBaseline';
import { FindForm } from 'components/FindForm/FindForm';
import Typography from '@mui/material/Typography';
import { AddCircle } from '@mui/icons-material';

const contacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function generate(element) {
  return contacts.map(({ id, name, number }) =>
    React.cloneElement(
      element,
      {
        key: id,
      },
      <ListItemAvatar>
        <Avatar>
          <FolderIcon />
        </Avatar>
      </ListItemAvatar>,
      <ListItemText primary={name} secondary={number} />
    )
  );
}

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export function Contacts() {
  const location = useLocation();
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
            {generate(
              <ListItem
                divider
                secondaryAction={
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                }
              ></ListItem>
            )}
          </List>
        </Demo>
      </Box>
    </Container>
  );
}
