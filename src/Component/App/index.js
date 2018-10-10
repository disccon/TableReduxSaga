import {compose,lifecycle,} from 'recompose';
import { connect } from 'react-redux';
import App from './App';
import {getNewTable, getRepos, setArrows, setSelected} from "../../reducer/stateReducer";



export default compose(
    connect(({oldState}) => (
            {oldState}
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
)(App);