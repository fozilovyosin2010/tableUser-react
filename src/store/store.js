import { configureStore } from "@reduxjs/toolkit";
import globSlice from "../reducers/globSlice";

export const store = configureStore({
  reducer: {
    slices: globSlice,
  },
});
