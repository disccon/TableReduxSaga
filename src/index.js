import React from 'react';
import ReactDOM from 'react-dom';
import {TableReduceer} from "./Component/Redux/Table-reducers";
import {creat_TableAction} from "./Component/Redux/Table-Actions";
import Tbody from "./Component/Thoby";
import Thead from "./Component/Thead";
import CreateLabel from "./Component/CreateLebel";
import App from "./Component/App";
import { composeWithDevTools } from 'redux-devtools-extension';

import logger from 'redux-logger';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'
import saga from './saga';

import reducer from './reducer'


const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer,composeWithDevTools(applyMiddleware(sagaMiddleware,logger)));
sagaMiddleware.run(saga) //

window.store = store;

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementsByClassName('container')[1]
);









class Table extends React.Component{
    constructor(props) {
        super(props);

        this.store = createStore(TableReduceer);
        var state = this.store.getState();
        this.state = state;

        this.store.subscribe( ()=> {
            var state = this.store.getState();
            this.setState(state);
        })
        fetch("https://swapi.co/api/people/",
            {
                method: "GET",
                headers: {
                    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                    'accept': 'application/json'
                },
                mode: 'cors'
            })
            .then(result => result.json())
            .then(taskFromServer => {
                var action = creat_TableAction(taskFromServer);
                this.store.dispatch(action);
            })
    }

    render() {
        const {gender, hair_color, mass, results,massSort,reverseSort_mass,nameSort,reverseSort_name,reverseSort_height,
            heightSort, birth_yearSort,reverseSort_birth_year} = this.state;

        let filteredTable = results;
        let arrows_mass = 'fa fa-arrows-v';
        let arrows_name = 'fa fa-arrows-v';
        let arrows_height = 'fa fa-arrows-v';
        let arrows_birth_year = 'fa fa-arrows-v';

        if (gender === 'all' && hair_color === 'all' && mass === 'all')filteredTable = results;

        if( gender !== 'all') {
            if (gender === 'male') filteredTable = filteredTable.filter((t) => {
                return t.gender === 'male'
            });
            else  if(gender === 'female') filteredTable = filteredTable.filter((t) => {
                return t.gender === 'female'
            });
        }

        if( hair_color !== 'all') {
            if (hair_color === 'blond') filteredTable = filteredTable.filter((t) => {
                return t.hair_color === 'blond'
            });
            else  if(hair_color === 'brown') filteredTable = filteredTable.filter((t) => {
                return t.hair_color === 'brown'
            });
            else  if(hair_color === 'black') filteredTable = filteredTable.filter((t) => {
                return t.hair_color === 'black'
            });
            else  if(hair_color === 'red') filteredTable = filteredTable.filter((t) => {
                return t.hair_color === 'red'
            });
        }

        if(mass !== 'all') {
            if (mass === '50') filteredTable = filteredTable.filter((t) => {
                return t.mass < 50;
            });
            else if (mass === '50 - 100') filteredTable = filteredTable.filter((t) => {
                return t.mass >= 50 && t.mass < 100
            });
            else if (mass === '100 - 150') filteredTable = filteredTable.filter((t) => {
                return t.mass >= 100 && t.mass < 150
            });
            else if (mass === '150 >') filteredTable = filteredTable.filter((t) => {
                return t.mass >= 150
            });
        }


        if(massSort === false && reverseSort_mass === false ){
            arrows_mass = 'fa fa-arrows-v';
        }
        if(massSort === true ) {
            filteredTable = filteredTable.slice(0);
            filteredTable.sort(function (a, b) {
                return a.mass - b.mass;
            });
            arrows_mass = 'fa fa-arrow-down';
        }
        if(reverseSort_mass === true && massSort === true) {
             filteredTable.reverse()
             arrows_mass = 'fa fa-arrow-up';
        }


        if(heightSort === false && reverseSort_height === false ){
            arrows_height = 'fa fa-arrows-v';
        }
        if(heightSort === true ) {
            filteredTable = filteredTable.slice(0);
            filteredTable.sort(function (a, b) {
                return a.height - b.height;
            });
            arrows_height = 'fa fa-arrow-down';
        }
        if(reverseSort_height === true && heightSort === true) {
            filteredTable.reverse()
            arrows_height = 'fa fa-arrow-up';
        }


        if(birth_yearSort === false && reverseSort_birth_year === false ){
            arrows_birth_year = 'fa fa-arrows-v';
        }
        if(birth_yearSort === true ) {
            filteredTable = filteredTable.slice(0);
            filteredTable.sort(function (a, b) {
                var birthYearA = parseInt(a.birth_year,10)
                var birthYearB = parseInt(b.birth_year,10)

                if(isNaN(birthYearA)){
                    birthYearA = 9999999;
                }
                if(isNaN(birthYearB)){
                    birthYearB = 9999999;
                }
                    if (birthYearA  > birthYearB) {
                        return 1;
                    }
                    if (birthYearA < birthYearB) {
                        return -1;
                    }
                    return 0;
            });
            arrows_birth_year = 'fa fa-arrow-down';
        }
        if(reverseSort_birth_year === true && birth_yearSort === true) {
            filteredTable.reverse()
            arrows_birth_year = 'fa fa-arrow-up';
        }


        if(reverseSort_name === false && nameSort === false ){
            arrows_name = 'fa fa-arrows-v';
        }
        if(nameSort === true ) {
            filteredTable = filteredTable.slice(0);
            filteredTable.sort(function (a, b) {
                let x = a.name.toLowerCase();
                let y = b.name.toLowerCase();
                return x < y ? -1 : x > y ? 1 : 0;
            });
            arrows_name = 'fa fa-arrow-down';
        }
        if(reverseSort_name === true && nameSort === true) {
            filteredTable.reverse()
            arrows_name = 'fa fa-arrow-up';
        }
        return (
            <div>
                <div className="panel-title"><span>DataTables</span></div>
                <div className="panel_heading">
                    <CreateLabel name="Gender" list={['all','male','female']}
                                  store={this.store}/>
                    <CreateLabel name="Hair Color" list={['all','blond','brown','black','red']}
                                  store={this.store}/>
                    <CreateLabel name="Mass" list={['all','50','50 - 100','100 - 150','150 >']}
                                  store={this.store}/>
                </div>
                <div className="table1_wrapper">
                    <table className="table1">
                        <Thead arrows_mass={arrows_mass}
                               arrows_name={arrows_name}
                               arrows_height ={arrows_height}
                               arrows_birth_year ={arrows_birth_year}
                               store={this.store}
                               state={this.state}/>
                        <Tbody list={filteredTable}
                               store={this.store}/>
                    </table>
                </div>
            </div>
    )
    }
}
ReactDOM.render(<Table />, document.getElementsByClassName('container')[0]);