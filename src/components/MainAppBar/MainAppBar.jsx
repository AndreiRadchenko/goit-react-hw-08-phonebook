import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Container } from '@mui/material';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

const userMenu = [
  { menuItem: 'Contacts', destination: 'contacts' },
  { menuItem: 'About', destination: '/' },
  { menuItem: 'Register', destination: 'register' },
  { menuItem: 'Log in', destination: 'login' },
];

export function MainAppBar(props) {
  const { isLoggedIn } = useAuth();
  const location = useLocation();
  const dispatch = useDispatch();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState);
  };

  const handleLogOut = () => {
    dispatch(logOut())
      .unwrap()
      .then(() => {
        navigate('/');
      })
      .catch(e => console.log(e));
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Phonebook
      </Typography>
      <Divider />
      <List>
        {userMenu.map(({ menuItem, destination }) => (
          <ListItem key={menuItem} disablePadding>
            <ListItemButton
              sx={{ textAlign: 'left' }}
              component={RouterLink}
              to={destination}
              state={{ from: location }}
            >
              <ListItemText primary={menuItem} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem key={'logout'} disablePadding>
          <ListItemButton sx={{ textAlign: 'left' }} onClick={handleLogOut}>
            <ListItemText primary="Log out" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', mw: 'lg' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Container maxWidth="xl">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { sm: 'block' } }}
            >
              Phonebook
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {userMenu.map(({ menuItem, destination }) => (
                <Button
                  key={menuItem}
                  component={RouterLink}
                  to={destination}
                  state={{ from: location }}
                  sx={{ color: '#fff' }}
                >
                  {menuItem}
                </Button>
              ))}
              <Button
                key={'logout'}
                sx={{ color: '#fff' }}
                onClick={handleLogOut}
              >
                Log out
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

MainAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
