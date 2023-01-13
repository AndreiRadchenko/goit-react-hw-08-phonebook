export const selectUser = ({ auth }) => auth.user;

export const selectToken = ({ auth }) => auth.token;

export const selectIsLoggedIn = ({ auth }) => auth.isLoggedIn;

export const selectIsLoading = ({ auth }) => {
  //   console.log(`selectIsLoading state: ${state.auth.isLoading}`);
  return auth.isLoading;
};

export const selectError = ({ auth }) => auth.error;
