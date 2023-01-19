import { useAuth } from 'hooks/useAuth';
import { useState, useEffect } from 'react';
import { resetAuthError } from 'redux/auth/auth-slice';
import { useDispatch, useSelector } from 'react-redux';
// import { usePrevious } from 'react-use';
import { selectError } from 'redux/contacts/contacts-selectors';
import { resetContactError } from 'redux/contacts';

export const useShowToast = currentPage => {
  const addContactError = useSelector(selectError);
  const { error: authError } = useAuth();
  const dispatch = useDispatch();
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [toastText, setToastText] = useState('');
  const [toastSeverity, setToastSeverity] = useState('error');
  // const prevUserName = usePrevious(user?.name);

  const hideToast = () => setIsToastVisible(false);

  useEffect(() => {
    if (addContactError !== null) {
      setIsToastVisible(true);
      setToastSeverity('error');
      setToastText(addContactError);
      dispatch(resetContactError());
      return;
    }
    if (authError !== null) {
      if (authError === '') {
        return;
      }
      setIsToastVisible(true);
      setToastSeverity('error');
      setToastText(authError);
      dispatch(resetAuthError());
      return;
    }
  }, [authError, dispatch, addContactError]);

  return { isToastVisible, hideToast, toastSeverity, toastText };
};
