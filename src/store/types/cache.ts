export interface ICacheState {
    cache: [];
    error: null | string;
    load: null | boolean;
}

export enum CacheActionTypes {
    GET_CACHE = 'GET_CACHE',
    ERROR_GET_CACHE = 'ERROR_GET_CACHE',
}

interface IGetCache {
    type: CacheActionTypes.GET_CACHE;
    payload: [];
}

interface IGetCacheError {
    type: CacheActionTypes.ERROR_GET_CACHE;
    payload: string;
}

export type CacheAction = IGetCache | IGetCacheError;