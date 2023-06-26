import { configureStore } from "@reduxjs/toolkit";
import { listProductsSlice } from "./listProducts/listProductsSlice";

export const store = configureStore({
    reducer: {
        listProducts: listProductsSlice.reducer
    }
})