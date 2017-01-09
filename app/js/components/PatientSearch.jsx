import React from 'react';

import patientService from '../services/PatientService'
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
            var promise = patientService.findPatients(event.target.value)
            this.setState({patients: {loading: promise}});
            promise.then((data) => {
                             if (this.state.patients.loading === promise) {
                                  // only use results if they were the last ones requested
                                 this.setState({loading: false, patients: data.results});
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