import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
    isOnline: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: !state.isOnline
            }
        default:
            return state;
    }
}

export default userReducer;