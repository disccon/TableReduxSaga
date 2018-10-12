import React, {Fragment} from "react";
import PropTypes from 'prop-types';
import Table from "../Table";
import uuid from 'uuid/v4';
import NewTable from "../NewTable";



const  ContentTable = ({ results,getNewTable}) =>(
    <tbody>
    {results.map((result,index) => {
        return <Fragment key={uuid()}>
                <tr>
                    <td>
                        <i className={ result.isOpen ? 'icon icon_close' :  'icon icon_open' }
                           onClick={() => getNewTable(result.isOpen,index,result.homeworld,result.species,result.vehicles)}>
                        </i>
                    </td>
                    <Table list={
                            [index+1,
                            result.name,
                            result.height,
                            result.mass,
                            result.hair_color,
                            result.skin_color,
                            result.eye_color,
                            result.birth_year,
                            result.gender,
                                'Actions']}/>
                </tr>
            {result.isOpen &&
                <NewTable homeworldData={result.homeworldData} speciesData={result.speciesData} vehiclesData={result.vehiclesData}/>}
        </Fragment>
    })
    }
    </tbody>
)

ContentTable.propTypes = {
    results: PropTypes.array,
    getNewTable: PropTypes.func,

};

ContentTable.defaultProps = {
    results:[],
};


export default ContentTable;