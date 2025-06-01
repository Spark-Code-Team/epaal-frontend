import { userRole } from "@/service/login";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  first_name: "",
  last_name: "",
  phone_number: "",
  role: "",
  loading: false,
  error: "",
};

const fetchRole = createAsyncThunk("role/fetchRole", () => {
  return userRole();
});

const roleSlice = createSlice({
  name: "role",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchRole.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchRole.fulfilled, (state, action) => {
      state.loading = false;
      state.role = action.payload.response.data.role.name;
      state.id = action.payload.response.data.id;
      state.first_name = action.payload.response.data.first_name;
      state.last_name = action.payload.response.data.last_name;
      state.phone_number = action.payload.response.data.phone_number;
      state.error = "";
    });

    builder.addCase(fetchRole.rejected, (state, action) => {
      state.loading = false;
      state.role = "";
      state.id = "";
      state.first_name = "";
      state.last_name = "";
      state.phone_number = "";
      state.error = action.error.message;
    });
  },
});

export default roleSlice.reducer;
export { fetchRole };
