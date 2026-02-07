import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [
    "Worship",
    "Mixtape",
    "Jiration",
    "Tradition",
    "Praise",
    "Gospel",
    "Afrobeat",
  ],
  loading: false,
  error: null,
};

export const fetchCategories = createAsyncThunk(async () => {
  // Simulate an API call to fetch categories
});

export const createNewCategory = createAsyncThunk(async (categoryData) => {
  // Simulate an API call to create a new category
});

export const getCategoryDetails = createAsyncThunk(async (categoryId) => {
  // Simulate an API call to get category details
});

export const deletCategory = createAsyncThunk(async (categoryId) => {
  // Simulate an API call to delete a category
});

export const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default categorySlice.reducer;
