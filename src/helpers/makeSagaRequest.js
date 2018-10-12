import {call, put} from "redux-saga/effects";




export function makeSagaRequest(getData) {
    return function* (action) {
        yield put({
            type: `${action.type}_PENDING`,
        });
        try {
            const results = yield call(getData,action.payload);
            yield put({
                type: `${action.type}_SUCCESS`,
                results,
            })
        } catch (error) {

            yield put({
                type: `${action.type}_FAILURE`,
                error,
            });
        }
    };
}


export function SetFilterSaga() {
    return function* (action) {
        try {
            if (action.sectorFilter === "Gender") {
                yield put({
                    type: `${action.type}_GENDER_SUCCESS`,
                    filter: action.filter,
                })
            }
            else if (action.sectorFilter === "Hair Color") {
                yield put({
                    type: `${action.type}_HAIRCOLOR_SUCCESS`,
                    filter: action.filter,
                })
            }
            else if  (action.sectorFilter === "Mass") {
                yield put({
                    type: `${action.type}_MASS_SUCCESS`,
                    filter: action.filter,
                })
            }
        } catch (error) {

            yield put({
                type: `${action.type}_FAILURE`,
                error,
            });
        }
    };
}

export function ArrowSaga() {
    return function* (action) {
        try {
                if(action.arrowClass === "fa fa-arrows-v" || action.arrowClass === "fa fa-arrow-up" ){
                    yield put({
                        type: `${action.type}_${action.arrowId}_SUCCESS`,
                        arrowClass: 'fa fa-arrow-down',
                    })
                }
                if(action.arrowClass === "fa fa-arrow-down" ){
                    yield put({
                        type: `${action.type}_${action.arrowId}_SUCCESS`,
                        arrowClass: 'fa fa-arrow-up',
                    })
                }
        } catch (error) {
            yield put({
                type: `${action.type}_FAILURE`,
                error,
            });
        }
    };
}




export function NewTableSagaRequest(getDataTable) {
    return function* (action) {
        //console.log('111111111',action,getDataTable)
        yield put({
            type: `${action.type}_PENDING`,
        });
        try {
            if (action.payload === undefined || action.payload === false) {
                const homeworldData = yield call(getDataTable,action.homeworld);
                const speciesData = yield call(getDataTable,action.species);
                const vehiclesData = yield call(getDataTable,action.vehicles);
                const newResults = [
                    ...action.results.slice(0, action.index),
                    { ...action.results[action.index], homeworldData: homeworldData, speciesData: speciesData, vehiclesData: vehiclesData,isOpen:true, },
                    ...action.results.slice(action.index + 1 ),
                ];
                yield put({
                    results: newResults,
                    type: `${action.type}_LOADING_SUCCESS`,
                })
            }
            if (action.payload === true ){
                const newResults = [
                    ...action.results.slice(0, action.index),
                    { ...action.results[action.index], homeworldData: null, speciesData: null, vehiclesData: null,isOpen:false, },
                    ...action.results.slice(action.index + 1 ),
                ];
                yield put({
                    results: newResults,
                    type: `${action.type}_DELETE`,
                })
            }
        } catch (error) {
            yield put({
                type: `${action.type}_FAILURE`,
                error,
            });
        }
    };
}








