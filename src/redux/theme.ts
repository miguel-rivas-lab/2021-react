import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: false
  },
  reducers: {
    toggleTheme: (state) => {
      state.theme = !state.theme;
    },
    setTheme: (state, action) => {
      state.theme += action.payload;
    }
  }
});

export const { toggleTheme, setTheme } = themeSlice.actions;

export default themeSlice.reducer;
