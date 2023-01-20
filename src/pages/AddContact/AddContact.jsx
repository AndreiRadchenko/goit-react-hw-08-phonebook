import { AddContactForm } from 'components/AddContactForm/AddContactForm';
import { BackAppBar } from 'components/BackAppBar/BackAppBar';

const AddContact = () => {
  return (
    <>
      <BackAppBar />
      <AddContactForm sx={{ mt: 4 }} />
    </>
  );
};

export default AddContact;
