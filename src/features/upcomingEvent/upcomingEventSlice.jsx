import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import upcomingEventService from "./upcomingEventService";

export const createUpcomingThunk = createAsyncThunk(
    "upcoming/create", 
    async(eventData, thunkAPI) => {
        try {
            await upcomingEventService.addUpcoming(eventData);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
});

export const getUpcomingThunk = createAsyncThunk(
    "upcoming/get-all",
    async (thunkAPI) => {
      try {
        return await upcomingEventService.allUpcoming();
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

export const getSingleUpcomingThunk = createAsyncThunk("upcoming/get-single", async(id, thunkAPI) => {
    try {
        await upcomingEventService.singleUpcoming(id);
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const deleteUpcomingThunk = createAsyncThunk("upcoming/delete-upcoming", async(id, thunkAPI) => {
    try {
        await upcomingEventService.deleteUpcoming(id);
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})

export const resetState = createAction("Reset_all");

const initialState = {
    upcomings: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const upcomingEventSlice = createSlice({
    name: "upcomings",
    initialState: initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder
        .addCase(createUpcomingThunk.pending , (state) => {
            state.isLoading = true;
        })
        .addCase(createUpcomingThunk.fulfilled, (state, action) => {
            state.isSuccess = true;
            state.doneUpcoming = action.payload;
        })
        .addCase(createUpcomingThunk.rejected, (state, action) => {
            state.isError = true;
            state.message = action.error;
        })
        .addCase(getUpcomingThunk.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getUpcomingThunk.fulfilled, (state, action) => {
            state.isError = false;
            state.isLoading = false;
            state.isSuccess = true;
            state.upcoming = action.payload;
        })
        .addCase(getUpcomingThunk.rejected,(state, action) => {
            state.message = action.error;
            state.isError = true;
        })
        .addCase(getSingleUpcomingThunk.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getSingleUpcomingThunk.fulfilled, (state, action) => {
            state.isSuccess = true;
            state.upImages = action.payload.images;
            state.upTitle = action.payload.title;
            state.upDate = action.payload.date;
            state.upTime = action.payload.time;
            state.upLocation = action.payload.location;
            state.upTagColor = action.payload.tagColor;
        })
        .addCase(getSingleUpcomingThunk.rejected, (state, action) => {
            state.isError = true;
            state.message = action.error;
        })
        .addCase(deleteUpcomingThunk.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(deleteUpcomingThunk.fulfilled, (state,action) => {
            state.isSuccess = true;
            state.deletedUpcoming = action.payload;
        })
        .addCase(deleteUpcomingThunk.rejected, (state, action) => {
            state.isError = true;
            state.message = action.error;
        })
        .addCase(resetState, () => initialState);
    }
})

export default upcomingEventSlice.reducer;