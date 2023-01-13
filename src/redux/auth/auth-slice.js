import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { register, logOut, logIn, fetchCurrentUser } from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const extraActions = [register, logOut, logIn, fetchCurrentUser];

const getActions = type => extraActions.map(action => action[type]);

const handlePending = state => {
  state.isLoading = true;
};

const handleError = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

const handleSuccsess = (state, { payload: { user, token } }) => {
  state.user = user;
  state.token = token;
};

const handleAnySuccess = state => {
  state.isLoading = false;
  state.error = null;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, handleSuccsess)
      .addCase(logIn.fulfilled, handleSuccsess)
      .addCase(logOut.fulfilled, state => {
        state.user.name = null;
        state.user.email = null;
      })
      .addCase(fetchCurrentUser.fulfilled.toString(), handleSuccsess)

      .addMatcher(isAnyOf(...getActions('fulfilled')), handleAnySuccess)
      .addMatcher(isAnyOf(...getActions('pending')), handlePending)
      .addMatcher(isAnyOf(...getActions('rejected')), handleError);
  },
});

export default authSlice.reducer;
