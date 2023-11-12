import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice";
const appstore = configureStore({
  reducer: {
    menu: menuReducer,
  },
});

export default appstore;
