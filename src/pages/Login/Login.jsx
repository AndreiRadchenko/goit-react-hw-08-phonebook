import { LoginForm } from 'components/LoginForm/LoginForm';
import { BackAppBar } from 'components/BackAppBar/BackAppBar';

const Login = () => {
  return (
    <>
      <BackAppBar />
      <LoginForm sx={{ mt: 4 }} />
    </>
  );
};

export default Login;
