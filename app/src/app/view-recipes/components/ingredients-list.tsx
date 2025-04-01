'use client'

import Recipe from "../../components/objects/recipe"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { numericQuantity } from 'numeric-quantity';
import convert from "convert";
import Ingredient from "../../components/objects/ingredient";

interface Props {
  recipes: Recipe[],
  setIngredientsList: Dispatch<SetStateAction<Ingredient[]>>,
  ingredientsList: Ingredient[]
}

export const IngredientsList = (props: Props) => {

  const getFormattedIngredient = (ingredient: string): Ingredient => {
    const formattedIngredient: Ingredient = {
      name: "",
      quantity: 0,
      units: ""
    }

    formattedIngredient.name = ingredient.split(" [")[0]
    if (typeof(ingredient.split(" [")[1]) != "undefined") {
      if(ingredient.split(" [")[1].split(" ")[0] === "Any") formattedIngredient.quantity = 0 // anything without specified quantity will always be 0
      else formattedIngredient.quantity = numericQuantity(ingredient.split(" [")[1].split(" ")[0])
    }
    formattedIngredient.units = ingredient.split(" [")[1].split(" ")[1].slice(0, -1)

    return formattedIngredient
  }

  // TODO: Create function for adding recipes to ingredients list.
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
      for(let ingredientsIndex = 0; ingredientsIndex < recipes[recipesIndex].Ingredients.length; ingredientsIndex++) {
        const formattedIngredient: Ingredient = getFormattedIngredient(recipes[recipesIndex].Ingredients[ingredientsIndex])
        formattedIngredient.quantity *= recipes[recipesIndex].Quantity
        formattedIngredient.units = formattedIngredient.units.toLowerCase()

        if(newIngredientsList.indexOf(formattedIngredient) === -1) { // Ingredient isn't in newIngredientsList
          newIngredientsList.push(formattedIngredient)
          continue
        }

        const newIngredientsIndex: number = newIngredientsList.indexOf(formattedIngredient)

        if(formattedIngredient.units === "Picks") {
          newIngredientsList[newIngredientsIndex].quantity += formattedIngredient.quantity
          continue
        }

        newIngredientsList[newIngredientsIndex].quantity += convert(formattedIngredient.quantity, formattedIngredient.units).to(newIngredientsList[newIngredientsIndex].units).quantity
      }
    }

    for(let newIngredientsIndex = 0; newIngredientsIndex < newIngredientsList.length; newIngredientsIndex++) {
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

  useEffect(() => {
    props.setIngredientsList(getIngredientsList(props.recipes))
  }, [props.recipes])

  return (
    <div tabIndex={0} className="bg-base-100 overflow-x-auto">
      <table className="table table-zebra" >
        <tbody>
          {props.ingredientsList.map((ingredient, ingredientIndex) => (
            <tr key={ingredient.name.concat(String(ingredientIndex))}>
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
