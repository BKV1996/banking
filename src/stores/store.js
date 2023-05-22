import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'

import storageSession from 'reduxjs-toolkit-persist/lib/storage/session'
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const persistConfig = {
	key: 'root',
	storage: storageSession,
};

const appReducer = (state, action) => {
	if (action.type === 'SIGNOUT') {
		// for all keys defined in your persistConfig(s)
		storageSession.removeItem('persist:root');
		return rootReducer(undefined, action);
	}
	return rootReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, appReducer);

export const store = configureStore({
	reducer: persistedReducer,
	devTools: process.env.NODE_ENV !== 'production',
	middleware: [thunk]
});
export const persistor = persistStore(store);