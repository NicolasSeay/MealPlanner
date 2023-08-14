import { Recipe } from "./models/recipe";
import { User } from "./models/user";
import { RecipesState } from "./reducers/recipe.reducer";
import { UserState } from "./reducers/user.reducer";

export type AppState = {
    userState: UserState,
    recipesState: RecipesState
}