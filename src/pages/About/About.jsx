import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Box component="main" sx={{ p: 3, mt: 8 }}>
      <h1>Phonebook</h1>
      <p>
        Simple study web app to store contacts in a cloud.{' '}
        <Link to="/register">Register</Link> your account or{' '}
        <Link to="/login">log in</Link> by using email and password, and you’ll
        get personal contacts notebook. Phone book can be accessed from any
        devices and any browsers.
      </p>
      <p>In this application I had used following framework and libraries:</p>
      <ul>
        <li>React</li>
        <li>Redux, redux-toolkit</li>
        <li>React-router-dom</li>
        <li>React-persist</li>
        <li>MUI components</li>
        <li>Formik, yup (form input and validation)</li>
        <li>Axios</li>
        <li>React-use</li>
      </ul>
    </Box>
  );
};

export default About;
