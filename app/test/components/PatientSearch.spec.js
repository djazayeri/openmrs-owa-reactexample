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
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import {expect} from 'chai';
import configureStore from 'redux-mock-store';

import PatientSearch from '../../js/components/PatientSearchHelper';
import ConnectedPatientSearch from '../../js/components/PatientSearch';

describe('<PatientSearch/>', function () {

    it('should show only input box', function () {
        const wrapper = shallow(<PatientSearch/>);
        expect(wrapper.find('input')).to.have.length(1);
        expect(wrapper.find('patientList')).to.have.length(0);
    });

    it('should have props for patients', function () {
        const wrapper = shallow(<PatientSearch/>);
        expect(wrapper.props().patients).to.be.defined;
    });

    it('should show input box and patient list', function () {

        const props = {
            patients: []
        };

        const wrapper = mount(<PatientSearch {...props} />);
        expect(wrapper.find('input')).to.have.length(1);
        expect(wrapper.find('PatientList')).to.have.length(1);
    });

    it('should map state to props', function () {

        const mockStore = configureStore([]);
        const initialState = {
            patientSearch: [
                {
                    "uuid": "0871e9ed-3815-4c77-bc41-63817215a431",
                    "display": "0102W6G - patient1"
                }
            ],

        };
        const store = mockStore(initialState);

        const wrapper = mount(
            <Provider store={store}>
                <ConnectedPatientSearch />
            </Provider>);

        expect(wrapper.find('input')).to.have.length(1);
        expect(wrapper.find('PatientList')).to.have.length(1);
    });

});

