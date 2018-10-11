import React from "react";
import PropTypes from "prop-types";





const  TitleSelect = ({ name,list,chooseOption}) =>(
    <label> {name}
        <select size="1" onChange={chooseOption}>
            {list.map((results) => {
                return <option value={results} key={results}>{results}</option>
           })
            }
        </select>
    </label>
)
TitleSelect.propTypes = {
    name: PropTypes.string,
    list: PropTypes.array,
    chooseOption: PropTypes.func,

};

TitleSelect.defaultProps = {
    name:'',
    list:[],

};


export default TitleSelect;