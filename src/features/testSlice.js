import { createSlice } from '@reduxjs/toolkit';

export const homeDataSlice = createSlice({
	name: 'homepage',
	initialState: {
		logToken:"",
		accVerification:"",
		ucMainId:"",
	},
	reducers: {
		// Redux Toolkit allows us to write "mutating" logic in reducers. It
		// doesn't actually mutate the state because it uses the immer library,
		// which detects changes to a "draft state" and produces a brand new
		// immutable state based off those changes
		saveToken: (state, action) => {
			console.log('SLICE - ', action.payload);
			state.logToken = action.payload;
		},
		saveAccountVerify: (state, action) => {
			console.log('SLICE - ', action.payload);
			state.accVerification = action.payload;
		},
		saveUcMainId: (state, action) => {
			console.log('SLICE - ', action.payload);
			state.ucMainId = action.payload;
		},
		
	},
});

export const {
	saveToken,
	saveAccountVerify,
	saveUcMainId

} = homeDataSlice.actions;

export default homeDataSlice.reducer;