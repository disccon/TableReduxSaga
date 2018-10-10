import React, {Fragment} from "react";
import PropTypes from 'prop-types';

import uuid from 'uuid/v4';


const  Table = ({list}) =>(
    <Fragment>
        {list.map((name) => {
            return <td key={uuid()}>{`${name}`}</td>
        })
        }
    </Fragment>




)

Table.propTypes = {
    list: PropTypes.array,
};

Table.defaultProps = {
    list: [],
};


export default Table;