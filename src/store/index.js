import { combineReducers, configureStore } from "@reduxjs/toolkit";
import chart from "./chart";

export const storeReducers = combineReducers({
	[chart.name]: chart.reducer
});

export const store = configureStore({
	reducer: storeReducers
});
