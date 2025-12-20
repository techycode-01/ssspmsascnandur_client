import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import grantsReadService from "./grantsReadService";


export const getGrantReads = createAsyncThunk(
    "grantRead/get-all",
    async (thunkAPI) => {
      try {
        return await grantsReadService.allGrantRead();
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );


export const getSingleGrantReads = createAsyncThunk(
    "grantRead/single-grantRead",
    async (id, thunkApi) => {
      try {
        return await grantsReadService.singleGrantRead(id);
      } catch (error) {
        return thunkApi.rejectWithValue(error);
      }
    }
  );



export const resetState = createAction("Reset_all");

const initialState = {
    grantReads: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const grantsReadSlice = createSlice({
    name: "grantReads",
    initialState: initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder
        .addCase(getGrantReads.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getGrantReads.fulfilled, (state, action) => {
            state.isError = false;
            state.isLoading = false;
            state.isSuccess = true;
            state.grantRead = action.payload;
        })
        .addCase(getGrantReads.rejected,(state, action) => {
            state.message = action.error;
            state.isError = true;
        })
        .addCase(getSingleGrantReads.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getSingleGrantReads.fulfilled, (state, action) => {
            state.isSuccess = true;
            state.granImages = action?.payload?.images;
            state.granTitle = action?.payload?.title;
            state.granLocation = action?.payload?.location;
            state.granDate = action?.payload?.date;
            state.granContent = action?.payload?.content;
            state.grantPdf = action.payload.pdfUrl;
        })
        .addCase(getSingleGrantReads.rejected, (state, action) => {
            state.isError = true;
            state.message = action.error;
        })
        .addCase(resetState, () => initialState);
    }
})

export default grantsReadSlice.reducer;