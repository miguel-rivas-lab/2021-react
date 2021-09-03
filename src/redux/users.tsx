import { createSlice } from "@reduxjs/toolkit";
import {users} from '../modules/db.js';

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: users
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    }
  }
});

export const { setUsers } = usersSlice.actions;

export default usersSlice.reducer;