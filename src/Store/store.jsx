import { configureStore } from "@reduxjs/toolkit";
import prodSlice from "./productdataSlice";
import cartSlice from "./CartSlice";
const store = configureStore({
  reducer: {
    productsAre: prodSlice,
    cartData: cartSlice,
  },
});

export default store;
