import {applyMiddleware, compose, createStore} from "redux";
import createSagaMiddleware from 'redux-saga'
import mainReducer from "../mainReducer/mainReducer";
import mainSaga from "../mainSaga/mainSaga";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const storeConfig = () => {
    let sagaMiddleWare = createSagaMiddleware();
    let middlewares = [sagaMiddleWare];
    let enhancers = [applyMiddleware(...middlewares)];
    let store = createStore(mainReducer, composeEnhancers(...enhancers));

    sagaMiddleWare.run(mainSaga);

    return store;
}

export default storeConfig;

