import { createSlice } from '@reduxjs/toolkit';

export const listProductsSlice = createSlice({
    name: 'listProducts',
    initialState: {
        products: []
    },
    reducers: {
        onProducts: (state, action ) => {
            state.products = action.payload
        },
    }
});


// Action creators are generated for each case reducer function
export const { onProducts } = listProductsSlice.actions;