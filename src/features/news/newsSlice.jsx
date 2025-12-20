import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import newsService from "./newsService";


export const getNews = createAsyncThunk(
    "news/get-all",
    async (thunkAPI) => {
      try {
        return await newsService.allNews();
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );


export const getSingleNews = createAsyncThunk(
    "news/single-news",
    async (id, thunkApi) => {
      try {
        return await newsService.singleNews(id);
      } catch (error) {
        return thunkApi.rejectWithValue(error);
      }
    }
  );


export const resetState = createAction("Reset_all");

const initialState = {
  newses: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const newsSlice = createSlice({
    name: "newses",
    initialState: initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder
        .addCase(getSingleNews.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getSingleNews.fulfilled, (state, action) => {
            state.isSuccess = true;
            state.newImages = action?.payload?.images;
            state.newHeading = action?.payload?.heading;
            state.newContent = action?.payload?.content;
        })
        .addCase(getSingleNews.rejected, (state, action) => {
            state.isError = true;
            state.message = action.error;
        })
        .addCase(getNews.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getNews.fulfilled, (state, action) => {
            state.isError = false;
            state.isLoading = false;
            state.isSuccess = true;
            state.news = action.payload;
        })
        .addCase(getNews.rejected,(state, action) => {
            state.message = action.error;
            state.isError = true;
        })
        
        .addCase(resetState, () => initialState);
    }
})

export default newsSlice.reducer;