import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import programmeService from "./programmeService";

export const getProgThunk = createAsyncThunk(
    "program/get-all",
    async (thunkAPI) => {
      try {
        return await programmeService.allProgrammes();
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

export const getSingleProgramme = createAsyncThunk(
    "programme/single-programme",
    async (id, thunkApi) => {
      try {
        return await programmeService.singleProgrammes(id);
      } catch (error) {
        return thunkApi.rejectWithValue(error);
      }
    }
);

export const resetState = createAction("Reset_all");

const initialState = {
    programmes: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const programmeSlice = createSlice({
    name: "programmes",
    initialState: initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder
        .addCase(getProgThunk.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getProgThunk.fulfilled, (state, action) => {
            state.isError = false;
            state.isLoading = false;
            state.isSuccess = true;
            state.programme = action.payload;
        })
        .addCase(getProgThunk.rejected,(state, action) => {
            state.message = action.error;
            state.isError = true;
        })
        .addCase(getSingleProgramme.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getSingleProgramme.fulfilled, (state, action) => {
            state.isSuccess = true;
            state.progImages = action?.payload?.images;
            state.progHeading = action?.payload?.heading;
            state.progContent = action?.payload?.content;
            state.progDate = action?.payload?.date;
            state.progMonth = action?.payload?.month;
            state.progAddress = action?.payload?.address;
        })
        .addCase(getSingleProgramme.rejected, (state, action) => {
            state.isError = true;
            state.message = action.error;
        })
        .addCase(resetState, () => initialState);
    }
})

export default programmeSlice.reducer;