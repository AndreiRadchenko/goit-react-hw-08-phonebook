import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { selectIsLoading } from 'redux/contacts/contacts-selectors';

export const useShowLoader = () => {
  const isLoading = useSelector(selectIsLoading);
  const [isLoaderVisible, setIsLoaderVisible] = useState(false);

  const showLoader = () => {
    setIsLoaderVisible(true);
  };

  const hideLoader = () => {
    setIsLoaderVisible(false);
  };

  const toggleLoader = () => {
    setIsLoaderVisible(isLoaderVisible => !isLoaderVisible);
  };

  useEffect(() => {
    if (!isLoading) {
      setIsLoaderVisible(false);
    }
  }, [isLoading]);

  return { isLoaderVisible, showLoader, hideLoader, toggleLoader };
};
