import { createAction, props } from "@ngrx/store"
import { User } from "../../models/user"


export const login = createAction(
    'User Login',
    props<{ username: string, password: string }>()
)

export const loginSuccess = createAction(
    'User Login Success',
    props<{ user: User }>()
)

export const loginError = createAction(
    'User Login Error',
    props<{ errorMessage: string }>()
)

export const logout = createAction(
    'User Logout'
)

export const registerBegin = createAction(
    'User Registration Begin'
)

export const register = createAction(
    'User Registration',
    props<{ firstName: string, lastName: string, userName: string, password: string }>()
)

export const registerSuccess = createAction(
    'User Registration Success',
    props<{ username: string, password: string }>()
)

export const registerError = createAction(
    'User Registration Error',
    props<{ errorMessage: string }>()
)

export const registerCancel = createAction(
    'User Registration Cancel'
)