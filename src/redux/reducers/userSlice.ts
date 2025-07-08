import { createSlice } from '@reduxjs/toolkit';
import { IUserState } from './interface';

const initialState: IUserState = {
  isGuest: false,
  isPremium: false,
  firstName: null,
  lastName: null,
  photo: null,
  email: null,
  loginType: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setGuest: (state, { payload }) => {
      state.isGuest = payload;
    },
    setUserPremiumStatus: (state, { payload }) => {
      state.isPremium = payload;
    },
    setUserData: (state, { payload }) => {
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
      state.photo = payload.photo;
      state.email = payload.email;
      state.loginType = payload.loginType
    },
  },
});

export const { setGuest, setUserData, setUserPremiumStatus } = userSlice.actions;

export default userSlice.reducer;
