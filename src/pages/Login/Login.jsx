import { LoginForm } from 'components/LoginForm/LoginForm';
import { RegisterAppBar } from 'pages/Register/RegisterAppBar';
export const Login = () => {
  return (
    <>
      <RegisterAppBar />
      <LoginForm sx={{ mt: 4 }} />
    </>
  );
};
