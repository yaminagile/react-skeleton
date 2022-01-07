import {
    SHOW_SPLASH,
    HIDE_SPLASH
} from '../constants/types';

const initialState = {
    loading: undefined
};

const splashReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_SPLASH:
            return { ...state, loading: true };
        case HIDE_SPLASH:
            return { ...state, loading: false };
        default:
            return state;
    }
}

export default splashReducer;