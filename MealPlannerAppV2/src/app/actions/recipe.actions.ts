import { createAction, props } from "@ngrx/store";
import { Recipe } from "../models/recipe";


export const createRecipe = createAction(
    'Create Recipe'
)

export const updateRecipe = createAction(
    'Update Recipe',
    props<{ recipe: Recipe }>()
)

export const deleteRecipe = createAction(
    'Delete Recipe',
    props<{ id: number }>()
)
