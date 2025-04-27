import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserCart } from "@/service/userPanel";

const fetchUserCart = createAsyncThunk(
  "user/fetchUserCart",
  async (_, { rejectWithValue }) => {
    try {
      const { response, error } = await getUserCart();

      if (response) {
        return response.data;
      } else {
        return rejectWithValue(error);
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const shopCartSlice = createSlice({
  name: "shopCart",
  initialState: {
    cartItems: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserCart.fulfilled, (state, action) => {
        console.log("\n \n action payload: ", action.payload, "\n \n");
        state.loading = false;
        state.cartItems = action.payload;
      })
      .addCase(fetchUserCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default shopCartSlice.reducer;
export { fetchUserCart };
