import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import syllabusService from "./syllabusService";

/* ================= GET ALL ================= */
export const getSyllabus = createAsyncThunk(
  "syllabus/get-all",
  async (_, thunkAPI) => {
    try {
      return await syllabusService.allSyllabus();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

/* ================= STATE ================= */
const initialState = {
  syllabus: [],
  isLoading: false,
  isError: false,
};

/* ================= SLICE ================= */
const syllabusSlice = createSlice({
  name: "syllabus",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSyllabus.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSyllabus.fulfilled, (state, action) => {
        state.isLoading = false;
        state.syllabus = action.payload;
      })
      .addCase(getSyllabus.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default syllabusSlice.reducer;
