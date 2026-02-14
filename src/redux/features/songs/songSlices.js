const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  songs: [
    {
      id: 1,
      title: "Last Last",
      artist: "Burna Boy",
      genre: "Afrobeat",
      cover: "/cover1.jpg",
      slug: "last-last-burna-boy",
      file: "/songs/lastlast.mp3",
      year: 2022,
    },
    {
      id: 2,
      title: "Rush",
      artist: "Ayra Starr",
      genre: "Afrobeat",
      cover: "/cover2.jpg",
      slug: "rush-ayra-starr",
      file: "/songs/rush.mp3",
      year: 2023,
    },
    {
      id: 4,
      title: "Last Last",
      artist: "Bera",
      cover: "/cover1.jpg",
      file: "/songs/lastlast.mp3",
      slug: "last-last-bera",
      genre: "afrobeat",
      size: "4.2MB",
      year: 2022,
    },
    {
      id: 5,
      title: "Rush",
      artist: "Bera",
      cover: "/cover2.jpg",
      file: "/songs/rush.mp3",
      slug: "rush-bera",
      genre: "pop",
      size: "3.8MB",
      year: 2023,
    },
    {
      id: 6,
      title: "Praise Him",
      artist: "Nanee",
      cover: "/cover3.jpg",
      file: "/songs/praise.mp3",
      slug: "praise-him-nanee",
      genre: "worship",
      size: "5.0MB",
      year: 2023,
    },
  ],
  loading: false,
  error: null,
};

export const fetchSongs = createAsyncThunk("songs/fetchSongs", async () => {
  // Simulate an API call with a delay
  return true;
});

export const getSongById = createAsyncThunk(
  "songs/getSongById",
  async (songId) => {
    // Simulate an API call to get song details by ID
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
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSongs.fulfilled, (state, action) => {
        state.loading = false;
        state.songs = action.payload;
      })
      .addCase(fetchSongs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    builder
      .addCase(uploadMusic.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(uploadMusic.fulfilled, (state, action) => {
        state.loading = false;
        state.songs.push(action.payload);
      })
      .addCase(uploadMusic.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    builder
      .addCase(downloadMusic.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(downloadMusic.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(downloadMusic.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default songSlice.reducer;
