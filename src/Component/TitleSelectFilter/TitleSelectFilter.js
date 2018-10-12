import React from "react";
import PropTypes from "prop-types";





const  TitleSelectFilter = ({ name,list,SelectedFilter}) =>(
    <label> {name}
        <select size="1" onChange={SelectedFilter}>
            {list.map((results) => {
                return <option value={results} key={results}>{results}</option>
           })
            }
        </select>
    </label>
)
TitleSelectFilter.propTypes = {
    name: PropTypes.string,
    list: PropTypes.array,
    chooseOption: PropTypes.func,

};

TitleSelectFilter.defaultProps = {
    name:'',
    list:[],

};


export default TitleSelectFilter;