import { LoginErrorState, RegisterErrorState } from "./reducers/error.reducer";
import { RecipesState } from "./reducers/recipe.reducer";
import { UserState } from "./reducers/user.reducer";

export type AppState = {
    userState: UserState,
    recipesState: RecipesState,
    loginErrorState: LoginErrorState,
    registerErrorState: RegisterErrorState
}