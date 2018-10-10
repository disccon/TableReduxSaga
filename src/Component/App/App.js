import React from 'react';
import PropTypes from 'prop-types';
import TitleSelect from "../TitleSelect";
import HeaderTable from "../HeaderTable";
import ContentTable from "../ContentTable";
import uuid from 'uuid/v4';




const App = ({
                 oldState,
                 setSelected,
                 chooseOption1,
                 setArrows,
                 getNewTable,
             }) =>(
        <div onClick={chooseOption1}>
            <div className="panel-title">Tables Redux</div>
                <div className="panel_heading">
                    <TitleSelect
                        name="Gender"
                        list={oldState.gender}
                        setSelectedActive={setSelected}
                        />
                    <TitleSelect
                        name="Hair Color"
                        list={oldState.hairСolor}
                        setSelectedActive={setSelected}
                                 />
                    <TitleSelect
                        name="Mass"
                        list={oldState.mass}
                        setSelectedActive={setSelected}
                                />
                </div>
                <div className="table1_wrapper">
                    <table className="table1" >
                        <HeaderTable
                            onclickSetArrows={setArrows}
                            arrowName={oldState.arrowName}
                            arrowHeight={oldState.arrowHeight}
                            arrowMass={oldState.arrowMass}
                            arrowBirthYear={oldState.arrowBirthYear}
                        />
                        <ContentTable
                            results={oldState.results}
                            onClickclGetNewTable={getNewTable}
                        />
                    </table>
                </div>
    </div>
   )
App.propTypes = {
    oldState: PropTypes.object,
};

App.defaultProps = {
    oldState: {},
};


export default App;
