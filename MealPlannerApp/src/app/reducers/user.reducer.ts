import { createReducer, on } from "@ngrx/store";
import { User } from "../models/user";
import { loginSuccess, logout, registerError } from "../actions/user.actions";


export type UserState = User

export const initialUserState: UserState = {
    id: -1,
    firstname: '',
    lastname: ''
}

export const userReducer = createReducer(
    initialUserState,
    on(loginSuccess, (_, action) => action.user),
    on(logout, registerError, () => initialUserState),
)