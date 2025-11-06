import { createSlice } from "@reduxjs/toolkit";

export const globSlice = createSlice({
  name: "globalSlice",
  initialState: {
    darkMode: localStorage.theme == "dark" || false,
  },
  reducers: {
    setDarkMode: (state, action) => {
      state.darkMode = action.payload;
    },
  },
});

export default globSlice.reducer;

export const { setDarkMode } = globSlice.actions;
