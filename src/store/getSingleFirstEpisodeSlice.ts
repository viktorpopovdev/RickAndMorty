import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

export const fetchSingleFirstEpisode = createAsyncThunk(
  'episodeSingle/fetchSingleFirstEpisode',
  async (url: string) => {
    try {
      const response = await axios.get(url);
      console.log(response.data);
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
  },
);

interface Episode {
  id: number;
  name: string;
}

interface EpisodeState {
  episode: Episode;
  loading: boolean;
  error: string | null;
}

const initialState: EpisodeState = {
  episode: {
    id: 0,
    name: '',
  },
  loading: false,
  error: null,
};

export const getSingleFirstEpisodeSlice = createSlice({
  name: 'episode',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleFirstEpisode.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSingleFirstEpisode.fulfilled, (state, action) => {
        state.loading = false;
        state.episode = action.payload;
        state.error = null;
      })
      .addCase(fetchSingleFirstEpisode.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});
