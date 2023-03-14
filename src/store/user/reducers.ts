import {
    USER_CREATED,
    USER_LOGOUT,
    UserState,
    UserActionTypes,
} from "./types";

const initialState: UserState = {
    id: '',
    name: '',
    email: '',
};

export function userReducer(
    state = initialState,
    action: UserActionTypes
): UserState {
    switch (action.type) {
        case USER_CREATED:
            return { 
                ...state, 
                id: action.payload.id,
                name: action.payload.name,
                email: action.payload.email,
            };
        case USER_LOGOUT:
            return initialState
        default:
            return state;
    }
}