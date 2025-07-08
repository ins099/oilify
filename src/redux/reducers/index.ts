import { combineReducers } from '@reduxjs/toolkit';
import { authApis } from '../apis/auth';
import generalSlice from './generalSlice';
import studySlice from './studySlice';
import userSlice from './userSlice';
import offlineSlice from './offlineSlice';

export const allReducers = combineReducers({
  generalSlice,
  studySlice,
  userSlice,
  offlineSlice,
  [authApis.reducerPath]: authApis.reducer,
});
