import { LoginErrorState, RegisterErrorState } from "./reducers/error.reducer";
import { IngredientsState } from "./reducers/ingredient.reducer";
import { RecipesState } from "./reducers/recipe.reducer";
import { UserState } from "./reducers/user.reducer";

export type AppState = {
    user: UserState,
    recipes: RecipesState,
    ingredients: IngredientsState,
    loginError: LoginErrorState,
    registerError: RegisterErrorState
}