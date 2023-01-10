import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import Container from '@mui/material/Container';
import { Link, useLocation } from 'react-router-dom';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';

export const RegisterAppBar = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  //   const [auth, setAuth] = React.useState(true);
  //   const [anchorEl, setAnchorEl] = React.useState(null);

  //   const handleChange = event => {
  //     setAuth(event.target.checked);
  //   };

  //   const handleMenu = event => {
  //     setAnchorEl(event.currentTarget);
  //   };

  //   const handleClose = () => {
  //     setAnchorEl(null);
  //   };

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
            {/* {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )} */}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
