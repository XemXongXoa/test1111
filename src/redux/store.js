import {combineReducers, configureStore} from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import detailUserReducer from './detailUserSlice'
import storage from 'redux-persist/lib/storage'
const rootReducer = combineReducers({
    detailUser : detailUserReducer,
    devtools: true
})
const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
    reducer: persistedReducer,
})

export const persist = persistStore(store)

