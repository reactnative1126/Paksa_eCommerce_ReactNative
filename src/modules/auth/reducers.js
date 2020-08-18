import types from './types';

const initialState = {
    tabbar_visible: true,
    logged: false,
    user_info: null,
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case types.SET_USER:
            return {
                ...state,
                logged: true,
                user_info: action.payload,
            };
        case types.SIGN_OUT:
            return {
                ...state,
                logged: false,
                user_info: initialState
            };
        case types.TABBAR_VISIBLE:
            return {
                ...state,
                tabbar_visible: action.payload
            };
        default:
            return state;
    }
}