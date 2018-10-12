import React from 'react';
import { render } from 'react-dom'
import App from "./Component/App";
import { composeWithDevTools } from 'redux-devtools-extension';

import logger from 'redux-logger';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'
import saga from './saga';

import reducer from './reducers'



const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer,composeWithDevTools(applyMiddleware(sagaMiddleware,logger)));
sagaMiddleware.run(saga) //

window.store = store;

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementsByClassName('container')[1]
);






