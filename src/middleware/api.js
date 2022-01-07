import axios from 'axios'
import { API_BASE } from '../constants/api'
import { API } from '../constants/types'
import { fetchFailed, fetchRequested, fetchSucceeded } from '../actions/api'
// import { showLoading, hideLoading } from 'react-redux-loading-bar'

const apiMiddleware = store => next => action => {

    if (next) next(action);

    const { type, payload } = action;

    if (type === API) {
        const {
            url,
            data,
            request = fetchRequested,
            success = fetchSucceeded,
            error = fetchFailed,
            method = 'get'
        } = payload;

        store.dispatch(request({ payload }));
        // store.dispatch(showLoading());

        return axios({
            baseURL: API_BASE.replace('http:', document.location.protocol || 'http:'), method, url, data
        }).then(res => {
            store.dispatch(success(res.data));

            // store.dispatch(hideLoading());

            return Promise.resolve(res.data);
        }).catch(err => {
            store.dispatch(error(err.response.data));

            // store.dispatch(hideLoading());

            return Promise.reject(err.response.data);
        });
    }
}

export default apiMiddleware;