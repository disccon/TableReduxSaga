import {c} from "./Table-Actions";

export function TableReduceer(oldState = {
        gender: 'all',
        hair_color: 'all',
        mass: 'all',
        massSort: false,
        reverseSort_mass: false,
        nameSort: false,
        reverseSort_name: false,
        heightSort: false,
        reverseSort_height: false,
        birth_yearSort: false,
        reverseSort_birth_year: false,
        results: [],
}, action){
    switch (action.type) {
        case c.CREACT_TABLE:
            return {
                ...oldState,
                results: action.results
            };
        case c.GET_TABLE:
            let newTableList = {...oldState};
            newTableList.results.forEach((t,index) => {
                if (t.created === action.tableID) {
                    newTableList.results[index] ={
                        ...t,
                        homeworldServer: action.homeworld,
                        speciesServer:action.species,
                        vehiclesServer:{name:'unknown',model:'unknown',manufacturer:'unknown' },
                        isOpen:true,
                    }
                }
            });
            return newTableList;
        case c.GET_TABLE_VEHICLES:
            let newTableList2 = {...oldState};
            newTableList2.results.forEach((t,index) => {
                if (t.created === action.tableID) {
                    newTableList2.results[index] ={
                        ...t,
                        homeworldServer: action.homeworld,
                        speciesServer:action.species,
                        vehiclesServer:action.vehicles,
                        isOpen:true,
                    }
                }
            });
            return newTableList2;
        case c.GET_ISOPEN_FALSE:
            let newTableList3 = {...oldState};
            newTableList3.results.forEach((t,index) => {
                if (t.created === action.tableID) {
                    newTableList3.results[index] ={
                        ...t,
                        homeworldServer:[],
                        speciesServer:[],
                        vehiclesServer:[],
                        isOpen:false,
                    }
                }
            });
            return newTableList3;
        case c.CHANGE_FILTER_GENDER:
            return {
                ...oldState,
                gender: action.gender
            };
        case c.CHANGE_FILTER_COLOR:
            return {
                ...oldState,
                hair_color: action.hair_color
            };

        case c.CHANGE_FILTER_MASS:
            return {
                ...oldState,
                mass: action.mass
            };
        case c.SORTING_NAME:
            return {
                ...oldState,
                nameSort: true,
                massSort:false,
                reverseSort_mass:false,
                heightSort:false,
                reverseSort_height:false,
                birth_yearSort:false,
                reverseSort_birth_year:false,
            };
        case c.SORTING_NAME_REVERSE:
            return {
                ...oldState,
                reverseSort_name: !action.reverseSort_name
            };
        case c.SORTING_MASS:
            return {
                ...oldState,
                massSort:true,
                nameSort:false,
                reverseSort_name:false,
                heightSort:false,
                reverseSort_height:false,
                birth_yearSort:false,
                reverseSort_birth_year:false,
            };
        case c.SORTING_MASS_REVERSE:
            return {
                ...oldState,
                reverseSort_mass: !action.reverseSort_mass
            };
        case c.SORTING_HEIGHT:
            return {
                ...oldState,
                heightSort:true,
                massSort:false,
                nameSort:false,
                reverseSort_mass:false,
                reverseSort_name:false,
                birth_yearSort:false,
                reverseSort_birth_year:false,
            };
        case c.SORTING_HEIGHT_REVERSE:
            return {
                ...oldState,
                reverseSort_height: !action.reverseSort_height
            };
        case c.SORTING_BIRTH_YEAR:
            return {
                ...oldState,
                birth_yearSort:true,
                heightSort:false,
                massSort:false,
                nameSort:false,
                reverseSort_mass:false,
                reverseSort_name:false,
                reverseSort_height:false,
            };
        case c.SORTING_BIRTH_YEAR_REVERSE:
            return {
                ...oldState,
                reverseSort_birth_year: !action.reverseSort_birth_year
            };
            default:
            if (!!oldState)
                return oldState;
            return{
                gender: 'all',
                hair_color: 'all',
                mass: 'all',
                massSort: false,
                reverseSort_mass: false,
                nameSort: false,
                reverseSort_name: false,
                heightSort: false,
                reverseSort_height: false,
                birth_yearSort: false,
                reverseSort_birth_year: false,
                results: [],
            }

    }
}