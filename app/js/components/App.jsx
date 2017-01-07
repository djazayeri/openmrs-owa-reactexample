import React from 'react';

import {Link} from 'react-router'

export default class App extends React.Component {
    render() {
        return (
                <div>
                    <h1>React Example</h1>
                    <ul role="nav">
                        <li><Link to="/findPatient" activeClassName="active">Find</Link></li>
                        <li><Link to="/help" activeClassName="active">Help</Link></li>
                    </ul>
                    {this.props.children}
                </div>
        )
    }
}