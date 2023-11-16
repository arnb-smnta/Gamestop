import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice";
import gameReducer from "./gameSlice";
import CartReducer from "./CartSlice";
const appstore = configureStore({
  reducer: {
    menu: menuReducer,
    game: gameReducer,
    cart: CartReducer,
  },
});

export default appstore;
