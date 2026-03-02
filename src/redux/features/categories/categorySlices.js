import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import axiosInstance from "../../../../utils/axios";

const initialState = {
  genres: [],
  loading_genre: false,
  error: null,
};

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const fetchCategories = createAsyncThunk(
  "genre/fetchgenres",
  async () => {
    // Simulate an API call to fetch categories
    try {
      const response = await axios.get(`${BASE_URL}/genre/all`);
      console.log("response", response);
      return response.data;
    } catch (error) {
      console.log("error", error);
      return error.response.data;
    }
  },
);

export const createNewCategory = createAsyncThunk(
  "genre/create",
  async (categoryData) => {
    // Simulate an API call to create a new category
    try {
      const response = await axiosInstance.post(`/genre/create`, categoryData);
      console.log("response", response);
      return response.data;
    } catch (error) {
      console.error("Error creating new category:", error);
      return error.response.data;
    }
  },
);

export const updateCategory = createAsyncThunk(
  "genre/update",
  async ({ categoryId, data }) => {
    // Simulate an API call to get category details
    try {
      const response = await axiosInstance.put(`/genre/${categoryId}`, {
        data,
      });
      return response.data;
    } catch (error) {}
  },
);

export const deletCategory = createAsyncThunk(
  "genre/delete",
  async (categoryId) => {
    // Simulate an API call to delete a category
    try {
      const response = axiosInstance.delete(`/genre/${categoryId}`);
      console.log("response", response);
      return response.data;
    } catch (error) {
      console.log("error", error);
      return error.response.data;
    }
  },
);

export const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading_genre = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading_genre = false;
        state.genres = action.payload.genres;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading_genre = false;
        state.error = action.payload || "Failed to fetch categories";
      });
    builder
      .addCase(createNewCategory.pending, (state) => {
        state.loading_genre = true;
      })
      .addCase(createNewCategory.fulfilled, (state, action) => {
        state.loading_genre = false;
        state.genres.push(action.payload.genre);
      })
      .addCase(createNewCategory.rejected, (state, action) => {
        state.loading_genre = false;
        state.error = action.payload || "Failed to create category";
      });
    builder
      .addCase(deletCategory.pending, (state) => {
        state.loading_genre = true;
      })
      .addCase(deletCategory.fulfilled, (state, action) => {
        state.loading_genre = false;
      })
      .addCase(deletCategory.rejected, (state, action) => {
        state.loading_genre = false;
        state.error = action.payload || "Failed to delete category";
      });
  },
});

export default categorySlice.reducer;
