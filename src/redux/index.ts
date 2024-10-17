import {configureStore} from '@reduxjs/toolkit'
import {commonReducer} from "./reducers";

export const store = configureStore({
    reducer: {
        common: commonReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }),
})

// Inferred root store type
export type RootState = ReturnType<typeof store.getState>
// Infer the `AppDispatch` types from the store itself
export type AppDispatch = typeof store.dispatch