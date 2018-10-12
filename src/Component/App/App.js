import React from 'react';
import PropTypes from 'prop-types';
import TitleSelectFilter from "../TitleSelectFilter";
import HeaderTable from "../HeaderTable";
import ContentTable from "../ContentTable";




const App = ({
                 initialState,
                 setFilter,
                 arrowsState,
                 setArrows,
                 getNewTable,
                 visibleSortState,
             }) => (
    <div>
        <div className="panel-title">Tables Redux</div>
        <div className="panel_heading">
            <TitleSelectFilter
                name="Gender"
                list={initialState.gender}
                setSelectedFilter={setFilter}
            />
            <TitleSelectFilter
                name="Hair Color"
                list={initialState.hairСolor}
                setSelectedFilter={setFilter}
            />
            <TitleSelectFilter
                name="Mass"
                list={initialState.mass}
                setSelectedFilter={setFilter}
            />
        </div>
        <div className="table1_wrapper">
            <table className="table1">
                <HeaderTable
                    setArrowsOnclick={setArrows}
                    arrowName={arrowsState.arrowName}
                    arrowHeight={arrowsState.arrowHeight}
                    arrowMass={arrowsState.arrowMass}
                    arrowBirthYear={arrowsState.arrowBirthYear}
                />
                <ContentTable
                    results={visibleSortState}
                    GetNewTableOnclick={getNewTable}
                />
            </table>
        </div>
    </div>
)
App.propTypes = {
    initialState: PropTypes.object,
    setFilter: PropTypes.func,
    arrowsState: PropTypes.object,
    setArrows: PropTypes.func,
    getNewTable: PropTypes.func,
    visibleSortState: PropTypes.array,
};

App.defaultProps = {
    initialState: {},
    arrowsState: {},
    visibleSortState: [],
};
export default App;
