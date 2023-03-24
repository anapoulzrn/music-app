import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { musicApi } from "../musicApi";
import userReducer from '../slices/userSlice';
import playerReducer from '../slices/playerSlice';
import filterReducer from '../slices/filterSlice';
import playlistReducer from '../slices/playlistSlice';


const rootReducer = combineReducers({
    [musicApi.reducerPath]: musicApi.reducer,
    user: userReducer,
    player: playerReducer,
    playlist: playlistReducer,
    filter: filterReducer,
})


export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(musicApi.middleware)
})