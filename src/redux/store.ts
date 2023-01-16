import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import listCardsSlice from './listCardsSlice';

export const store = configureStore({
  reducer: {
    listCardsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
