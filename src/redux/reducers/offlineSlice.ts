import { createSlice } from '@reduxjs/toolkit';
import { IOfflineState, SubjectItem } from './interface';
import { DEMO_VIDEO } from '../../utils/constants';

const initialState: IOfflineState = {
  items: [
    {
      id: "id",
      title: "Subject Name Flight Switches",
      topics: [{
        id: "topicid",
        questions: [
          {
            id: "questionId",
            question: 'What are the power switches for the engine one and two?',
            materials: [
              {
                id: "1",
                type: 'image',
                url: "https://unsplash.com/photos/LNRyGwIJr5c",
              },
              {
                id: "2",
                type: 'video',
                url: DEMO_VIDEO,
              },
              {
                id: "3",
                type: 'image',
                url: "https://unsplash.com/photos/LNRyGwIJr5c",
              },
            ]
          }
        ],
        label: 'Topic Label',
        description: 'Topic Description'
      }]
    }
  ]
};

const offlineSlice = createSlice({
  name: 'offline',
  initialState,
  reducers: {
    addToOffline: (state, actions) => {
      state.items = [...state.items, actions.payload]
    }
  },
});

export const { addToOffline } = offlineSlice.actions;

export default offlineSlice.reducer;
