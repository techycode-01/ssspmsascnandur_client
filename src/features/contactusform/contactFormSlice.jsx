import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import contactFormService from "./contactFormService";

export const createContactThunk = createAsyncThunk(
  "contact/create", 
  async(contactData, thunkAPI) => {
      try {
          await contactFormService.addContact(contactData);
      } catch (error) {
          return thunkAPI.rejectWithValue(error);
      }
});


export const resetState = createAction("Reset_all");

const initialState = {
  contactForms: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const contactFormSlice = createSlice({
    name: "contactForms",
    initialState: initialState,
    reducers : {},
    extraReducers : (builder) => {
      builder
      .addCase(createContactThunk.pending , (state) => {
        state.isLoading = true;
    })
    .addCase(createContactThunk.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.doneContact = action.payload;
    })
    .addCase(createContactThunk.rejected, (state, action) => {
        state.isError = true;
        state.message = action.error;
    })
    .addCase(resetState, () => initialState);
  }
})

export default contactFormSlice.reducer;