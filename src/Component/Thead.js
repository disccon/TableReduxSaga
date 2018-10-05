import React from "react";
import {
    sorting_birth_yearAction,
    sorting_heightAction,
    sorting_massAction,
    sorting_nameAction
} from "./Redux/Table-Actions";

export default class Thead extends React.Component{
    sorting_name(){
        let action = sorting_nameAction(this.props.state.nameSort,this.props.state.reverseSort_name);
        this.props.store.dispatch(action);
    }
    sorting_mass(){
        let action = sorting_massAction(this.props.state.massSort,this.props.state.reverseSort_mass);
        this.props.store.dispatch(action);
    }
    sorting_height(){
        let action = sorting_heightAction(this.props.state.heightSort,this.props.state.reverseSort_height);
        this.props.store.dispatch(action);
    }
    sorting_birth_year(){
        let action = sorting_birth_yearAction(this.props.state.birth_yearSort,this.props.state.reverseSort_birth_year);
        this.props.store.dispatch(action);
    }
    render() {
        return (
            <thead>
            <tr>
                {/*<Creator_TH list={['',' Number','Name','Height','Mass','Hair color','Skin color','Eye color','Birth year','Gender','Actions' ]}/>*/}
                <th>

                </th>
                <th>
                    Number
                </th>
                <th>
                    Name <i className={this.props.arrows_name} onClick={this.sorting_name.bind(this)}></i>
                </th>
                <th>
                    Height <i className={this.props.arrows_height} onClick={this.sorting_height.bind(this)}></i>
                </th>
                <th>
                    Mass <i className={this.props.arrows_mass} onClick={this.sorting_mass.bind(this)} ></i>
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
                    Birth year <i className={this.props.arrows_birth_year} onClick={this.sorting_birth_year.bind(this)}></i>
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
    }
}
