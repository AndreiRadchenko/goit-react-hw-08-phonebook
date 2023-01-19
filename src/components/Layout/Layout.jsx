import Container from '@mui/material/Container';
import { Toast } from 'components/Toast/Toast';
import { Outlet } from 'react-router-dom';
import { Copyright } from 'components/Copyright/Copyright';
import { MainAppBar } from 'components/MainAppBar/MainAppBar';
import { useShowToast } from 'hooks/useShowToast';
import { useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

export const Layout = () => {
  const location = useLocation();
  const linkForm = location.state?.form ?? '';

  // console.log(linkForm);

  const { isToastVisible, hideToast, toastSeverity, toastText } =
    useShowToast(linkForm);

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
        <Toast
          open={isToastVisible}
          onClose={hideToast}
          toastText={toastText}
          severity={toastSeverity}
        />
        <Toaster position="top-right" />
        <MainAppBar />
        <Outlet />
      </Container>
      <Copyright sx={{ mt: 'auto', mb: 2 }} />
    </div>
  );
};
