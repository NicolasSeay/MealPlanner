import { createReducer, on } from "@ngrx/store";
import { User } from "../models/user";
import { loginSuccess, logout } from "../actions/user.actions";


export type UserState = User

export const initialUserState: User = {
    id: -1,
    firstName: '',
    lastName: ''
}

export const UserReducer = createReducer(
    initialUserState,
    on(loginSuccess, (user) => user),
    on(logout, () => initialUserState)
)