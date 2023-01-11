import { Route, Routes } from 'react-router-dom';
import { About } from 'pages/About/About';
import { Register } from 'pages/Register/Register';
import { Layout } from './Layout/Layout';
import { Login } from 'pages/Login/Login';
import { Contacts } from 'pages/Contacts/Contacts';
import { AddContact } from 'pages/AddContact/AddContact';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<About />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="contacts/add" element={<AddContact />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        {/* <Route path="contacts/:contactId" element={<EditContact />} />  */}
      </Route>
    </Routes>
  );
};
