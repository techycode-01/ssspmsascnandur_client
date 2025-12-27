import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import academicTimeTableService from "./academicTimeTableService";

/* ================= THUNK ================= */
export const getAcademicTimeTable = createAsyncThunk(
    "academicTimeTable/get-all",
    async (_, thunkAPI) => {
        try {
            return await academicTimeTableService.allAcademicTimeTable();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

/* ================= STATE ================= */
const initialState = {
    academicTimeTable: [],
    isLoading: false,
    isError: false,
};

/* ================= SLICE ================= */
const academicTimeTableSlice = createSlice({
    name: "academicTimeTable",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAcademicTimeTable.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAcademicTimeTable.fulfilled, (state, action) => {
                state.isLoading = false;
                state.academicTimeTable = action.payload;
            })
            .addCase(getAcademicTimeTable.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});

export default academicTimeTableSlice.reducer;
