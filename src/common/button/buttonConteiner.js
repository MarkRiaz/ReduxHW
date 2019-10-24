import Button from './button'
import { connect } from 'react-redux'
import { getStart, getPause } from "../../reducers/rootActions";

const mapStateToProps = (state) => {
    return {
        state: state.buttonReducer
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getStart: () => dispatch(getStart()),
        getPause: () => dispatch(getPause())
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (Button);