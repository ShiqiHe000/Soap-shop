import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./ItemsSlice";

export default configureStore({
    reducer: {
        items: itemReducer,
    },
});
