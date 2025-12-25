import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import collegeDevelopmentCommitteeService from "./collegeDevelopmentCommitteeService";

/* GET ALL */
export const getCollegeDevelopmentCommittee = createAsyncThunk(
  "collegeDevelopmentCommittee/get-all",
  async (_, thunkAPI) => {
    try {
      return await collegeDevelopmentCommitteeService.allCollegeDevelopmentCommittee();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  collegeDevelopmentCommittee: [],
  isLoading: false,
  isError: false,
};

const collegeDevelopmentCommitteeSlice = createSlice({
  name: "collegeDevelopmentCommittee",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCollegeDevelopmentCommittee.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCollegeDevelopmentCommittee.fulfilled, (state, action) => {
        state.isLoading = false;
        state.collegeDevelopmentCommittee = action.payload;
      })
      .addCase(getCollegeDevelopmentCommittee.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default collegeDevelopmentCommitteeSlice.reducer;
