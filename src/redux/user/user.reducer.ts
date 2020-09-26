import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
    isOnline: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.TOOGLE_CONNECT_USER:
            return {
                ...state,
                isOnline: !state.isOnline
            }
        default:
            return state;
    }
}

export default userReducer;