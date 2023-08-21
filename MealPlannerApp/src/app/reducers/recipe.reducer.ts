import { createReducer, on } from "@ngrx/store"
import { Recipe } from "../models/recipe"
import { viewRecipesSuccess } from "../actions/recipe.actions"
import { logout } from "../actions/user.actions"

export type RecipesState = Recipe[]

export const initialRecipeState: Recipe[] = []

export const recipeReducer = createReducer(
    initialRecipeState,
    on(viewRecipesSuccess, (_, action) => action.recipes),
    on(logout, () => initialRecipeState)
)