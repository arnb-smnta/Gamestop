import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    menuopen: true,
  },
  reducers: {
    togglemenu: (state) => {
      state.menuopen = !state.menuopen;
    },
  },
});

export const { togglemenu } = menuSlice.actions;
export default menuSlice.reducer;
