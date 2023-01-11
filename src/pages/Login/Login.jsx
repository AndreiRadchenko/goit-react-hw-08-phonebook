import { LoginForm } from 'components/LoginForm/LoginForm';
import { BackAppBar } from 'components/BackAppBar/BackAppBar';
export const Login = () => {
  return (
    <>
      <BackAppBar />
      <LoginForm sx={{ mt: 4 }} />
    </>
  );
};
