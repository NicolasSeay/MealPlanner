import { createSelector } from "@ngrx/store";
import { AppState } from "./app.state";


export const selectAppStateFeature = (state: AppState) => state

export const selectUser = createSelector(
    selectAppStateFeature,
    (state: AppState) => state.user
)

export const selectRecipes = createSelector(
    selectAppStateFeature,
    (state: AppState) => state.recipes
)