import React from 'react';
import moment from 'moment';

import patientService from '../services/PatientService'

export default class ShowPatientHelper extends React.Component {

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
        if (this.props.loading) {
            return <div className="patient_loading">Loading...</div>
        }
        else if (this.props.patient.person) {
            let pt = this.props.patient;
            return (
                    <div className="patient">
                        <h2 className="patient_display">{pt.person.preferredName.display}</h2>
                        <h3 className="patient_age">{this.displayGender(pt.person)}, {this.ageFrom(pt.person.birthdate)} year(s)</h3>
                    </div>
            )
        }
        else {
            return <div></div>
        }
    }
}