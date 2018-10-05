import React from "react";
import {changeFilterAction} from "./Redux/Table-Actions";



export default class Createlabel extends React.Component {
    change_select(event){
        let action2 = changeFilterAction(event.target.value,this.props.name);
        this.props.store.dispatch(action2);
    }
    render() {
        return (
            <label> {this.props.name}
                <select size="1" onChange={this.change_select.bind(this)}>
                    {this.props.list.map((results) => {
                        return <option value={results} key={results}>{results}</option>
                    })
                    }
                </select>
            </label>
        )
    }
}