import { combineReducers } from 'redux';

import splash from './splash';
import api from './api';
import auth from './auth';

const rootReducer = combineReducers({
    splash,
    api,
    auth
})

export default rootReducer;