import Container from '@mui/material/Container';
import { Outlet } from 'react-router-dom';
import { Copyright } from 'components/Copyright/Copyright';

export const Layout = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Container component="main" maxWidth="xl">
        <Outlet />
      </Container>
      <Copyright sx={{ mt: 'auto', mb: 2 }} />
    </div>
  );
};
