import React, {Fragment} from 'react';
import CreatorTD from "./CreatorTD";
import {get_isOpenFalseAction, get_TableAction, get_vehicles_TableAction} from "./Redux/Table-Actions";
import CreateNewTable from "./CreateNewTable";

export default class Tbody extends React.Component{
    toggle_table(tableID,homeworld,species,vehicles,isOpen) {
        if(!isOpen) {
            fetch(homeworld,
                {
                    method: "GET",
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                        'accept': 'application/json'
                    },
                    mode: 'cors',
                })
                .then(result => result.json())
                .then(homeFromServer => {
                    fetch(species,
                        {
                            method: "GET",
                            headers: {
                                'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                                'accept': 'application/json'
                            },
                            mode: 'cors',
                        })
                        .then(result => result.json())
                        .then(speciesFromServer => {
                            fetch(vehicles,
                                {
                                    method: "GET",
                                    headers: {
                                        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                                        'accept': 'application/json'
                                    },
                                    mode: 'cors',
                                })
                                .then(result => result.json())
                                .then(vehiclesFromServer => {
                                    let action4 = get_vehicles_TableAction(tableID, homeFromServer, speciesFromServer, vehiclesFromServer, isOpen);
                                    this.props.store.dispatch(action4);
                                })
                                .catch(() => {
                                        let action3 = get_TableAction(tableID, homeFromServer, speciesFromServer, isOpen);
                                        this.props.store.dispatch(action3)
                                    }
                                )
                        })
                })
        }
         else if(isOpen){
            let action5 = get_isOpenFalseAction(tableID);
            this.props.store.dispatch(action5)
        }
    }
    render() {
        return (
            <tbody>
            {this.props.list.map((results,index) => {
                return <Fragment key={results.created}>
                    <tr>
                        <td>
                            <i className={ results.isOpen ? 'icon icon_close' :  'icon icon_open' }
                               onClick={this.toggle_table.bind(this,results.created,results.homeworld,results.species,results.vehicles,results.isOpen)}></i>
                        </td>
                        <CreatorTD list={[index+1,results.name, results.height, results.mass,results.hair_color,results.skin_color,results.eye_color,results.birth_year,results.gender,'Actions']}/>
                    </tr>
                    {results.isOpen &&
                    <CreateNewTable homeworldServer={results.homeworldServer} speciesServer={results.speciesServer} vehiclesServer={results.vehiclesServer}/>}
                </Fragment>
            })
            }
            </tbody>


        )
    }
}