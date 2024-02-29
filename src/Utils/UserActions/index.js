import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axiosClient from "../Config";
import viewUserProfile from "../JSON/viewUser.json";

const initialState = {
  data: viewUserProfile,
  isSuccess: true,
  //   data: {},
  //   isSuccess: false,
  isLoading: false,
  isError: false,
  error: null,
};

export const searchProfilebyID = createAsyncThunk(
  "product/searchProfilebyID",
  async (apiData, thunkAPI) => {
    debugger;
    try {
      const { id = false } = apiData;
      let response = await axiosClient.get(`exec?id=${id}`);
      let data = await response.data;
      console.log(response, "response");
      debugger;
      if (data) {
        return data;
      }
    } catch (error) {
      // console.log(response, 'response')
      return thunkAPI.rejectWithValue({ error: true });
    }
  },
);

export const fetchAllUsers = createAsyncThunk(
  "product/fetchAllUsers",
  async (thunkAPI) => {
    try {
      //   const response = await axiosClient.get(`/products`);
      return viewUserProfile;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: true });
    }
  },
);

export const addUser = createAsyncThunk(
  "product/addUser",
  async (product, thunkAPI) => {
    try {
      const { name, description } = product;
      const response = await axiosClient.post(`/product/create`, {
        name,
        description,
      });
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const deleteUser = createAsyncThunk(
  "product/deleteUser",
  async (thunkAPI, id) => {
    try {
      const response = await axiosClient.patch(`/product/delete/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const userActions = createSlice({
  name: "product",
  initialState,
  reducers: {
    clearState: () => initialState,
    clearSuccess: () => {
      return { ...initialState, isSuccess: false };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchProfilebyID.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(searchProfilebyID.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = action.payload;
    });
    builder.addCase(searchProfilebyID.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
      state.isError = false;
    });
    builder.addCase(fetchAllUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = action.payload;
    });
    builder.addCase(fetchAllUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
      state.isError = false;
    });
    builder.addCase(addUser.pending, (state) => {
      state.isLoading = false;
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data.unshift(action.payload.product);
    });
    builder.addCase(addUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      let index = state.findIndex(({ id }) => id === action.payload.id);
      state.splice(index, 1);
    });
  },
});

export const { clearState, clearSuccess } = userActions.actions;
export default userActions.reducer;
