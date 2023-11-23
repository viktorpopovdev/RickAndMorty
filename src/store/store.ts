import { configureStore } from '@reduxjs/toolkit';
import { getCharactersSlice } from './getCharactersSlice';

export const store = configureStore({
  reducer: {
    characters: getCharactersSlice.reducer,
  },
});

console.log(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
