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
import { expect } from 'chai';

import {currentPatient, patientSearch } from '../js/reducers';
import {DISCARD_CURRENT_PATIENT, LOAD_CURRENT_PATIENT, PATIENT_SEARCH} from '../js/actions'


describe('Reducers', function () {

    describe('CurrentPatient', function () {

        it('should handle LOAD_CURRENT_PATIENT_FULFILLED', function () {
            const action = {
                type: LOAD_CURRENT_PATIENT+"_FULFILLED",
                payload: {
                    "uuid": "0871e9ed-3815-4c77-bc41-63817215a431",
                    "display": "0102W6G - patient1"
                }
            };

            expect(currentPatient({}, action)).to.equal(action.payload);
        });

        it('should handle LOAD_CURRENT_PATIENT_PENDING', function () {
            const action = {
                type: LOAD_CURRENT_PATIENT+"_PENDING",
                patientUuid: "0871e9ed-3815-4c77-bc41-63817215a431"
            };

            expect(currentPatient({}, action)).to.deep.equal({
                loading: action.patientUuid
            });
        });

        it('should handle DISCARD_CURRENT_PATIENT', function () {
            const action = {
                type: DISCARD_CURRENT_PATIENT
            };

            expect(currentPatient({}, action)).to.deep.equal({});
        });

        it('should handle wrong LOAD_CURRENT_PATIENT action', function () {
            const action = {
                type: "wadawda"
            };

            expect(currentPatient({}, action)).to.deep.equal({});
        });

    });

    describe('CurrentPatient', function () {

        it('should handle PATIENT_SEARCH_PENDING', function () {
            const action = {
                type: PATIENT_SEARCH + "_PENDING"
            };

            expect(patientSearch([], action)).to.deep.equal({
                loading: true
            });
        });


        it('should handle PATIENT_SEARCH_FULFILLED', function () {
            const action = {
                type: PATIENT_SEARCH + "_FULFILLED",
                payload: [
                    {"uuid": "fisrtUuis"},
                    {"uuid": "secondUuid"}
                ]
            };

            expect(patientSearch([], action)).to.deep.equal(action.payload);
        });


        it('should handle PATIENT_SEARCH_PENDING', function () {
            const action = {
                type: "wrongAction"
            };

            expect(patientSearch([], action)).to.deep.equal([]);
        });
    });
});