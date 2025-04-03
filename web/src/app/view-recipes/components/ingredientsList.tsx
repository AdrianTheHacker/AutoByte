'use client'

import { Recipe } from "../objects/recipe";
import convert from "convert";
import { Ingredient } from "../objects/ingredient";

interface Props {
  recipes: Recipe[],
}

export const IngredientsList = (props: Props) => {
  const getIngredientsList = (recipes: Recipe[]): Ingredient[] => {
    {/* 
      *** For version one, assume units are always equal ***

      Create array for each ingredient
      For each recipe:
        For each ingredient
          If ingredient isn't in newIngredientsList
            Add ingredient to newIngredientsList
          If ingredient is in newIngredientsList
            Combine the quantities of both ingredients
      set ingredientsList to newIngredientsList
    */}

    const newIngredientsList: Ingredient[] = []
    
    for(let recipesIndex = 0; recipesIndex < recipes.length; recipesIndex++) {
      for(let ingredientsIndex = 0; ingredientsIndex < recipes[recipesIndex].ingredients.length; ingredientsIndex++) {
        const ingredient: Ingredient = recipes[recipesIndex].ingredients[ingredientsIndex]
        ingredient.quantity *= recipes[recipesIndex].quantity
        ingredient.units = ingredient.units.toLowerCase()

        // indexOf doesn't work with Ingredient[]
        // Rewrite this and the indexOf statement below to not use "indexOf()"
        if(newIngredientsList.indexOf(ingredient) === -1) { // Ingredient isn't in newIngredientsList
          newIngredientsList.push(ingredient)
          continue
        }

        const newIngredientsIndex: number = newIngredientsList.indexOf(ingredient)

        if(ingredient.units === "Picks") {
          newIngredientsList[newIngredientsIndex].quantity += ingredient.quantity
          continue
        }

        newIngredientsList[newIngredientsIndex].quantity += convert(ingredient.quantity, ingredient.units).to(newIngredientsList[newIngredientsIndex].units).quantity
      }
    }

    for(let newIngredientsIndex = 0; newIngredientsIndex < newIngredientsList.length; newIngredientsIndex++) {
      if(newIngredientsList[newIngredientsIndex].units === "") continue
      if(newIngredientsList[newIngredientsIndex].units === "picks") {
        newIngredientsList[newIngredientsIndex].units = ""
        continue
      }
      
      const bestQuantity = convert(newIngredientsList[newIngredientsIndex].quantity, newIngredientsList[newIngredientsIndex].units).to("best").quantity
      const bestUnits = convert(newIngredientsList[newIngredientsIndex].quantity, newIngredientsList[newIngredientsIndex].units).to("best").unit

      newIngredientsList[newIngredientsIndex].quantity = Math.round((bestQuantity + Number.EPSILON) * 100) / 100
      newIngredientsList[newIngredientsIndex].units = bestUnits
    }

    return newIngredientsList
  }

  return (
    <div tabIndex={0} className="bg-base-100 h-56 overflow-x-auto overflow-y-scroll">
      <h2 className="font-bold">Ingredients List</h2>
      <table className="table table-zebra" >
        <tbody>
          {getIngredientsList(props.recipes).map((ingredient) => (
            <tr key={ingredient.name}>
              <td>{ingredient.name}</td>
              <td>{ingredient.quantity == 0 ? "For Taste" : ingredient.quantity}</td>
              <td>{ingredient.units == "Picks" ? "" : ingredient.units}</td>
            </tr> 
          ))}
        </tbody>
      </table>
    </div>
  )
}