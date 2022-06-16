import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { cacheReducer } from "./cacheReducer";
import { layoutReducer } from "./layoutReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    layout: layoutReducer,
    cache: cacheReducer
})

export type RootState = ReturnType<typeof rootReducer>