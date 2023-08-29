import { createReducer, on } from "@ngrx/store"
import { logout } from "../actions/user.actions"
import { Ingredient } from "../models/ingredient"
import { viewIngredientsSuccess } from "../actions/ingredient.actions"

export type IngredientsState = Ingredient[]

export const initialIngredientState: Ingredient[] = []

export const ingredientReducer = createReducer(
    initialIngredientState,
    on(viewIngredientsSuccess, (_, action) => action.ingredients),
    on(logout, () => initialIngredientState)
)