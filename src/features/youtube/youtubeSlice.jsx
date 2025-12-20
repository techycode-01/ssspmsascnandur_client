import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import youtubeService from "./youtubeService";

export const createYoutubeThunk = createAsyncThunk(
    "youtube/create", 
    async(ytData, thunkAPI) => {
        try {
            await youtubeService.addYoutube(ytData);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
});

export const getAllYoutubeThunk = createAsyncThunk(
    "youtube/get-all",
    async (thunkAPI) => {
      try {
        return await youtubeService.getYoutube();
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

export const getSingleYoutubeThunk = createAsyncThunk("youtube/get-youtube", async(id, thunkAPI) => {
    try {
        await youtubeService.singleYoutube(id);
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});


export const deleteYoutubeThunk = createAsyncThunk("youtube/delete-youtube", async(id, thunkAPI) => {
    try {
        await youtubeService.removeYoutube(id);
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})

export const resetState = createAction("Reset_all");

const initialState = {
  youtubes: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const youtubeSlice = createSlice({
    name: "youtubes",
    initialState: initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder
        .addCase(createYoutubeThunk.pending , (state) => {
            state.isLoading = true;
        })
        .addCase(createYoutubeThunk.fulfilled, (state, action) => {
            state.isSuccess = true;
            state.doneYoutube = action.payload;
        })
        .addCase(createYoutubeThunk.rejected, (state, action) => {
            state.isError = true;
            state.message = action.error;
        })
        .addCase(getAllYoutubeThunk.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getAllYoutubeThunk.fulfilled, (state, action) => {
            state.isError = false;
            state.isLoading = false;
            state.isSuccess = true;
            state.youtube = action.payload;
        })
        .addCase(getAllYoutubeThunk.rejected,(state, action) => {
            state.message = action.error;
            state.isError = true;
        })
        .addCase(getSingleYoutubeThunk.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getSingleYoutubeThunk.fulfilled, (state, action) => {
            state.isSuccess = true;
            state.ytLink = action.payload.link;
        })
        .addCase(getSingleYoutubeThunk.rejected, (state, action) => {
            state.isError = true;
            state.message = action.error;
        })
        .addCase(deleteYoutubeThunk.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(deleteYoutubeThunk.fulfilled, (state,action) => {
            state.isSuccess = true;
            state.deletedYoutube = action.payload;
        })
        .addCase(deleteYoutubeThunk.rejected, (state, action) => {
            state.isError = true;
            state.message = action.error;
        })
        .addCase(resetState, () => initialState);
    }
})

export default youtubeSlice.reducer;