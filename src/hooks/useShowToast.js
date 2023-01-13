import { useAuth } from 'hooks/useAuth';
import { useState, useEffect } from 'react';

export const useShowToast = currentPage => {
  const { user, error, isLoading } = useAuth();
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [toastText, setToastText] = useState('');
  const [toastSeverity, setToastSeverity] = useState('error');

  const hideToast = () => setIsToastVisible(false);

  useEffect(() => {
    const messages = {
      register: {
        error: "Sorry, can't register user with this credentials!",
        success: `User ${user.name} has been registered`,
      },
    };

    if (error !== null) {
      setIsToastVisible(true);
      setToastSeverity('error');
      setToastText(messages[currentPage].error);
    } else if (user.name !== null) {
      setIsToastVisible(true);
      setToastSeverity('success');
      setToastText(messages[currentPage].success);
    }
  }, [isLoading, error, user, currentPage]);

  return { isToastVisible, hideToast, toastSeverity, toastText };
};
