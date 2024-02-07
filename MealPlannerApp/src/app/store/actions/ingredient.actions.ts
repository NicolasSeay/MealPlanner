import { createAction, props } from "@ngrx/store";
import { Ingredient } from "../../models/ingredient";


export const viewIngredients = createAction(
    'View Ingredients',
    props<{ recipeId: number }>()
)

export const viewIngredientsSuccess = createAction(
    'View Ingredients Success',
    props<{ ingredients: Ingredient[] }>()
)

export const viewIngredientsError = createAction(
    'View Ingredients Error'
)