import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export let STATUS = {
  IDLE: "idle",
  PENDING: "pending",
  ERROR: " error",
};

const productSlice = createSlice({
  name: "prod",
  initialState: {
    arrrayofdata: [],
    status: STATUS.IDLE,
    show: true,
  },
  reducers: {
    Unshow(state) {
      state.show = false;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchdata.fulfilled, (state, action) => {
        state.arrrayofdata = action.payload;
        state.status = STATUS.IDLE;
      })
      .addCase(fetchdata.pending, (state) => {
        state.status = STATUS.PENDING;
      })
      .addCase(fetchdata.rejected, (state) => {
        state.status = STATUS.ERROR;
      });
  },
});
export const { Unshow } = productSlice.actions;
export default productSlice.reducer;

//Middleware:

export const fetchdata = createAsyncThunk("data/fetch", async (val) => {
  try {
    const dataIs = await axios.get(
      `https://dummyjson.com/products/search?q=${val}`
    );

    return dataIs.data.products;
  } catch (err) {
    throw new Error(err);
  }
});
