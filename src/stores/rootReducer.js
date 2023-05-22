import { combineReducers } from 'redux';
// import homeReducer from '../features/HomePageSlice/homeDataSlice';
import testReducer from '../features/testSlice';


export default combineReducers({
	/**Add more reducers here*/
	// home: homeReducer,
	test: testReducer
});