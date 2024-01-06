import { createAction, props } from "@ngrx/store";
import { Recipe } from "../models/recipe";


export const viewRecipes = createAction(
    'View Recipes',
    props<{ userId: number }>()
)
export const viewRecipesSuccess = createAction(
    'View Recipes Success',
    props<{ recipes: Recipe[] }>()
)
export const viewRecipesError = createAction(
    'View Recipes Error',
    props<{ error: any }>()
)

// create or update recipe
export const saveRecipe = createAction(
    'Update Recipe',
    props<{ recipe: Recipe }>()
)

export const deleteRecipe = createAction(
    'Delete Recipe',
    props<{ id: number }>()
)
