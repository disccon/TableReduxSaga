import {compose, lifecycle, mapProps, withHandlers, withState,} from 'recompose';
import { connect } from 'react-redux';
import App from './App';
import {getNewTable, getRepos, setArrows, setSelectedSort} from "../Actions";


const sortDataArrows = (newVisibleState) => {
    if (newVisibleState.arrowName === 'fa fa-arrow-down' || newVisibleState.arrowName === 'fa fa-arrow-up') {
        let SortState = newVisibleState.results.sort(function (a, b) {
            let x = a.name.toLowerCase();
            let y = b.name.toLowerCase();
            return x < y ? -1 : x > y ? 1 : 0;
        });
        if (newVisibleState.arrowName === 'fa fa-arrow-up') {
            return SortState.reverse()
        } else {
            return SortState;
        }
    } else if (newVisibleState.arrowHeight === 'fa fa-arrow-down' || newVisibleState.arrowHeight === 'fa fa-arrow-up') {
        let SortState = newVisibleState.results.sort(function (a, b) {
            return a.height - b.height;
        });
        if (newVisibleState.arrowHeight === 'fa fa-arrow-up') {
            return SortState.reverse()
        } else {
            return SortState;
        }
    } else if (newVisibleState.arrowMass === 'fa fa-arrow-down' || newVisibleState.arrowMass === 'fa fa-arrow-up') {
        let SortState = newVisibleState.results.sort(function (a, b) {
            return a.mass - b.mass;
        });
        if (newVisibleState.arrowMass === 'fa fa-arrow-up') {
            return SortState.reverse()
        } else {
            return SortState;
        }
    } else if (newVisibleState.arrowBirthYear === 'fa fa-arrow-down' || newVisibleState.arrowBirthYear === 'fa fa-arrow-up') {
        let SortState = newVisibleState.results.sort(function (a, b) {
            let birthYearA = parseInt(a.birth_year, 10)
            let birthYearB = parseInt(b.birth_year, 10)
            if (isNaN(birthYearA)) {
                birthYearA = 9999999;
            }
            if (isNaN(birthYearB)) {
                birthYearB = 9999999;
            }
            if (birthYearA > birthYearB) {
                return 1;
            }
            if (birthYearA < birthYearB) {
                return -1;
            }
            return 0;
        });
        if (newVisibleState.arrowBirthYear === 'fa fa-arrow-up') {
            return SortState.reverse()
        } else {
            return SortState;
        }
    }
    else {
        return newVisibleState.results
    }
}

const visibleFilter = (initialState, sortDataArrows) => {
    if (initialState.results) {
        let results = initialState.results;
        if (initialState.genderVisible !== 'all') {
            if (initialState.genderVisible === 'male') {
                results = results.filter((t) => {
                    return t.gender === 'male'
                });
            }
            else if (initialState.genderVisible === 'female') {
                results = results.filter((t) => {
                    return t.gender === 'female'
                });
            }
        }

        if (initialState.hairColorVisible !== 'all') {
            if (initialState.hairColorVisible === 'blond') {
                results = results.filter((t) => {
                    return t.hair_color === 'blond'
                });
            }
            else if (initialState.hairColorVisible === 'brown') results = results.filter((t) => {
                return t.hair_color === 'brown'
            });
            else if (initialState.hairColorVisible === 'black') results = results.filter((t) => {
                return t.hair_color === 'black'
            });
            else if (initialState.hairColorVisible === 'red') results = results.filter((t) => {
                return t.hair_color === 'red'
            });
        }

        if (initialState.massVisible !== 'all') {
            if (initialState.massVisible === '50') results = results.filter((t) => {
                return t.mass < 50;
            });
            else if (initialState.massVisible === '50 - 100') results = results.filter((t) => {
                return t.mass >= 50 && t.mass < 100
            });
            else if (initialState.massVisible === '100 - 150') results = results.filter((t) => {
                return t.mass >= 100 && t.mass < 150
            });
            else if (initialState.massVisible === '150 >') results = results.filter((t) => {
                return t.mass >= 150
            });
        }
        const newVisibleState = {...initialState, results}
        return sortDataArrows(newVisibleState)
    }
    return []
}


export default compose(
    connect(({initialState,visibilityFilter}) => (
            {initialState,visibilityFilter}
        ),
        {
            getRepos,
            setSelectedSort,
            setArrows,
            getNewTable,
        }),
    mapProps(({ initialState, ...props}) => ({
        ...props,
        initialState,
        visibleSortState: visibleFilter(initialState,sortDataArrows)
    })),
    lifecycle({
        componentDidMount(){
            this.props.getRepos('results');
        },
    }),
)(App);