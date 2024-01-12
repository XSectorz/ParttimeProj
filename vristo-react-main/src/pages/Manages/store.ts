// In a file named store.ts
import { configureStore } from '@reduxjs/toolkit';
import photoReducer from './photoSlice';

const store = configureStore({
  reducer: {
    photo: photoReducer,
  },
});

export default store;
