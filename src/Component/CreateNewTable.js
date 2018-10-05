import React from "react";
import CreatorTD from "./CreatorTD";

export default class CreateNewTable extends React.Component {
    render() {
        const { homeworldServer,speciesServer,vehiclesServer   } = this.props;
        return (
            <tr>
                <td colSpan="11" className="new_table">
                    <div>
                        <h3>Homeworld</h3>
                        <table className="new_table2">
                            <tbody>
                            <tr>
                                <CreatorTD list={['name',homeworldServer.name,'climate',homeworldServer.climate]}/>
                            </tr>
                            <tr>
                                <CreatorTD list={['rotation_period',homeworldServer.rotation_period,'gravity',homeworldServer.gravity]}/>
                            </tr>

                            <tr>
                                <CreatorTD list={['orbital_period',homeworldServer.orbital_period,'terrain',homeworldServer.terrain]}/>
                            </tr>
                            <tr>
                                <CreatorTD list={['diameter',homeworldServer.diameter,'population',homeworldServer.population]}/>
                            </tr>
                            </tbody>
                        </table>

                        <h3>Species</h3>
                        <table className="new_table2">
                            <tbody>
                            <tr>
                                <CreatorTD list={['name',speciesServer.name,'classification',speciesServer.classification,'designation',speciesServer.designation]}/>
                            </tr>
                            </tbody>
                        </table>

                        <h3>Vehicles</h3>
                        <table className="new_table2 new_table3">
                            <tbody>
                            <tr>
                                <CreatorTD list={['name',vehiclesServer.name,'model',vehiclesServer.model,'manufacturer',vehiclesServer.manufacturer]}/>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </td>
            </tr>
        )
    }
}