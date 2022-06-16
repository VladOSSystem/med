import { Dispatch } from "react";
import { apolloClient } from "../../graphql";
import { GET_CACHE_CENTERS } from "../../services/cacheService";
import { CacheAction, CacheActionTypes } from "../types/cache";

export const getCache = () => {
    return async (dispatch: Dispatch<CacheAction>) => {
        try {
            const response = await apolloClient.query({query: GET_CACHE_CENTERS})
            dispatch({type: CacheActionTypes.GET_CACHE, payload: response.data.findSlots})
        } catch(e) {

            dispatch({type: CacheActionTypes.ERROR_GET_CACHE, payload: 'Problem with query'})
        }   
    }
}