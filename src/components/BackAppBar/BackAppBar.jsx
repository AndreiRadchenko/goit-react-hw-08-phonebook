import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import Container from '@mui/material/Container';
import { Link, useLocation } from 'react-router-dom';

export const BackAppBar = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Container maxWidth="xl">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              component={Link}
              to={backLinkHref}
            >
              <ArrowBackIos />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Phonebook
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
