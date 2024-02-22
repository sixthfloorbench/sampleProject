import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../Config";
import myProfileData from "../JSON/viewProfile.json";

const initialState = {
  data: {},
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: null,
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (apiData, thunkAPI) => {
    try {
      const { mobile = "" } = apiData;
      // let response = await axiosClient.get(`/search_or?Mobile=${mobile}`);
      //API issue on returing 200 for all string
      // let data = await response.data;
      // console.log(response, 'response')
      if (apiData) {
        // localStorage.setItem("token", data.token);
        // localStorage.setItem("user", JSON.stringify(data));
        return myProfileData;
      }
    } catch (error) {
      // console.log(response, 'response')
      return thunkAPI.rejectWithValue({ error: true });
    }
  },
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearState: () => initialState,
    clearSuccess: () => {
      return { ...initialState, isSuccess: false };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
      state.data = action.payload;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
      state.error = action.payload.error;
    });
  },
});

export const { clearState, clearSuccess } = authSlice.actions;
export default authSlice.reducer;
