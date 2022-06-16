import { AuthAction, AuthActionTypes, IAuthState } from "../types/auth"

const initialState: IAuthState = {
    authToken: '',
    success: null,
    error: null, 
    load: null
}

export const authReducer = (state = initialState, action: AuthAction) => {
    switch(action.type) {
        case AuthActionTypes.POST_AUTH_CREDENTIALS:
            return {
                ...state,
                authToken: '',
                success: null,
                error: null,
                load: true
            }
        case AuthActionTypes.SUCCESS_POST_AUTH_CREDENTIALS: 
            return {
                ...state,
                authToken: action.payload,
                success: true,
                error: null,
                load: false
            }
        case AuthActionTypes.ERROR_POST_AUTH_CREDENTIALS:
            return {
                ...state,
                authToken: '',
                success: false,
                error: action.payload,
                load: false
            }
        default: 
            return state
    }
}