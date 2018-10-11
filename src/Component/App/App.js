import React from 'react';
import PropTypes from 'prop-types';
import TitleSelect from "../TitleSelect";
import HeaderTable from "../HeaderTable";
import ContentTable from "../ContentTable";



const App = ({
                 initialState,
                 setSelected,
                 setArrows,
                 getNewTable,
             }) =>(
        <div >
            <div className="panel-title">Tables Redux</div>
                <div className="panel_heading">
                    <TitleSelect
                        name="Gender"
                        list={initialState.gender}
                        setSelectedActive={setSelected}
                        />
                    <TitleSelect
                        name="Hair Color"
                        list={initialState.hairСolor}
                        setSelectedActive={setSelected}
                                 />
                    <TitleSelect
                        name="Mass"
                        list={initialState.mass}
                        setSelectedActive={setSelected}
                                />
                </div>
                <div className="table1_wrapper">
                    <table className="table1" >
                        <HeaderTable
                            onclickSetArrows={setArrows}
                            arrowName={initialState.arrowName}
                            arrowHeight={initialState.arrowHeight}
                            arrowMass={initialState.arrowMass}
                            arrowBirthYear={initialState.arrowBirthYear}
                        />
                        <ContentTable
                            results={initialState.results}
                            onClickclGetNewTable={getNewTable}
                        />
                    </table>
                </div>
    </div>
   )
App.propTypes = {
    oldState: PropTypes.object,
    setSelected: PropTypes.func,
    setArrows: PropTypes.func,
    getNewTable: PropTypes.func,
};

App.defaultProps = {
    oldState: {},
};


export default App;
