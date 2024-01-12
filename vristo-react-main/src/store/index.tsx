import { combineReducers, configureStore } from '@reduxjs/toolkit';
import themeConfigSlice from './themeConfigSlice';
import photoReducer from '../pages/Manages/photoSlice';

const rootReducer = combineReducers({
    themeConfig: themeConfigSlice,
    photo: photoReducer,
});

export default configureStore({
    reducer: rootReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;
