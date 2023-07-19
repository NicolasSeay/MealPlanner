import { Recipe } from "./models/recipe";
import { User } from "./models/user";

export type AppState = {
    user: User,
    recipes: Recipe[],
}