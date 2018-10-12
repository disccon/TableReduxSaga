import React from "react";
import PropTypes from "prop-types";
import Table from "../Table/Table";


const  NewTable = ({ homeworldData ,speciesData, vehiclesData}) =>(
    <tr>
        <td colSpan="11" className="new_table">
            <div>
                {homeworldData && <h3>Homeworld</h3>}
                {homeworldData && <table className="new_table2">
                    <tbody>
                    <tr>
                        <Table list={['name',homeworldData.name,'climate',homeworldData.climate]}/>
                    </tr>
                    <tr>
                        <Table list={['rotation_period',homeworldData.rotation_period,'gravity',homeworldData.gravity]}/>
                    </tr>

                    <tr>
                        <Table list={['orbital_period',homeworldData.orbital_period,'terrain',homeworldData.terrain]}/>
                    </tr>
                    <tr>
                        <Table list={['diameter',homeworldData.diameter,'population',homeworldData.population]}/>
                    </tr>
                    </tbody>
                </table> }

                {speciesData && <h3>Species</h3> }
                {speciesData && <table className="new_table2">
                    <tbody>
                    <tr>
                        <Table list={['name',speciesData.name,'classification',speciesData.classification,'designation',speciesData.designation]}/>
                    </tr>
                    </tbody>
                </table>
                }

                {vehiclesData && <h3>Vehicles</h3>}
                {vehiclesData && <table className="new_table2 new_table3">
                    <tbody>
                    <tr>
                        <Table list={['name',vehiclesData.name,'model',vehiclesData.model,'manufacturer',vehiclesData.manufacturer]}/>
                    </tr>
                    </tbody>
                </table>}
            </div>
        </td>
    </tr>
)

NewTable.propTypes = {
    homeworldData: PropTypes.object,
    speciesData: PropTypes.object,
    vehiclesData: PropTypes.object,

};

NewTable.defaultProps = {
    homeworldData: {},
    speciesData: {},
    vehiclesData: {},
};


export default NewTable;