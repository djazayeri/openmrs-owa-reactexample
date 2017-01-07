import React from 'react';

import {Link} from 'react-router'

export default class PatientList extends React.Component {
    renderLink(pt) {
        return (
                <Link to={this.props.routeLink.replace(":patientUuid", pt.uuid)}>
                    {pt.display}
                </Link>
        )
    }

    render() {
        if (this.props.patients == null) {
            return null;
        } else if (this.props.patients.loading) {
            return <div>Loading...</div>;
        } else if (this.props.patients.length === 0) {
            return <div>None</div>;
        } else {
            return (
                    <ul>
                        {this.props.patients.map((pt) => <li key={pt.uuid}>{this.renderLink(pt)}</li>)}
                    </ul>
            );
        }
    }
}