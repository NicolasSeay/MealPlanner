import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "../reducers/user.reducer";
import { RecipesState } from "../reducers/recipe.reducer";
import { ExpiredSessionErrorState, LoginErrorState, RegisterErrorState } from "../reducers/error.reducer";
import { IngredientsState } from "../reducers/ingredient.reducer";


// User selectors
export const selectUserStateFeature =
  createFeatureSelector<UserState>('user');

export const selectUser = createSelector(
  selectUserStateFeature,
  (userState: UserState) => userState.user
)

export const selectIsRegistering = createSelector(
  selectUserStateFeature,
  (userState: UserState) => userState.isRegistering
)


// Recipe selectors
export const selectRecipeStateFeature =
  createFeatureSelector<RecipesState>('recipes');

export const selectRecipes = createSelector(
  selectRecipeStateFeature,
  (recipes: RecipesState) => recipes
)


// Ingredient selectors
export const selectIngredientStateFeature =
  createFeatureSelector<IngredientsState>('ingredients');

export const selectIngredients = createSelector(
  selectIngredientStateFeature,
  (ingredients: IngredientsState) => ingredients
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

export const selectExpiredSessionErrorStateFeature =
  createFeatureSelector<ExpiredSessionErrorState>('expiredSessionError');

export const selectExpiredSessionError = createSelector(
  selectExpiredSessionErrorStateFeature,
  (e: ExpiredSessionErrorState) => e.message
)
