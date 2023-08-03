import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchToys = createAsyncThunk(
    'toys/fetchToys',
    async () => {
        const response = await fetch('https://raw.githubusercontent.com/olgaosadchuk/toys-api/main/toys.json');
        const data = await response.json();
        return data;
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