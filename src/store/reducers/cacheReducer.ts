import { CacheAction, CacheActionTypes, ICacheState } from "../types/cache"

const initialState: ICacheState = {
    cache: [],
    error: null, 
    load: null
}

export const cacheReducer = (state = initialState, action: CacheAction) => {
    switch(action.type) {
        case CacheActionTypes.GET_CACHE:
            return {
                ...state,
                cache: action.payload,
                error: null,
                load: false
            }
        case CacheActionTypes.ERROR_GET_CACHE: 
            return {
                ...state,
                cache: [],
                error: action.payload,
                load: true
            }
        default: 
            return state
    }
}