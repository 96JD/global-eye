import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "./store";

interface InitialState {
	selectedSearchedSource: string;
}

const initialState: InitialState = {
	selectedSearchedSource: "q=basketball"
};

const globalSlice = createSlice({
	name: "global",
	initialState,
	reducers: {
		setSelectedSearchedSource: (state, action: PayloadAction<string>) => {
			state.selectedSearchedSource = action.payload;
		}
	}
});

export const globalSliceReducer = globalSlice.reducer;

export const globalSliceActions = globalSlice.actions;

export const globalSliceSelectors = {
	selectedSearchedSource: (state: RootState) => state.global.selectedSearchedSource
};
