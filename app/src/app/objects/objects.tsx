export interface Ingredient {
  name: string,
  quantityInGrams: number
}

export interface Recipe {
  name: string,
  photoURL: string,
  source: string,
  ingredients: Ingredient[]
}