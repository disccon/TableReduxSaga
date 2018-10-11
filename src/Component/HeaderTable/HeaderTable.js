import React from "react";
import PropTypes from 'prop-types';


const  HeaderTable = ({ arrowName,arrowHeight,arrowMass,arrowBirthYear,onclickArrows}) =>(
    <thead>
        <tr>
            <th>
            </th>
            <th>
                Number
            </th>
            <th>
                Name <i className={arrowName} onClick={() => onclickArrows('NAME',arrowName)}></i>
            </th>
            <th>
                Height <i className={arrowHeight} onClick={() => onclickArrows('HEIGHT',arrowHeight)}></i>
            </th>
            <th>
                Mass <i className={arrowMass} onClick={() => onclickArrows('MASS',arrowMass)}></i>
            </th>
            <th>
                Hair color
            </th>
            <th>
                Skin color
            </th>
            <th>
                Eye color
            </th>
            <th>
                Birth year <i className={arrowBirthYear} onClick={() => onclickArrows('BRIRTHYEAR',arrowBirthYear)}></i>
            </th>
            <th>
                Gender
            </th>
            <th>
                Actions
            </th>
        </tr>
    </thead>
)

HeaderTable.propTypes = {
    arrowName: PropTypes.string.isRequired,
    arrowHeight: PropTypes.string.isRequired,
    arrowMass: PropTypes.string.isRequired,
    arrowBirthYear: PropTypes.string.isRequired,
    onclickArrows: PropTypes.func,
};

HeaderTable.defaultProps = {
    arrowName: 'fa fa-arrows-v',
    arrowHeight: 'fa fa-arrows-v',
    arrowMass: 'fa fa-arrows-v',
    arrowBirthYear: 'fa fa-arrows-v',
};


export default HeaderTable;