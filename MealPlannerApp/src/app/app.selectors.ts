import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "./reducers/user.reducer";
import { RecipesState } from "./reducers/recipe.reducer";
import { LoginErrorState, RegisterErrorState } from "./reducers/error.reducer";

// User selectors
export const selectUserStateFeature =
  createFeatureSelector<UserState>('user');

export const selectUser = createSelector(
    selectUserStateFeature,
    (user: UserState) => user
)


// Recipe selectors
export const selectRecipeStateFeature =
  createFeatureSelector<RecipesState>('recipes');

export const selectRecipes = createSelector(
    selectRecipeStateFeature,
    (recipes: RecipesState) => recipes
)


// Error selectors
export const selectLoginErrorStateFeature =
  createFeatureSelector<LoginErrorState>('loginError');

export const selectLoginError = createSelector(
  selectLoginErrorStateFeature,
  (e: LoginErrorState) => e.message
)

export const selectRegisterErrorStateFeature =
  createFeatureSelector<RegisterErrorState>('registerError');

export const selectRegisterError = createSelector(
  selectRegisterErrorStateFeature,
  (e: RegisterErrorState) => e.message
)
