import React from "react";
import PropTypes from "prop-types";





const  TitleSelectSort = ({ name,list,setSortActive}) =>(
    <label> {name}
        <select size="1" onChange={setSortActive}>
            {list.map((results) => {
                return <option value={results} key={results}>{results}</option>
           })
            }
        </select>
    </label>
)
TitleSelectSort.propTypes = {
    name: PropTypes.string,
    list: PropTypes.array,
    chooseOption: PropTypes.func,

};

TitleSelectSort.defaultProps = {
    name:'',
    list:[],

};


export default TitleSelectSort;