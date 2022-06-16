import { Dispatch } from "react";
import { LayoutAction, LayoutActionTypes } from "../types/layout";


interface ILayout {
    menu: boolean;
}

export const menuLayout = (layout: ILayout) => {
    return (dispatch: Dispatch<LayoutAction>) => {
            if (layout.menu) {
                dispatch({type: LayoutActionTypes.OPENED_MENU, payload: true})
            } else {
                dispatch({type: LayoutActionTypes.CLOSED_MENU, payload: false})
            }
    }
}