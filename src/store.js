import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./redux/ThemeReducer";

export const store =  configureStore({
    reducer: {
        theme: themeReducer,
    }
})