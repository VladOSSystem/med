import { LayoutAction, LayoutActionTypes, ILayout } from "../types/layout"

const initialState: ILayout = {
    menu: false
}

export const layoutReducer = (state = initialState, action: LayoutAction) => {
    switch(action.type) {
        case LayoutActionTypes.CLOSED_MENU:
            return {
                ...state,
                menu: action.payload,
            }
        case LayoutActionTypes.OPENED_MENU: 
            return {
                ...state,
                menu: action.payload,
            }
        default: 
            return state
    }
}