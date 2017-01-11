import {connect} from 'react-redux'
import PatientSearchHelper from './PatientSearchHelper'
import {patientSearch} from '../actions'

const mapStateToProps = (state) => {
    return {
        patients: state.patientSearch
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        doSearch: (query) => {
            if (query && (query.length > 1)) {
                dispatch(patientSearch(query));
            }
        }
    }
}

const PatientSearch = connect(
        mapStateToProps,
        mapDispatchToProps
)(PatientSearchHelper);

export default PatientSearch