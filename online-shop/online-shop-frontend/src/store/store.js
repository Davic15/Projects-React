import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cartSlice';
import { productsApi } from '../features/productsApi';
import productsReducer from '../features/productsSlice';

const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
        [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(productsApi.middleware)
    }
})

export default store;