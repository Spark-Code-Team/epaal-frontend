// src/redux/features/status/statusSlice.js  (ESM)

import { userFacility } from "@/service/userPanel";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  user_name: "",
  status: "",
  level: "",
  level_number: "",
  given_value: "",
  created_at: "",
  facility: 0,       // اگر آبجکت می‌خواهی: {}
  loading: false,
  error: "",
};

export const fetchStatus = createAsyncThunk(
  "status/fetchStatus",
  async (_, { rejectWithValue }) => {
    try {
      const res = await userFacility();

      // اگر سرویس‌ت این شکلی برمی‌گرداند: { response } یا { error }
      const maybeAxios = res?.response ?? res;

      // axios response → data لایه‌ی اول
      const topData = maybeAxios?.data;

      // طبق لاگ تو: دیتا داخل data.data است
      const real = topData?.data ?? topData;

      if (!real) throw new Error("Malformed response: missing data");

      // 🔹 payload ما دقیقا آبجکت نهایی است (id, user_name, ...)
      return real;
    } catch (err) {
      return rejectWithValue(
        err?.response?.data || err?.message || "Request failed"
      );
    }
  }
);

const statusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStatus.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchStatus.fulfilled, (state, { payload }) => {
        state.loading = false;

        // حالا payload همون شیء داخل data.data ست
        state.id = payload?.id ?? "";
        state.user_name = payload?.user_name ?? "";
        state.status = payload?.status ?? "";
        state.level = payload?.level ?? "";
        state.level_number = payload?.level_number ?? "";
        state.given_value = payload?.given_value ?? "";
        state.created_at = payload?.created_at ?? "";
        state.facility = payload?.facility ?? 0; // یا {}

        state.error = "";
      })
      .addCase(fetchStatus.rejected, (state, { payload, error }) => {
        state.loading = false;
        state.error =
          (typeof payload === "string" ? payload : null) ||
          error?.message ||
          "Failed to fetch status";
      });
  },
});

export default statusSlice.reducer;
