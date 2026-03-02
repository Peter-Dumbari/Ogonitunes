import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  songs: [],
  song: [],
  related_songs: [],
  loading_song: false,
  error: null,
};

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const fetchSongs = createAsyncThunk("songs/fetchSongs", async () => {
  // Simulate an API call with a delay
  try {
    const response = await axios.get(`${BASE_URL}/song`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
});

export const getSongBySlug = createAsyncThunk(
  "songs/getSongBySlug",
  async (songSlug) => {
    // Simulate an API call to get song details by ID
    try {
      const response = await axios.get(`${BASE_URL}/song/${songSlug}`);
      return response.data;
    } catch (error) {
      console.log("error", error);
      return error.response.data;
    }
  },
);

export const uploadMusic = createAsyncThunk(
  "songs/uploadMusic",
  async (songData) => {
    // Simulate an API call to upload music
  },
);

export const downloadMusic = createAsyncThunk(
  "songs/downloadMusic",
  async (songId) => {
    // Simulate an API call to download music
  },
);

const songSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSongs.pending, (state) => {
        state.loading_song = true;
        state.error = null;
      })
      .addCase(fetchSongs.fulfilled, (state, action) => {
        state.loading_song = false;
        state.songs = action.payload.songs;
      })
      .addCase(fetchSongs.rejected, (state, action) => {
        state.loading_song = false;
        state.error = action.error.message;
      });
    builder
      .addCase(uploadMusic.pending, (state) => {
        state.loading_song = true;
        state.error = null;
      })
      .addCase(uploadMusic.fulfilled, (state, action) => {
        state.loading_song = false;
        state.songs.push(action.payload);
      })
      .addCase(uploadMusic.rejected, (state, action) => {
        state.loading_song = false;
        state.error = action.error.message;
      });
    builder
      .addCase(getSongBySlug.pending, (state) => {
        state.loading_song = true;
        state.error = null;
      })
      .addCase(getSongBySlug.fulfilled, (state, action) => {
        state.loading_song = false;
        state.song = action.payload.song;
        state.related_songs = action.payload.relatedSongs;
      })
      .addCase(getSongBySlug.rejected, (state, action) => {
        state.loading_song = false;
        state.error = action.error.message;
        state.song = null; // Clear song details on error
      });
    builder
      .addCase(downloadMusic.pending, (state) => {
        state.loading_song = true;
        state.error = null;
      })
      .addCase(downloadMusic.fulfilled, (state) => {
        state.loading_song = false;
      })
      .addCase(downloadMusic.rejected, (state, action) => {
        state.loading_song = false;
        state.error = action.error.message;
      });
  },
});

export default songSlice.reducer;
