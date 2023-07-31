import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toysData from '../api/listoftoys.json';

export const fetchToys = createAsyncThunk(
  'toys/fetchToys',
  async () => {
    return toysData;
  }
);

const toysSlice = createSlice({
  name: "toys",
  initialState: { toys: [], cart: [], status: "idle", error: null },
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.cart.splice(index, 1);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchToys.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchToys.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.toys = action.payload;
      })
      .addCase(fetchToys.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addToCart, removeFromCart } = toysSlice.actions;

export default toysSlice.reducer;