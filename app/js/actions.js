import patientService from './services/PatientService'

/*
 * Action Types
 */
export const LOAD_CURRENT_PATIENT = 'LOAD_CURRENT_PATIENT';
export const DISCARD_CURRENT_PATIENT = 'DISCARD_CURRENT_PATIENT';

export const PATIENT_SEARCH = 'PATIENT_SEARCH';

/*
 * Action Creators
 */

export function discardCurrentPatient() {
    return {type: DISCARD_CURRENT_PATIENT};
}

export function loadCurrentPatient(patientUuid) {
    return {type: LOAD_CURRENT_PATIENT, payload: patientService.getPatient(patientUuid)};
}

export function patientSearch(query) {
    return {type: PATIENT_SEARCH, payload: patientService.findPatients(query)};
}