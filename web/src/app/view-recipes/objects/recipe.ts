import { Ingredient } from "./ingredient"

export interface Recipe {
  id: string,
  name: string,
  description: string,
  ingredients: Ingredient[],
  // ingredients: any[],
  credits: string,
  quantity: number
  // imageURL: string
}