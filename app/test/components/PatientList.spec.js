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
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import PatientList from '../../js/components/PatientList';

describe('<PatientList />', function () {

    it('should not show patient list', function () {
        const wrapper = shallow(<PatientList/>);
        expect(wrapper.find('li')).to.have.length(0);
    });


    it('should show two patients', function () {
        const props = {
            patients: [
                {
                    "uuid": "0871e9ed-3815-4c77-bc41-63817215a431",
                    "display": "0102W6G - patient1"
                },
                {
                    "uuid": "dbeef563-08f5-46f2-a48f-009f3606efda",
                    "display": "0102PW7 - patient2"
                }
            ],
            routeLink: ":patientUuid" //we need this for renderLink method to not get typeError od undefined
        };
        const wrapper = mount(<PatientList {...props} />);
        expect(wrapper.find('li')).to.have.length(2);
    });

});