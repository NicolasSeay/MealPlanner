import { Ingredient } from "./ingredient"


export type Recipe = {
    id: number,
    userId: number,
    name: string,
    servings: number,
    prepTime: number,
    totalPrice: number,
    totalCals: number,
    notes: string,
    // ingredientList: Ingredient[]
}