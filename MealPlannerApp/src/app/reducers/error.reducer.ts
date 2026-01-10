import { createReducer, on } from "@ngrx/store";
import { login, loginError, register, registerCancel, registerError } from "../actions/user.actions";
import { Error } from "../models/error";
import { viewRecipesError } from "../actions/recipe.actions";


export type LoginErrorState = Error
export const initialLoginErrorState: LoginErrorState = {
    message: ''
}
export const loginErrorReducer = createReducer(
    initialLoginErrorState,
    on(loginError, (_, action) => { 
        return { message: action.errorMessage }}),
    on(login, register, registerCancel, () => initialLoginErrorState)
)


export type RegisterErrorState = Error
export const initialRegisterErrorState: RegisterErrorState = {
    message: ''
}
export const registerErrorReducer = createReducer(
    initialRegisterErrorState,
    on(registerError, (_, action) => { 
        return {message: action.errorMessage }     
    }),
    on(login, register, registerCancel, () => initialRegisterErrorState)
)


export type ExpiredSessionErrorState = Error
export const initialExpiredSessionErrorState: ExpiredSessionErrorState = {
    message: ''
}
export const expiredSessionErrorReducer = createReducer(
    initialExpiredSessionErrorState,
    on(viewRecipesError, (_, action) => {
        return action.error.status == 401 ? { message: 'Session expired. Please log in again.' } : initialExpiredSessionErrorState;
    }),
    on(login, register, registerCancel, () => initialRegisterErrorState)
)