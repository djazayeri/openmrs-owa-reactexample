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
import { mount } from 'enzyme';
import { expect } from 'chai';
import configureStore from 'redux-mock-store';

import ShowPatient from '../../js/components/ShowPatientHelper';
import ConnectedShowPatient from '../../js/components/ShowPatient';

describe('<ShowPatient />', function () {

    it('should show loading', function () {

        const props = {
            loading: "false"
        };

        const wrapper = mount(<ShowPatient {...props} />);
        expect(wrapper.find('.patient_loading')).to.have.length(1);
    });

    it('should show patient', function () {

        const props = {
            patient: {
                "uuid": "dbeef563-08f5-46f2-a48f-009f3606efda",
                "display": "patient1",
                "person": {
                    "uuid": "dbeef563-08f5-46f2-a48f-009f3606efda",
                    "display": "patient1",
                    "gender": "M",
                    "age": 1,
                    "birthdate": "2016-01-12T00:00:00.000-1000",
                    "preferredName": {
                        "uuid": "8ea33a7a-7fcc-49e5-b698-2fd26869fdc3",
                        "display": "patient1"
                    }
                }
            }
        };

        const wrapper = mount(<ShowPatient {...props} />);
        expect(wrapper.find('.patient')).to.have.length(1);
        expect(wrapper.find('.patient_display')).to.have.length(1);
        expect(wrapper.find('.patient_age')).to.have.length(1);
    });

    it('should map state to props', function () {

        const mockStore = configureStore([]);
        const initialState = {
            currentPatient: {
                "uuid": "dbeef563-08f5-46f2-a48f-009f3606efda",
                "display": "patient1",
                "person": {
                    "uuid": "dbeef563-08f5-46f2-a48f-009f3606efda",
                    "display": "patient1",
                    "gender": "M",
                    "age": 1,
                    "birthdate": "2016-01-12T00:00:00.000-1000",
                    "preferredName": {
                        "uuid": "8ea33a7a-7fcc-49e5-b698-2fd26869fdc3",
                        "display": "patient1"
                    }
                }
            }
        };
        const store = mockStore(initialState);

        const wrapper = mount(
            <Provider store={store}>
                <ConnectedShowPatient />
            </Provider>);

        expect(wrapper.find('.patient')).to.have.length(1);
        expect(wrapper.find('.patient_display')).to.have.length(1);
        expect(wrapper.find('.patient_age')).to.have.length(1);
    });
});