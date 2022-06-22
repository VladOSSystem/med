import { PatientsAction, PatientsActionTypes, IPatientsState } from "../types/patients"

const initialState: IPatientsState = {
    patients: [],
    error: null, 
    load: null
}

export const patientsReducer = (state = initialState, action: PatientsAction) => {
    switch(action.type) {
        case PatientsActionTypes.GET_PATIENTS:
            return {
                ...state,
                patients: action.payload,
                error: null,
                load: false
            }
        case PatientsActionTypes.ERROR_GET_PATIENTS: 
            return {
                ...state,
                patients: [],
                error: action.payload,
                load: true
            }
        default: 
            return state
    }
}