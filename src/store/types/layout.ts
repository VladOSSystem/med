export interface ILayout {
    menu: boolean;
}

export enum LayoutActionTypes {
    OPENED_MENU = 'OPENED_MENU',
    CLOSED_MENU = 'CLOSED_MENU',
}

interface IOpenMenu {
    type: LayoutActionTypes.OPENED_MENU;
    payload: boolean;
}

interface ICloseMenu {
    type: LayoutActionTypes.CLOSED_MENU;
    payload: boolean;
}


export type LayoutAction = IOpenMenu | ICloseMenu 