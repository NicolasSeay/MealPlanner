import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "./reducers/user.reducer";
import { RecipesState } from "./reducers/recipe.reducer";

// User selectors
export const selectUserStateFeature =
  createFeatureSelector<UserState>('user');

export const selectUser = createSelector(
    selectUserStateFeature,
    (user: UserState) => user
)

export const selectUserId = createSelector(
    selectUserStateFeature,
    (user: UserState) => user.id
)


// Recipe selectors
export const selectRecipeStateFeature =
  createFeatureSelector<RecipesState>('recipe');

export const selectRecipes = createSelector(
    selectRecipeStateFeature,
    (recipes: RecipesState) => recipes
)