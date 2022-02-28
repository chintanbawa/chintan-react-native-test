import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleWare from 'redux-saga';

import pReducers from './reducers';
import rootSagas from './rootSagas';
import {persistStoreDevice} from './persistor';

const sagaMiddleWare = createSagaMiddleWare();

export const store = createStore(pReducers, applyMiddleware(sagaMiddleWare));

persistStoreDevice(store);

sagaMiddleWare.run(rootSagas);
