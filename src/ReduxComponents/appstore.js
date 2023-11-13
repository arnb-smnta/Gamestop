import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice";
import gameReducer from "./gameSlice";
const appstore = configureStore({
  reducer: {
    menu: menuReducer,
    game: gameReducer,
  },
});

export default appstore;
