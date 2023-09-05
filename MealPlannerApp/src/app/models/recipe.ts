import { Ingredient } from "./ingredient"
import { Instruction } from "./instruction"

export type Recipe = {
    id: number,
    userId: number,
    name: string,
    servings: number,
    prepTime: number,
    notes: string,
    ingredients: Ingredient[],
    instructions: Instruction[]
}