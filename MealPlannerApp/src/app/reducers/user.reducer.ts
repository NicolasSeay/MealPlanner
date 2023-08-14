import { createReducer, on } from "@ngrx/store";
import { User } from "../models/user";
import { loginInvalidCredentials, loginSuccess, logout, register, registerError, registerSuccess } from "../actions/user.actions";


export type UserState = User

export const initialUserState: UserState = {
    id: -1,
    firstName: '',
    lastName: ''
}

export const invalidCredentialsUserState: UserState = {
    id: 0,
    firstName: '',
    lastName: ''
}

export const userReducer = createReducer(
    initialUserState,
    on(loginSuccess, (user) => user),
    on(loginInvalidCredentials, () => invalidCredentialsUserState),
    on(register, () => initialUserState),
    on(logout, () => initialUserState)
)