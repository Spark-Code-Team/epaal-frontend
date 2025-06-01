import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkOut: false,
};

const addProToCartSlice = createSlice({
  name: "cart",
  initialState,
});
export default addProToCartSlice.reducer;
