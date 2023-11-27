import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

export const fetchCharacters = createAsyncThunk('characters/fetchCharacters', async (url: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      // console.log('error message: ', error.message);
      return error.message;
    } else {
      // console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
});

export const fetchMultipleEpisode = createAsyncThunk('episode/fetchFirstEpisode', async (ids: string) => {
  console.log('fetchMul');
  try {
    const response = await axios.get(`https://rickandmortyapi.com/api/episode/${ids}`);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      // console.log('error message: ', error.message);
      return error.message;
    } else {
      // console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
});

interface Info {
  count?: number;
  pages: number;
  next?: string;
  prev?: string;
}

interface Result {
  id: number;
  name: string;
  status: string;
  species: string;

  location: {
    name: string;
    url?: string;
  };
  image: string;
  episode: string[];
}

export interface Character {
  info: Info;
  results: Result[];
}

interface Episode {
  id: number;
  name: string | undefined;
}

interface CharacterState {
  characters: Character;
  currentPage: number;
  episodes: Episode[];
  loading: boolean;
  error: string | null;
}

const initialState: CharacterState = {
  characters: {
    info: {
      pages: 0,
    },
    results: [],
  },
  currentPage: 1,
  episodes: [],
  loading: false,
  error: null,
};

export const getCharactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload);
        state.characters = action.payload;
        state.characters.info.pages = action.payload.info.pages;
        state.error = null;
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      })
      .addCase(fetchMultipleEpisode.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMultipleEpisode.fulfilled, (state, action) => {
        state.loading = false;
        state.episodes = action.payload;
        state.error = null;
      })
      .addCase(fetchMultipleEpisode.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export const { setCurrentPage } = getCharactersSlice.actions;
