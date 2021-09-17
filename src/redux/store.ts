import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme";
import panelVisibilityReducer from "./panel";
import usersReducer from "./users";
import homeReducer from "./home";
import universeReducer from "./universe";

export default configureStore({
  reducer: {
    theme: themeReducer,
    panelVisibility: panelVisibilityReducer,
    users: usersReducer,
    home: homeReducer,
    universe: universeReducer,
  }
});