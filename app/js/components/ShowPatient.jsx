import React from 'react';
import moment from 'moment';

import patientService from '../services/PatientService'

export default class ShowPatient extends React.Component {

    constructor(props) {
        super(props);
        this.state = {loading: true};

        patientService.getPatient(this.props.params.patientUuid)
                .then((data) => {
                    this.setState({loading: false, patient: data});
                });
    }

    ageFrom(birthdate) {
        return moment().diff(moment(birthdate), 'years')
    }

    displayGender(person) {
        if (person.gender === 'M') {
            return "Male";
        } else if (person.gender === "F") {
            return "Female";
        } else {
            return "Other";
        }
    }

    render() {
        if (this.state.loading) {
            return <div>Loading...</div>
        }
        else {
            let pt = this.state.patient;
            return (
                    <div>
                        <h2>{pt.person.preferredName.display}</h2>
                        <h3>{this.displayGender(pt.person)}, {this.ageFrom(pt.person.birthdate)} year(s)</h3>
                    </div>
            )
        }
    }
}