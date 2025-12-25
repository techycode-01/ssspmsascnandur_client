import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import managementCommitteeService from "./managementCommitteeService";

/* GET ALL */
export const getManagementCommittee = createAsyncThunk(
  "managementCommittee/get-all",
  async (_, thunkAPI) => {
    try {
      return await managementCommitteeService.allManagementCommittee();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  managementCommittee: [],
  isLoading: false,
  isError: false,
};

const managementCommitteeSlice = createSlice({
  name: "managementCommittee",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getManagementCommittee.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getManagementCommittee.fulfilled, (state, action) => {
        state.isLoading = false;
        state.managementCommittee = action.payload;
      })
      .addCase(getManagementCommittee.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default managementCommitteeSlice.reducer;
