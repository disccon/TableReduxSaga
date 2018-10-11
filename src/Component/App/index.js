import {compose, lifecycle, withHandlers, withState,} from 'recompose';
import { connect } from 'react-redux';
import App from './App';
import {getNewTable, getRepos, setArrows, setSelected} from "../../reducers/stateReducer";



export default compose(
    connect(({initialState}) => (
            {initialState}
        ),
        {
            getRepos,
            setSelected,
            setArrows,
            getNewTable,
        }),
    lifecycle({
        componentDidMount(){
            this.props.getRepos('results');
        }
    }),
    // withState('dataTable', 'setDataState', props => {
    //     const {initialState} = props;
    //     console.log('55555',props.initialState.results)
    //     const dataTablee = props.initialState.results;
    //      if(initialState.arrowName === "fa fa-arrow-down"){
    //        props.setDataState(  dataTablee.reverse());
    //        } else {
    //           return   props.initialState.results;
    //           console.log('6666',dataTablee)
    //      }
    //
    //  }),
)(App);