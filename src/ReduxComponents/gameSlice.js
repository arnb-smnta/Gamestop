import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "game",
  initialState: {
    games: null,
    gamepage: null,
  },
  reducers: {
    updategames: (state, action) => {
      state.games = action.payload;
    },
    updategamepage: (state, action) => {
      state.gamepage = action.payload;
    },
  },
});

export const { updategames, updategamepage } = gameSlice.actions;
export default gameSlice.reducer;
