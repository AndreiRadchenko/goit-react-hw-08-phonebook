import { Route, Routes } from 'react-router-dom';
import { HomePage } from 'pages/Home/Home';
import { Register } from 'pages/Register/Register';
import { Layout } from './Layout/Layout';
import { Login } from 'pages/Login/Login';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        {/* <Route path="contacts" element={<Contacts />} />
      <Route path="contacts/:contactId" element={<EditContact />} /> */}
      </Route>
    </Routes>
  );
};
