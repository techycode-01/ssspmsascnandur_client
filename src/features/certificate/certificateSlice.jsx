import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import certificateService from "./certificateService";

export const createCertificateThunk = createAsyncThunk(
    "sponsor/create", 
    async(certificateData, thunkAPI) => {
        try {
            await certificateService.addCertificate(certificateData);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
});

export const getAllCertificateThunk = createAsyncThunk(
    "sponsor/get-all",
    async (thunkAPI) => {
      try {
        return await certificateService.getCertificate();
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

export const getSingleCertificateThunk = createAsyncThunk("sponsor/get-sponsor", async(id, thunkAPI) => {
    try {
        await certificateService.singleCertificate(id);
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});


export const updateCertificateThunk = createAsyncThunk("sponsor/update-sponsor", async(certificateData, thunkAPI) => {
    try {
        await certificateService.putCertificate(certificateData);
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});


export const deleteCertificateThunk = createAsyncThunk("sponsor/delete-sponsor", async(id, thunkAPI) => {
    try {
        await certificateService.removeCertificate(id);
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})

export const resetState = createAction("Reset_all");

const initialState = {
  certificates: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const certificateSlice = createSlice({
    name: "certificates",
    initialState: initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder
        .addCase(createCertificateThunk.pending , (state) => {
            state.isLoading = true;
        })
        .addCase(createCertificateThunk.fulfilled, (state, action) => {
            state.isSuccess = true;
            state.doneCertificate = action.payload;
        })
        .addCase(createCertificateThunk.rejected, (state, action) => {
            state.isError = true;
            state.message = action.error;
        })
        .addCase(getAllCertificateThunk.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getAllCertificateThunk.fulfilled, (state, action) => {
            state.isError = false;
            state.isLoading = false;
            state.isSuccess = true;
            state.certificate = action.payload;
        })
        .addCase(getAllCertificateThunk.rejected,(state, action) => {
            state.message = action.error;
            state.isError = true;
        })
        .addCase(getSingleCertificateThunk.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getSingleCertificateThunk.fulfilled, (state, action) => {
            state.isSuccess = true;
            state.cerImages = action.payload.images;
        })
        .addCase(getSingleCertificateThunk.rejected, (state, action) => {
            state.isError = true;
            state.message = action.error;
        })
        .addCase(updateCertificateThunk.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(updateCertificateThunk.fulfilled, (state,action) => {
            state.isSuccess = true;
            state.updatedCertificate = action.payload;
        })
        .addCase(updateCertificateThunk.rejected, (state, action) => {
            state.isError = true;
            state.message = action.error;
        })
        .addCase(deleteCertificateThunk.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(deleteCertificateThunk.fulfilled, (state,action) => {
            state.isSuccess = true;
            state.deletedCertificate = action.payload;
        })
        .addCase(deleteCertificateThunk.rejected, (state, action) => {
            state.isError = true;
            state.message = action.error;
        })
        .addCase(resetState, () => initialState);
    }
})

export default certificateSlice.reducer;