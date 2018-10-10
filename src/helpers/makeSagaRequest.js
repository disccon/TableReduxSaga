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


export function SelectedSagaRequest() {
    return function* (action) {
        try {
            if (action.payload === "Gender") {
                yield put({
                    type: `${action.type}_GENDER_SUCCESS`,
                    target: action.target,
                })
            }
            else if (action.payload === "Hair Color") {
                yield put({
                    type: `${action.type}_HAIRCOLOR_SUCCESS`,
                    target: action.target,
                })
            }
            else if  (action.payload === "Mass") {
                yield put({
                    type: `${action.type}_MASS_SUCCESS`,
                    target: action.target,
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

export function ArrowSagaRequest() {
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



// export default function makeSagaRequest(getData) {
//     return function* (action) {
//         yield put({
//             type: `${action.type}_PENDING`,
//         });
//         try {
//             const { result, timeout } = yield race({ //race кто первее вызоветься из двух и больше call
//                 result: call(getData, action.payload),
//                 timeout: call(delay, 1000), //delay  через 1000 ds
//             });
//
//             console.log('11111111111',result,timeout)
//             if (result) {
//                 yield put({
//                     type: `${action.type}_SUCCESS`,
//                     result,
//                 });
//                 return result;
//             } else {
//                 yield put({
//                     type: `${action.type}_TIMEOUT`,
//                 });
//             }
//         } catch (error) {
//
//             yield put({
//                 type: `${action.type}_FAILURE`,
//                 error,
//             });
//         }
//     };
// }





