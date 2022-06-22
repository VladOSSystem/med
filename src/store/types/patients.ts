export interface IPatientsState {
    patients: [];
    error: null | string;
    load: null | boolean;
}

export enum PatientsActionTypes {
    GET_PATIENTS = 'GET_PATIENTS',
    ERROR_GET_PATIENTS = 'ERROR_GET_PATIENTS',
}

interface IGetPatients {
    type: PatientsActionTypes.GET_PATIENTS;
    payload: {};
}

interface IGetPatientsError {
    type: PatientsActionTypes.ERROR_GET_PATIENTS;
    payload: string;
}

export type PatientsAction = IGetPatients | IGetPatientsError;