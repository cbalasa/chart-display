import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	chart: {
		compareWith: null
	}
};

const chart = createSlice({
	name: "chart",
	initialState,
	reducers: {
		chartCompareWithReducer: (state, { payload }) => {
			state.chart.compareWith = payload;
		}
	}
});

export const chartCompareWithSelected = (state) =>
	state.chart.chart.compareWith;
export const setchartActions = chart.actions;

export default chart;
