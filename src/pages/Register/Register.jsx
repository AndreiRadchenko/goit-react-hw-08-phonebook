import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { BackAppBar } from 'components/BackAppBar/BackAppBar';

const Register = () => {
  return (
    <>
      <BackAppBar />
      <RegisterForm sx={{ mt: 4 }} />
    </>
  );
};

export default Register;
