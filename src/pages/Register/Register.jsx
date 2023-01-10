import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { RegisterAppBar } from './RegisterAppBar';
export const Register = () => {
  return (
    <>
      <RegisterAppBar />
      <RegisterForm sx={{ mt: 4 }} />
    </>
  );
};
