import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import academicCalendarService from "./academicCalendarService";

/* ================= THUNK ================= */
export const getAcademicCalendar = createAsyncThunk(
  "academicCalendar/get-all",
  async (_, thunkAPI) => {
    try {
      return await academicCalendarService.allAcademicCalendar();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

/* ================= STATE ================= */
const initialState = {
  academicCalendar: [],
  isLoading: false,
  isError: false,
};

/* ================= SLICE ================= */
const academicCalendarSlice = createSlice({
  name: "academicCalendar",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAcademicCalendar.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAcademicCalendar.fulfilled, (state, action) => {
        state.isLoading = false;
        state.academicCalendar = action.payload;
      })
      .addCase(getAcademicCalendar.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default academicCalendarSlice.reducer;
