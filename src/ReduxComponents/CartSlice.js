import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addtocart: (state, action) => {
      state.items.push(action.payload);
    },
    removesingleeleement: (state, action) => {},
    removeallitem: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addtocart, removesingleeleement, removeallitem } =
  CartSlice.actions;

export default CartSlice.reducer;
