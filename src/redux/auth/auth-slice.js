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

// const handleError = (state, action) => {
//   state.error = action.payload;
//   state.isLoading = false;
// };

const handleSuccess = (state, { payload: { user, token } }) => {
  state.user = user;
  state.token = token;
  state.isLoggedIn = true;
};

const handleAnySuccess = state => {
  state.isLoading = false;
  state.error = null;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetAuthError(state, action) {
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, handleSuccess)
      .addCase(logIn.fulfilled, handleSuccess)
      .addCase(logOut.fulfilled, state => {
        state.user.name = null;
        state.user.email = null;
        state.isLoggedIn = false;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
      })

      .addCase(logIn.rejected, (state, { payload }) => {
        state.error = 'Login failed, please try again';
        state.isLoading = false;
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.error = "Sorry, can't register user with this credentials!";
        state.isLoading = false;
      })
      .addCase(logOut.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(fetchCurrentUser.rejected, (state, { payload }) => {
        state.error = '';
        state.isLoading = false;
      })

      .addMatcher(isAnyOf(...getActions('fulfilled')), handleAnySuccess)
      .addMatcher(isAnyOf(...getActions('pending')), handlePending);
    // .addMatcher(isAnyOf(...getActions('rejected')), handleError);
  },
});

export const { resetAuthError } = authSlice.actions;
export default authSlice.reducer;
