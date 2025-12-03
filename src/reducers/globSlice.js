import { createSlice } from "@reduxjs/toolkit";

export const globSlice = createSlice({
  name: "globalSlice",
  initialState: {
    darkMode: localStorage.theme == "dark" || false,
    status: "",
    city: "",
    editMod: false,
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
    setEditModal: (state, action) => {
      state.editMod = action.payload;
    },
  },
});

export default globSlice.reducer;

export const { setDarkMode, setValue, setEditModal } = globSlice.actions;
