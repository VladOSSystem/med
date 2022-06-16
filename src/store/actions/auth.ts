import { Dispatch } from "react";
import { AuthAction, AuthActionTypes } from "../types/auth";

interface IAuth {
    login: string;
    password: string;
}

export const postAuth = (DTO: IAuth) => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            const {login, password} = DTO;
            if (login === 'test@gmail.com' && password === 'password') {
                localStorage.setItem("user", JSON.stringify({role: "USER"}))
            } else {
                localStorage.setItem("user", JSON.stringify({role: "ADMIN"}))
            }
            if (login.length > 0 && password.length > 0) {
                dispatch({type: AuthActionTypes.SUCCESS_POST_AUTH_CREDENTIALS, payload: true})
            } else {
                dispatch({type: AuthActionTypes.POST_AUTH_CREDENTIALS, payload: true})
            }
        } catch(e) {
            dispatch({type: AuthActionTypes.ERROR_POST_AUTH_CREDENTIALS, payload: 'Error with password or login!'})
        }   
    }
}
