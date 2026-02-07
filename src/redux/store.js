import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice.js";
import songReducer from "./features/songs/songSlices.js";
import artistReducer from "./features/artists/artistSlices.js";
import categoryReducer from "./features/categories/categorySlices.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
    songs: songReducer,
    artists: artistReducer,
    categories: categoryReducer,
  },
});

export default store;
