import { createReducer } from "@ngrx/store"
import { Recipe } from "../models/recipe"

export type RecipesState = Recipe[]

export const initialRecipeState: RecipesState = []

export const RecipeReducer = createReducer(
    initialRecipeState,
)