import React from 'react';

import PatientList from './PatientList'

export default class PatientSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {patients: null};
    }

    doSearch(event) {
        let query = event.target.value;
        if (query.length > 1) {
            // doing the ajax query here is bad style; I'll clean this up when I introduce redux
            var req = fetch('/openmrs/ws/rest/v1/patient?q=' + event.target.value, {
                credentials: 'same-origin',
                Accept: 'application/json'
            });
            this.setState({patients: {loading: req}});
            req
                    .then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw new Error(response.statusText);
                        }
                    })
                    .then((json) => {
                              if (this.state.patients.loading === req) {
                                  // only use results if they were the last ones requested
                                  this.setState({loading: false, patients: json.results});
                              }
                          }
                    );
        }
    }

    render() {
        return (
                <div>
                    <input type="text" placeholder="Search for a patient" onChange={(evt) => this.doSearch(evt)}/>
                    <PatientList patients={this.state.patients} routeLink="/showPatient/:patientUuid"></PatientList>
                </div>
        );
    }
}