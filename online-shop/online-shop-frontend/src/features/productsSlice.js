import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { products } from '../products/products';

const initialState = {
    items: [],
    status: null,
    error: null,
};

export const productsFetch = createAsyncThunk(
    'products/productsFetch',
    async () => {
        const response = await axios.get(
            'https://timely-muffin-9475be.netlify.app/.netlify/functions/api/products'
        );
        return response?.data;
    }
);

const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [productsFetch.pending]: (state, action) => {
            state.status = 'pending';
        },
        [productsFetch.fulfilled]: (state, action) => {
            state.status = 'success';
            state.items = action.payload;
        },
        [productsFetch.rejected]: (state, action) => {
            state.status = 'rejected';
        },
    },
});

export default productsSlice.reducer;
