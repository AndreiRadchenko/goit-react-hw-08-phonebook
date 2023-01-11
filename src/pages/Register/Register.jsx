import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { BackAppBar } from 'components/BackAppBar/BackAppBar';
export const Register = () => {
  return (
    <>
      <BackAppBar />
      <RegisterForm sx={{ mt: 4 }} />
    </>
  );
};
