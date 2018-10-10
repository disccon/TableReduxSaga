import {takeLatest, all, takeEvery, select, put, race} from 'redux-saga/effects';
import {getData, getDataTable} from "../api";
import {makeSagaRequest, ArrowSagaRequest, SelectedSagaRequest, NewTableSagaRequest} from "../helpers/makeSagaRequest";


function* loading() {
    yield takeLatest('LOADING',makeSagaRequest(getData)) //можно слушать не только action а масив из action
}
export function* choose() {
    yield takeLatest('CHOOSE',SelectedSagaRequest()) //можно слушать не только action а масив из action
}
export function* arrows() {
    yield takeLatest('ARROW',ArrowSagaRequest()) //можно слушать не только action а масив из action
}

export function* newTable() {
    yield takeLatest('NEWTABLE',NewTableSagaRequest(getDataTable)) //можно слушать не только action а масив из action
}

export default function* () {
    yield all([
        loading(),
        choose(),
        arrows(),
        newTable(),
    ])
}

