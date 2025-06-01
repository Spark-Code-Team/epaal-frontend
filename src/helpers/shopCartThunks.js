import { GETUserCart, GETUserCartTotalCost } from "@/service/products";
import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchUserCart = createAsyncThunk(
  "user/fetchUserCart",
  async (_, { rejectWithValue }) => {
    try {
      const { response, error } = await GETUserCart();

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

const fetchUserTotalCost = createAsyncThunk(
  "user/fetchUserTotalCost",
  async (_, { rejectWithValue }) => {
    try {
      const { response, error } = await GETUserCartTotalCost();

      if (response) {
        return response.data.all_products_cost;
      } else {
        return rejectWithValue(error);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);


export { fetchUserCart, fetchUserTotalCost };
