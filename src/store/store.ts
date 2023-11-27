import { configureStore } from '@reduxjs/toolkit';
import { getCharactersSlice } from './getCharactersSlice';
import { getSingleCharacterSlice } from './getSingleCharacterSlice';
import { getSingleFirstEpisodeSlice } from './getSingleFirstEpisodeSlice';

export const store = configureStore({
  reducer: {
    characters: getCharactersSlice.reducer,
    character: getSingleCharacterSlice.reducer,
    episode: getSingleFirstEpisodeSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
