import { createSlice } from "@reduxjs/toolkit";

export const universeSlice = createSlice({
  name: "universe",
  initialState: {
    universe: false
  },
  reducers: {
    toggleUniverse: (state) => {
      state.universe = !state.universe;
    },
    setUniverse: (state, action) => {
      state.universe = action.payload;
    }
  }
});

export const { toggleUniverse, setUniverse } = universeSlice.actions;

export default universeSlice.reducer;
