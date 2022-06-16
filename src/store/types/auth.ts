export interface IAuthState {
    authToken: string;
    success: null | boolean;
    error: null | string;
    load: null | boolean;
}

export enum AuthActionTypes {
    POST_AUTH_CREDENTIALS = 'POST_AUTH_CREDENTIALS',
    SUCCESS_POST_AUTH_CREDENTIALS = 'SUCCESS_POST_AUTH_CREDENTIALS',
    ERROR_POST_AUTH_CREDENTIALS = 'ERROR_POST_AUTH_CREDENTIALS',
}

interface IPostAuth {
    type: AuthActionTypes.POST_AUTH_CREDENTIALS;
    payload: boolean;
}

interface IPostAuthSuccess {
    type: AuthActionTypes.SUCCESS_POST_AUTH_CREDENTIALS;
    payload: boolean;
}

interface IPostAuthError {
    type: AuthActionTypes.ERROR_POST_AUTH_CREDENTIALS;
    payload: string;
}

export type AuthAction = IPostAuth | IPostAuthSuccess | IPostAuthError