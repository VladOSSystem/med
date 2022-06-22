import { Dispatch } from "react";
import { PatientsAction, PatientsActionTypes } from "../types/patients";

export const getPatients = () => {
    return async (dispatch: Dispatch<PatientsAction>) => {
        try {
            const patients = [
                {
                    id: 125,
                    date_birth: '08-12-1998',
                    age: '24',
                    nationality: 'ukranian',
                    residence: 'italian',
                    active_booking: '16-06-2022',
                    creation_date: '2022-06-15',
                    payment_status: 'In process',
                    log: 'loged information',
                    header: {
                        id: 125,
                        full_name: 'Giorno Giovanna',
                        fiscal_code: 124475,
                        email: 'test@gmail.com',
                        phone: '+39678945738'
                    }
                },
                {
                    id: 126,
                    date_birth: '08-12-1998',
                    age: '25',
                    nationality: 'polish',
                    residence: 'italian',
                    active_booking: '16-06-2022',
                    creation_date: '2022-06-15',
                    payment_status: 'In process',
                    log: 'loged information',
                    header: {
                        id: 125,
                        full_name: 'John Snow',
                        fiscal_code: 124475,
                        email: 'test@gmail.com',
                        phone: '+39678945738'
                    }
                }
            ]
            dispatch({type: PatientsActionTypes.GET_PATIENTS, payload: patients})
        } catch(e) {

            dispatch({type: PatientsActionTypes.ERROR_GET_PATIENTS, payload: 'Problem with query'})
        }   
    }
}