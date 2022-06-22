import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { cacheReducer } from "./cacheReducer";
import { layoutReducer } from "./layoutReducer";
import { patientsReducer } from "./patientsReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    layout: layoutReducer,
    cache: cacheReducer,
    patients: patientsReducer
})

export type RootState = ReturnType<typeof rootReducer>