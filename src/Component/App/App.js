import React from 'react';
import PropTypes from 'prop-types';
import TitleSelectSort from "../TitleSelectSort";
import HeaderTable from "../HeaderTable";
import ContentTable from "../ContentTable";


const App = ({
                 initialState,
                 setSelectedSort,
                 setArrows,
                 getNewTable,
                 visibleSortState,
             }) => (
    <div>
        <div className="panel-title">Tables Redux</div>
        <div className="panel_heading">
            <TitleSelectSort
                name="Gender"
                list={initialState.gender}
                setSelectedSortActive={setSelectedSort}
            />
            <TitleSelectSort
                name="Hair Color"
                list={initialState.hairСolor}
                setSelectedSortActive={setSelectedSort}
            />
            <TitleSelectSort
                name="Mass"
                list={initialState.mass}
                setSelectedSortActive={setSelectedSort}
            />
        </div>
        <div className="table1_wrapper">
            <table className="table1">
                <HeaderTable
                    onclickSetArrows={setArrows}
                    arrowName={initialState.arrowName}
                    arrowHeight={initialState.arrowHeight}
                    arrowMass={initialState.arrowMass}
                    arrowBirthYear={initialState.arrowBirthYear}
                />
                <ContentTable
                    results={visibleSortState}
                    onClickclGetNewTable={getNewTable}
                />
            </table>
        </div>
    </div>
)
App.propTypes = {
    initialState: PropTypes.object,
    setSelected: PropTypes.func,
    setArrows: PropTypes.func,
    getNewTable: PropTypes.func,
    visibleSortState: PropTypes.any,
};

App.defaultProps = {
    initialState: {},
    visibleSortState: [],
};
export default App;
