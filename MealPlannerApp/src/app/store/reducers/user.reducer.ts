import { createReducer, on } from "@ngrx/store";
import { User } from "../../models/user";
import { loginSuccess, logout, registerBegin, registerCancel, registerError, registerSuccess } from "../actions/user.actions";


export type UserState = {
    user: User,
    isRegistering: boolean,
}

export const initialUserState: UserState = {
    user: {
        id: -1,
        firstname: '',
        lastname: '',
    },
    isRegistering: false,
}

export const userReducer = createReducer(
    initialUserState,
    on(loginSuccess, (state, action) => { return {...state, user: action.user} }),
    on(registerBegin, (state) => { return {...state, isRegistering: true} }),
    on(registerError, (state, action) => {
        return action.errorMessage == "Username Taken" ? state : {...state, isRegistering: false}
    }),
    on(registerCancel, registerSuccess, (state) => { return {...state, isRegistering: false} }),
    on(logout, () => initialUserState),
)