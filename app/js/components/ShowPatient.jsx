import React from 'react';

import moment from 'moment';

export default class ShowPatient extends React.Component {

    constructor(props) {
        super(props);
        this.state = {loading: true};

        // bad style to include this ajax call in the display component; I'll move it when I add redux
        fetch('/openmrs/ws/rest/v1/patient/' + this.props.params.patientUuid + '?v=full', {
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
                    this.setState({loading: false, patient: json});
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