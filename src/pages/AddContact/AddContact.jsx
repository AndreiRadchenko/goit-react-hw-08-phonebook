import { AddContactForm } from 'components/AddContactForm/AddContactForm';
import { BackAppBar } from 'components/BackAppBar/BackAppBar';

export const AddContact = () => {
  return (
    <>
      <BackAppBar />
      <AddContactForm sx={{ mt: 4 }} />
    </>
  );
};
