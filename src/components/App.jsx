import { Route, Routes } from 'react-router-dom';
import { HomePage } from 'pages/Home/Home';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="contacts/:contactId" element={<EditContact />} /> */}
    </Routes>
  );
};
