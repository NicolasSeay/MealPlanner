import { createAction, props } from "@ngrx/store"
import { User } from "../models/user"


export const login = createAction(
    'User Login',
    props<{ username: string, password: string }>()
)

export const loginSuccess = createAction(
    'User Login Success',
    props<{ user: User }>()
)

export const loginInvalidCredentials = createAction(
    'User Login Invalid Credentials'
)

export const loginError = createAction(
    'User Login Error'
)

export const logout = createAction(
    'User Logout'
)

export const register = createAction(
    'User Registration',
    props<{ firstName: string, lastName: string, username: string, password: string }>()
)

export const registerSuccess = createAction(
    'User Registration Success',
    props<{ user: User }>()
)

export const registerError = createAction(
    'User Registration Error'
)