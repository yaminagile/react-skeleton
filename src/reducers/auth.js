import {
    LOGIN_I,
    LOGIN_S,
    LOGIN_F,
    LOGOUT,
} from '../constants/types';

const initialState = {
    user: undefined,
    intermediate: undefined
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_I:
            return { ...state, intermediate: action.payload };
        case LOGIN_S:
            return { ...state, user: state.intermediate, intermediate: undefined };
        case LOGIN_F:
        case LOGOUT:
            return initialState;
        default:
            return state;
    }
}

export default authReducer;