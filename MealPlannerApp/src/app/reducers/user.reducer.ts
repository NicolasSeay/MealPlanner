import { createReducer, on } from "@ngrx/store";
import { User } from "../models/user";
import { loginSuccess, logout, registerError } from "../actions/user.actions";


export type UserState = User

export const initialUserState: UserState = {
    id: -1,
    firstName: '',
    lastName: ''
}

export const userReducer = createReducer(
    initialUserState,
    on(loginSuccess, (user) => user),
    on(registerError, () => initialUserState),
    on(logout, () => initialUserState)
)