import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice.js";
import songReducer from "./features/songs/songSlices.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
    song: songReducer,
  },
});

export default store;
