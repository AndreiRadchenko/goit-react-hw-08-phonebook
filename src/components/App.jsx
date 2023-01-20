import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from 'redux/auth';
import { PrivateRoute } from 'components/PrivateRoute';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { lazy } from 'react';

// const Home = lazy(() => import('../pages/Home/Home'));
import Layout from './Layout/Layout';

// import About from 'pages/About/About';
// import Register from 'pages/Register/Register';
// import Login from 'pages/Login/Login';
// import Contacts from 'pages/Contacts/Contacts';
// import AddContact from 'pages/AddContact/AddContact';

const About = lazy(() => import('pages/About/About'));
const Register = lazy(() => import('pages/Register/Register'));
const Login = lazy(() => import('pages/Login/Login'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const AddContact = lazy(() => import('pages/AddContact/AddContact'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser())
      .unwrap()
      .then(() => {})
      .catch(e => {});
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<About />} />
        <Route
          path="contacts"
          element={<PrivateRoute redirectTo="/" component={<Contacts />} />}
        />
        <Route
          path="contacts/add"
          element={<PrivateRoute redirectTo="/" component={<AddContact />} />}
        />
        <Route
          path="register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
      </Route>
    </Routes>
  );
};
