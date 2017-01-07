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
import {render} from 'react-dom';
import {Router, Route, hashHistory} from 'react-router'

import App from './components/App'
import FindPatient from './components/FindPatient'
import ShowPatient from './components/ShowPatient'
import Help from './components/Help'

render((
               <Router history={hashHistory}>
                   <Route path="/" component={App}>
                       <Route path="/findPatient" component={FindPatient}/>
                       <Route path="/showPatient/:patientUuid" component={ShowPatient}/>
                       <Route path="/help" component={Help}/>
                   </Route>
               </Router>
       ), document.getElementById('app'));