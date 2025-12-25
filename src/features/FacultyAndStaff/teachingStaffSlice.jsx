import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import teachingStaffService from "./teachingStaffService";

/* ===================== THUNKS ===================== */

export const createTeachingStaff = createAsyncThunk(
  "teachingStaff/create",
  async (staffData, thunkAPI) => {
    try {
      await teachingStaffService.addTeachingStaff(staffData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getTeachingStaff = createAsyncThunk(
  "teachingStaff/get-all",
  async (_, thunkAPI) => {
    try {
      return await teachingStaffService.allTeachingStaff();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getSinTeachingStaff = createAsyncThunk(
  "teachingStaff/get-single",
  async (id, thunkAPI) => {
    try {
      return await teachingStaffService.singleTeachingStaff(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateTeachingStaff = createAsyncThunk(
  "teachingStaff/update",
  async (staffData, thunkAPI) => {
    try {
      await teachingStaffService.putTeachingStaff(staffData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteTeachingStaff = createAsyncThunk(
  "teachingStaff/delete",
  async (id, thunkAPI) => {
    try {
      await teachingStaffService.deleteTeachingStaff(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetState = createAction("Reset_all");

/* ===================== INITIAL STATE ===================== */

const initialState = {
  teachingStaff: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",

  tsImages: [],
  tsName: "",
  tsDesignation: "",
  tsDepartment: "",
  tsSubject: "",
  tsMobile: "",
  tsEmail: "",
  tsQualification: "",
  tsExperience: "",
};

/* ===================== SLICE ===================== */

export const teachingStaffSlice = createSlice({
  name: "teachingStaff",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      /* CREATE */
      .addCase(createTeachingStaff.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createTeachingStaff.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.createdStaff = action.payload;
      })
      .addCase(createTeachingStaff.rejected, (state, action) => {
        state.isError = true;
        state.message = action.error;
      })

      /* GET ALL */
      .addCase(getTeachingStaff.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTeachingStaff.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.teachingStaff = action.payload;
      })
      .addCase(getTeachingStaff.rejected, (state, action) => {
        state.isError = true;
        state.message = action.error;
      })

      /* GET SINGLE */
      .addCase(getSinTeachingStaff.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSinTeachingStaff.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;

        state.tsImages = action.payload.images;
        state.tsName = action.payload.name;
        state.tsDesignation = action.payload.designation;
        state.tsDepartment = action.payload.department;
        state.tsSubject = action.payload.subject;
        state.tsMobile = action.payload.mobile;
        state.tsEmail = action.payload.email;
        state.tsQualification = action.payload.qualification;
        state.tsExperience = action.payload.experience;
      })
      .addCase(getSinTeachingStaff.rejected, (state, action) => {
        state.isError = true;
        state.message = action.error;
      })

      /* UPDATE */
      .addCase(updateTeachingStaff.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateTeachingStaff.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.updatedStaff = action.payload;
      })
      .addCase(updateTeachingStaff.rejected, (state, action) => {
        state.isError = true;
        state.message = action.error;
      })

      /* DELETE */
      .addCase(deleteTeachingStaff.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteTeachingStaff.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.deletedStaff = action.payload;
      })
      .addCase(deleteTeachingStaff.rejected, (state, action) => {
        state.isError = true;
        state.message = action.error;
      })

      /* RESET */
      .addCase(resetState, () => initialState);
  },
});

export default teachingStaffSlice.reducer;
