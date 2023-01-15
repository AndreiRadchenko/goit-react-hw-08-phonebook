import { useAuth } from 'hooks/useAuth';
import { useState, useEffect } from 'react';
import { resetAuthError } from 'redux/auth/auth-slice';
import { useDispatch } from 'react-redux';
import { usePrevious } from 'react-use';

export const useShowToast = currentPage => {
  const { user, error } = useAuth();
  const dispatch = useDispatch();
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [toastText, setToastText] = useState('');
  const [toastSeverity, setToastSeverity] = useState('error');
  const prevUserName = usePrevious(user?.name);

  const hideToast = () => setIsToastVisible(false);

  useEffect(() => {
    if (currentPage === '') {
      return;
    }
    const messages = {
      register: {
        error: "Sorry, can't register user with this credentials!",
        success: `User ${user?.name} has been registered`,
      },
      login: {
        error: 'Login failed, please try again',
        success: `User ${user?.name} has logged in`,
      },
      addContact: {
        error: `Contacts name is being used`,
        success: `New contact has been added`,
      },
    };

    if (error !== null) {
      setIsToastVisible(true);
      setToastSeverity('error');
      setToastText(messages[currentPage]?.error);
      dispatch(resetAuthError());
    } else if (prevUserName === null && user?.name !== null) {
      setIsToastVisible(true);
      setToastSeverity('success');
      setToastText(messages[currentPage]?.success);
    }
  }, [error, user, dispatch, prevUserName, currentPage]);

  return { isToastVisible, hideToast, toastSeverity, toastText };
};
