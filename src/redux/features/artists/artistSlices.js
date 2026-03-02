import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import axiosInstance from "../../../../utils/axios";

const initialState = {
  artists: [],
  artist: null,
  loading: false,
  error: null,
};

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const fetchArtists = createAsyncThunk(
  "artists/fetchArtists",
  async () => {
    try {
      const res = await axios.get(`${BASE_URL}/artist/all`);
      return res.data;
    } catch (error) {
      console.log("error", error);
      return error.response.data;
    }
  },
);

export const getArtistDetails = createAsyncThunk(
  "artists/getArtistDetails",
  async (artistId) => {
    try {
      const response = await axios.get(`${BASE_URL}/artist/${artistId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching artist details:", error);
      return error.response.data;
    }
  },
);

export const createNewArtist = createAsyncThunk(
  "artists/createNewArtist",
  async (artistData) => {
    try {
      const response = await axiosInstance.post(`/artist/register`, artistData);
      console.log("response", response);
      return response.data;
    } catch (error) {
      console.error("Error creating new artist:", error);
      return error.response.data;
    }
  },
);

export const deleteArtist = createAsyncThunk(
  "artists/deleteArtist",
  async (artistId) => {
    try {
      const response = await axiosInstance.delete(`/artist/${artistId}`);
      console.log("response", response);
      return response.data;
    } catch (error) {
      console.error("Error deleting artist:", error);
      return error.response.data;
    }
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
        state.artists = action.payload.artists;
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
        state.artist = action.payload;
        // Update the specific artist details in the state
      })
      .addCase(getArtistDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.artist = null; // Clear artist details on error
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
