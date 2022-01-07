import {
    LOGIN_S,
    LOGIN_F,
    LOGOUT
} from '../constants/types';

const initialState = {
    user: undefined,
    error: undefined,
    codeSent: undefined
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_S:
            return { ...state, user: action.payload.data };
        case LOGIN_F:
        case LOGOUT:
            return initialState;
        default:
            return state;
    }
}

export default authReducer;