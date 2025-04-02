import { Ingredient } from "./ingredient"

export interface Recipe {
  name: string,
  description: string,
  ingredients: Ingredient[],
  credits: string,
  // imageURL: string
}