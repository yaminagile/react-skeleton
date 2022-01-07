import { applyMiddleware, compose, createStore } from "redux";
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import rootReducer from "./reducers";
import apiMiddleware from './middleware/api';

const persistConfig = {
    key: 'device-management-portal',
    storage
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    persistReducer(persistConfig, rootReducer),
    composeEnhancers(applyMiddleware(thunk, apiMiddleware))
);

export const persistor = persistStore(store);

export default store;