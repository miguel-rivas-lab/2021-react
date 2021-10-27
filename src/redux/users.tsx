import { createSlice } from "@reduxjs/toolkit";
import {users} from '../db/users';

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