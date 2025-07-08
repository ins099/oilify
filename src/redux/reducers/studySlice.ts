import { createSlice } from '@reduxjs/toolkit';
import { IGeneralState, IStudyState } from './interface';

const initialState: IStudyState = {
  isStudyMode: false,
};

const studySlice = createSlice({
  name: 'study',
  initialState,
  reducers: {
    setStudyMode: (state, { payload }) => {
      state.isStudyMode = payload;
    },
  },
});

export const { setStudyMode } = studySlice.actions;

export default studySlice.reducer;
