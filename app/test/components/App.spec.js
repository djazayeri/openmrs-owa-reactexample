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
import { shallow } from 'enzyme';
import {expect} from 'chai';

import App from '../../js/components/App';

describe('<App/>', function () {
    it('should show two links', function () {
        const wrapper = shallow(<App/>);
        expect(wrapper.find('h1')).to.have.length(1);
        expect(wrapper.find('ul')).to.have.length(1);
        expect(wrapper.find('li')).to.have.length(2);
    });
});