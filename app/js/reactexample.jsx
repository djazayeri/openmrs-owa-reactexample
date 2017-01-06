/**
 * The contents of this file are subject to the OpenMRS Public License
 * Version 1.0 (the "License"); you may not use this file except in
 * compliance with the License. You may obtain a copy of the License at
 * http://license.openmrs.org
 * Software distributed under the License is distributed on an "AS IS"
 * basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. See the
 * License for the specific language governing rights and limitations
 * under the License.
 * Copyright (C) OpenMRS, LLC.  All Rights Reserved.
 */
import React from 'react';
import ReactDOM from 'react-dom';

class PatientList extends React.Component {
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
                        {this.props.patients.map((pt) => <li key={pt.uuid}>{pt.display}</li>)}
                    </ul>
            );
        }
    }
}

class PatientSearch extends React.Component {
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
            req.then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw new Error(response.statusText);
                }
            })
                    .then((json) => {
                              console.log(json);
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
                    <PatientList patients={this.state.patients}></PatientList>
                </div>
        );
    }
}

class App extends React.Component {
    render() {
        return <PatientSearch></PatientSearch>;
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));