import { configureStore } from "@reduxjs/toolkit";
import operationSlice from './operationSlice';

const store = configureStore({
    reducer: {
        operation: operationSlice,
    },
});

export default store;