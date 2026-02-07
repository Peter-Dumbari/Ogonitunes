import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  artists: [
    {
      id: 1,
      name: "Bera",
      image: "/artists/me.png",
    },
    {
      id: 2,
      name: "Nanee",
      image: "/artists/me.png",
    },
    {
      id: 3,
      name: "Zina",
      image: "/artists/me.png",
    },
    {
      id: 4,
      name: "Prince K",
      image: "/artists/me.png",
    },
  ],
  loading: false,
  error: null,
};

export const fetchArtists = createAsyncThunk(
  "artists/fetchArtists",
  async () => {},
);

export const getArtistDetails = createAsyncThunk(
  "artists/getArtistDetails",
  async (artistId) => {
    // Simulate an API call to get artist details
  },
);

export const createNewArtist = createAsyncThunk(
  "artists/createNewArtist",
  async (artistData) => {
    // Simulate an API call to create a new artist
  },
);

export const deleteArtist = createAsyncThunk(
  "artists/deleteArtist",
  async (artistId) => {
    // Simulate an API call to delete an artist
  },
);

const artistSlice = createSlice({
  name: "artists",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArtists.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchArtists.fulfilled, (state, action) => {
        state.loading = false;
        state.artists = action.payload;
      })
      .addCase(fetchArtists.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    builder
      .addCase(getArtistDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getArtistDetails.fulfilled, (state, action) => {
        state.loading = false;
        // Update the specific artist details in the state
      })
      .addCase(getArtistDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    builder
      .addCase(createNewArtist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createNewArtist.fulfilled, (state, action) => {
        state.loading = false;
        state.artists.push(action.payload);
      })
      .addCase(createNewArtist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    builder
      .addCase(deleteArtist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteArtist.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(deleteArtist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default artistSlice.reducer;
