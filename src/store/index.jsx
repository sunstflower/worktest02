import { configureStore } from '@reduxjs/toolkit';
import pageReducer from './pageSlice';
import canvasReducer from './canvasSlice';

export const store = configureStore({
  reducer: {
    pages: pageReducer,
    canvas: canvasReducer,
  }
});