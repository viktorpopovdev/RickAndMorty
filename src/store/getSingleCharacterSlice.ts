import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

export const fetchSingleCharacter = createAsyncThunk('character/fetchSingleCharacter', async (id: string) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  try {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
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

interface CharacterDetails {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  image: string;
  episode: string[];
}

interface State {
  character: CharacterDetails;
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  character: {
    id: 0,
    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
    origin: {
      name: '',
    },
    location: {
      name: '',
    },
    image: '',
    episode: [],
  },

  loading: false,
  error: null,
};

export const getSingleCharacterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleCharacter.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSingleCharacter.fulfilled, (state, action) => {
        state.loading = false;
        state.character = action.payload;
        state.error = null;
      })
      .addCase(fetchSingleCharacter.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});
