import {connect} from 'react-redux'
import ShowPatientHelper from './ShowPatientHelper'

const mapStateToProps = (state, ownProps) => {
    return {
        patient: state.currentPatient,
        loading: state.currentPatient && state.currentPatient.loading
    }
}

const ShowPatient = connect(
        mapStateToProps,
        null
)(ShowPatientHelper);

export default ShowPatient