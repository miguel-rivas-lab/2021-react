import { createSlice } from "@reduxjs/toolkit";

export const setCurrentModelSlice = createSlice({
  name: "currentModel",
  initialState: {
    currentModel: {
      name: 'xwing',
      polygons: [
        {
          scale: 1,
        },
      ],
    },
  },
  reducers: {
    setCurrentModel: (state, action) => {
      state.currentModel = action.payload;
    }
  }
});

export const { setCurrentModel } = setCurrentModelSlice.actions;

export default setCurrentModelSlice.reducer;