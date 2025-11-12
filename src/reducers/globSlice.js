import { createSlice } from "@reduxjs/toolkit";

export const globSlice = createSlice({
  name: "globalSlice",
  initialState: {
    darkMode: localStorage.theme == "dark" || false,
    status: "",
    city: "",
  },
  reducers: {
    setDarkMode: (state, action) => {
      state.darkMode = action.payload;
    },
    setValue: (state, action) => {
      if (action.payload[1] == "status") {
        state.status = action.payload[0];
      } else {
        state.city = action.payload[0];
      }
    },
  },
});

export default globSlice.reducer;

export const { setDarkMode, setValue } = globSlice.actions;
