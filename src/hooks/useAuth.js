import { useSelector } from 'react-redux';
import {
  selectUser,
  selectToken,
  selectIsLoggedIn,
  selectIsLoading,
  selectError,
} from 'redux/auth/auth-selectors';

export const useAuth = () => {
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return {
    user,
    token,
    isLoggedIn,
    isLoading,
    error,
  };
};
