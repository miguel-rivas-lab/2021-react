import { createSlice } from "@reduxjs/toolkit";

export const panelVisibilitySlice = createSlice({
  name: "panelVisibility",
  initialState: {
    panelVisibility: true,
  },
  reducers: {
    togglePanelVisibility: (state) => {
      state.panelVisibility = !state.panelVisibility;
    },
    setPanelVisibility: (state, action) => {
      state.panelVisibility = action.payload;
    }
  }
});

export const { togglePanelVisibility, setPanelVisibility } = panelVisibilitySlice.actions;

export default panelVisibilitySlice.reducer;
