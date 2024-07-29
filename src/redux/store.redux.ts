import { configureStore } from "@reduxjs/toolkit"
import {
    googleOAuth2CallbackReducer,
} from "./slices"

export const store = configureStore({
    reducer: {
        googleOAuth2CallbackReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
