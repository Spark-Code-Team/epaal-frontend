import { fetchUserCart } from "@/helpers/shopCartThunks";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkOut: false,
  userCart: [],
  userTotalCost: 0,
  loading: false,
  error: null,
};

const shopCartSlice = createSlice({
  name: "shopCart",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchUserCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserCart.fulfilled, (state, action) => {
        console.log("\n \n action payload: ", action.payload, "\n \n");
        state.loading = false;
        state.userCart = action.payload.data;
        state.total = action.payload.data.reduce(
          (sum, item) => sum + item.quantity,
          0,
        );
        state.selectedItems = action.payload.data.map((item) => ({
          product_instance: item.product_instance,
          quantity: item.quantity,
        }));
      })
      .addCase(fetchUserCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default shopCartSlice.reducer;
