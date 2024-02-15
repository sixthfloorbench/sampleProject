import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axiosClient from "../Config";

const initialState = {
    data: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    error: null,
};

export const fetchAllUsers = createAsyncThunk(
    "product/fetchAllUsers",
    async (thunkAPI) => {
        try {
            const response = await axiosClient.get(`/products`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
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
    }
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
    }
);

export const userActions = createSlice({
    name: "product",
    initialState,
    reducers: {
        clearState: () => initialState,
        clearSuccess: () => (initialState.isSuccess = false),
    },
    extraReducers: (builder) => {
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
