import React from 'react'
import PatientList from './PatientList'

export default class PatientSearchHelper extends React.Component {

    render() {
        return (
                <div>
                    <input type="text" placeholder="Search for a patient"
                           onChange={(evt) => this.props.doSearch(evt.target.value)}/>
                    <PatientList patients={this.props.patients} routeLink="/showPatient/:patientUuid"></PatientList>
                </div>
        );
    }
}