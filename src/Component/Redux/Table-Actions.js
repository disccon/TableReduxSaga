export const c = {
    CREACT_TABLE:"CREACT_TABLE",
    GET_TABLE:"GET_TABLE",
    GET_TABLE_VEHICLES:"PUT_TABLE_VEHICLES",
    GET_ISOPEN_FALSE:"GET_ISOPEN_FALSE",

    CHANGE_FILTER_GENDER:"CHANGE_FILTER_GENDER",
    CHANGE_FILTER_COLOR:"CHANGE_FILTER_COLOR",
    CHANGE_FILTER_MASS:"CHANGE_FILTER_MASS",

    SORTING_NAME:"SORTING_NAME",
    SORTING_NAME_REVERSE:"SORTING_NAME_REVERSE",
    SORTING_MASS:"SORTING_MASS",
    SORTING_MASS_REVERSE:"SORTING_MASS_REVERSE",
    SORTING_HEIGHT:"SORTING_HEIGHT",
    SORTING_HEIGHT_REVERSE:"SORTING_HEIGHT_REVERSE",
    SORTING_BIRTH_YEAR:"SORTING_BIRTH_YEAR",
    SORTING_BIRTH_YEAR_REVERSE:"SORTING_BIRTH_YEAR_REVERSE",

    PUT_TABLE7:"PUT_TABLE7"
}

export const creat_TableAction = (results) => {
    return {
        type: c.CREACT_TABLE,
        results: results.results
    }
}
export const get_TableAction = (tableID,homeFromServer,speciesFromServer,isOpen) => {
    return {
        type: c.GET_TABLE,
        tableID:tableID,
        homeworld:homeFromServer,
        species:speciesFromServer,
        isOpen:isOpen,
    }
}
export const get_vehicles_TableAction = (tableID,homeFromServer,speciesFromServer,vehiclesFromServer,isOpen) => {
    return {
        type: c.GET_TABLE_VEHICLES,
        tableID:tableID,
        homeworld:homeFromServer,
        species:speciesFromServer,
        vehicles:vehiclesFromServer,
        isOpen:isOpen,
    }
}
export const get_isOpenFalseAction = (tableID) => {
    return {
        type: c.GET_ISOPEN_FALSE,
        tableID:tableID,
    }
}


export const changeFilterAction = (event,name) => {
    if (name === 'Gender'){
        return {
            type: c.CHANGE_FILTER_GENDER,
            gender: event
        }
    }
    else if (name === 'Hair Color'){
        return {
            type: c.CHANGE_FILTER_COLOR,
            hair_color: event
        }
    }
    else if (name === 'Mass'){
        return {
            type: c.CHANGE_FILTER_MASS,
            mass: event
        }
    }
}
export const sorting_nameAction = (nameSort,reverseSort_name) => {
    if(nameSort === true){
        return {
            type: c.SORTING_NAME_REVERSE,
            reverseSort_name: reverseSort_name,
        }
    }
    else{
        return {
            type: c.SORTING_NAME,
        }
    }
}
export const sorting_massAction = (massSort,reverseSort_mass) => {
        if(massSort === true){
            return {
                type: c.SORTING_MASS_REVERSE,
                reverseSort_mass: reverseSort_mass,
            }
        }
        else{
            return {
                type: c.SORTING_MASS,
            }
        }
}
export const sorting_heightAction = (heightSort,reverseSort_height) => {
    if(heightSort === true){
        return {
            type: c.SORTING_HEIGHT_REVERSE,
            reverseSort_height: reverseSort_height,
        }
    }
    else{
        return {
            type: c.SORTING_HEIGHT,
        }
    }
}
export const sorting_birth_yearAction = (birth_yearSort,reverseSort_birth_year) => {
    if(birth_yearSort === true){
        return {
            type: c.SORTING_BIRTH_YEAR_REVERSE,
            reverseSort_birth_year: reverseSort_birth_year,
        }
    }
    else{
        return {
            type: c.SORTING_BIRTH_YEAR,
        }
    }
}




