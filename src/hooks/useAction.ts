import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as AuthActionCreators from '../store/actions/auth';
import * as LayoutActionCreators from '../store/actions/layout';
import * as CacheActionCreators from '../store/actions/cache';
import * as PatientsActionCreators from '../store/actions/patients';

export const useAction = () => {
    const dispatch = useDispatch()
    return bindActionCreators(AuthActionCreators, dispatch)
}

export const useLayout = () => {
    const dispatch = useDispatch()
    return bindActionCreators(LayoutActionCreators, dispatch)
}

export const useCache = () => {
    const dispatch = useDispatch()
    return bindActionCreators(CacheActionCreators, dispatch)
}

export const usePatients = () => {
    const dispatch = useDispatch()
    return bindActionCreators(PatientsActionCreators, dispatch)
}