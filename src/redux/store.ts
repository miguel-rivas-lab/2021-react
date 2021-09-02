import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme";
import panelVisibilityReducer from "./panel";
import usersReducer from "./users";

export default configureStore({
  reducer: {
    theme: themeReducer,
    panelVisibility: panelVisibilityReducer,
    users: usersReducer,
  }
});