import { createReducer, on } from "@ngrx/store"
import { Recipe } from "../models/recipe"
import { viewRecipes, viewRecipesSuccess } from "../actions/recipe.actions"
import { logout } from "../actions/user.actions"

export type RecipesState = Recipe[]

export const initialRecipeState: RecipesState = []

export const recipeReducer = createReducer(
    initialRecipeState,
    on(viewRecipesSuccess, (recipes) => recipes),
    on(logout, () => initialRecipeState)
)