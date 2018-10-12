import {compose, lifecycle, mapProps} from 'recompose';
import { connect } from 'react-redux';
import App from './App';
import {getNewTable, getRepos, setArrows, setFilter} from "../Actions";
import sortStateArrows from "../../helpers/sortStateArrows";
import visibleFilter from "../../helpers/visibleFilter";



export default compose(
    connect(({initialState,visibilityFilters,arrowsState}) => (
            {initialState,visibilityFilters,arrowsState}
        ),
        {
            getRepos,
            setFilter,
            setArrows,
            getNewTable,
        }),
    mapProps(({ initialState, visibilityFilters,arrowsState,...props}) => ({
        ...props,
        initialState,
        arrowsState,
        visibleSortState: visibleFilter(initialState,visibilityFilters,arrowsState,sortStateArrows)
    })),
    lifecycle({
        componentDidMount(){
            this.props.getRepos('results');
        },
    }),
)(App);