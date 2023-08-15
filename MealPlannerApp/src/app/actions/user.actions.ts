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
    props<{ firstname: string, lastname: string, username: string, password: string }>()
)

export const registerError = createAction(
    'User Registration Error'
)

export const registerCancel = createAction(
    'User Registration Cancel'
)