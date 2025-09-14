import { configureStore } from "@reduxjs/toolkit";
import authenticatorReducer from "../features/authentication";

export const store = configureStore({
    reducer : authenticatorReducer
})