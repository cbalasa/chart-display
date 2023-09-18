import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	chart: {
		compareWith: null,
		activeTab: null
	}
};

const chart = createSlice({
	name: "chart",
	initialState,
	reducers: {
		chartCompareWithReducer: (state, { payload }) => {
			state.chart.compareWith = payload;
		},
		chartActiveTabReducer: (state, { payload }) => {
			state.chart.activeTab = payload;
		}
	}
});

export const chartCompareWithSelected = (state) =>
	state.chart.chart.compareWith;
export const chartActiveTabSelected = (state) => state.chart.chart.activeTab;
export const setchartActions = chart.actions;

export default chart;
