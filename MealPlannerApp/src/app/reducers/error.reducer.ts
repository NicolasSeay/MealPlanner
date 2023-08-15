import { createReducer, on } from "@ngrx/store";
import { login, register, registerCancel, registerError } from "../actions/user.actions";
import { RegisterError } from "../models/registerError";


export type RegisterErrorState = RegisterError

export const initialRegisterErrorState: RegisterErrorState = {
    registerError: ''
}

export const registerErrorReducer = createReducer(
    initialRegisterErrorState,
    on(registerError, () => { return { registerError: 'Registration error' }}),
    on(login, () => initialRegisterErrorState),
    on(register, () => initialRegisterErrorState),
    on(registerCancel, () => initialRegisterErrorState)
)