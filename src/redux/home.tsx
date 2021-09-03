import { createSlice } from "@reduxjs/toolkit";

type booleanProps = {
  payload: "cover" | "pause"
};

type axis = {
  payload: {
    axis: "x" | "y" | "z",
    value: number
  }  
};

export const homeSlice = createSlice({
  name: "home",
  initialState: {
    home: {
      x: 0,
      y: 1,
      z: 0,
      cover: true,
      pause: false,
    }
  },
  reducers: {
    setValue: (state, action:axis) => {
      state.home[action.payload.axis] = action.payload.value;
    },
    toggleValue: (state, action: booleanProps) => {
      state.home[action.payload] = !state.home.cover;
    },
  }
});

export const { setValue, toggleValue } = homeSlice.actions;

export default homeSlice.reducer;