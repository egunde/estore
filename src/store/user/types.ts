
export const USER_CREATED = "USER_CREATED"
export const USER_LOGOUT = "USER_LOGOUT"

export interface UserState {
    id: string,
    name: string,
    email: string,
}

export interface UserCreatedAction {
    type: typeof USER_CREATED;
    payload: {
        id: string,
        name: string,
        email: string,
    };
}

export interface UserLogoutAction {
    type: typeof USER_LOGOUT;
    payload: null
}

export type UserActionTypes =
    | UserCreatedAction
    | UserLogoutAction