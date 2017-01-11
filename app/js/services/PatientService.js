/*
 * This is just to show what it would look like to use ReactJS for the view with the business logic in some external library.
 * Next I'll change things to use Redux instead.
 */
class PatientService {

    findPatients(query) {
        var promise = fetch('/openmrs/ws/rest/v1/patient?q=' + query, {
            credentials: 'same-origin',
            Accept: 'application/json'
        })
                .then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    }
                    else {
                        throw new Error(response.statusText);
                    }
                })
                .then((json) => {
                    return json.results;
                })
        return promise;
    }

    getPatient(uuid) {
        var promise = fetch('/openmrs/ws/rest/v1/patient/' + uuid + '?v=full', {
            credentials: 'same-origin',
            Accept: 'application/json'
        })
                .then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    }
                    else {
                        throw new Error(response.statusText);
                    }
                })
        return promise;
    }

}

let patientService = new PatientService();
export default patientService;