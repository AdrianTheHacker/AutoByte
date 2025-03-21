export interface Ingredient {
  name: string,
  quantityInGrams: number
}

export interface Recipe {
  name: string,
  description: string,
  photoURL: string,
  source: string,
  ingredients: Ingredient[]
}