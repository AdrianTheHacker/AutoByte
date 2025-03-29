'use client'

import Recipe from "../../components/objects/recipe"
import { useEffect, useState } from "react"
import { numericQuantity } from 'numeric-quantity';

interface Props {
  recipes: Recipe[]
}

interface Ingredient {
  name: string,
  quantity: number,
  units: string
}

const ViewIngredientsList = (props: Props) => {

  const [ingredientsList, setIngredientsList] = useState<Ingredient[]>([
    {name: "Avocado", quantity: 3, units: "Picks"},
    {name: "Avocado", quantity: 3, units: "Picks"},
    {name: "Avocado", quantity: 3, units: "Picks"},
  ])

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

    recipes.forEach((recipe) => {
      recipe.Ingredients.forEach((ingredient) => {
        const formattedIngredient = getFormattedIngredient(ingredient)
        formattedIngredient.quantity *= recipe.Quantity

        for(let newIngredientsIndex = 0; newIngredientsIndex < newIngredientsList.length; newIngredientsIndex++) {
          if(newIngredientsList[newIngredientsIndex].name !== formattedIngredient.name) continue
          newIngredientsList[newIngredientsIndex].quantity += formattedIngredient.quantity
          return
        }
        
        newIngredientsList.push(formattedIngredient)
      })
    })

    return newIngredientsList
  }

  useEffect(() => {
    setIngredientsList(getIngredientsList(props.recipes))
  }, [props])

  return (
    <div tabIndex={0} className="collapse collapse-arrow bg-base-100 border-base-300 border">
      <input type="checkbox" />
      <div className="collapse-title font-semibold">Ingredients List</div>
      <div className="collapse-content text-sm">
        <table className="table table-zebra" >
          <tbody>
            {ingredientsList.map((ingredient, ingredientIndex) => {
              return (
                <tr key={ingredient.name.concat(String(ingredientIndex))}>
                  <td>{ingredient.name}</td>
                  <td>{ingredient.quantity}</td>
                  <td>{ingredient.units}</td>
                </tr>
              )
            })}
          </tbody>
         </table>
      </div>
    </div>
  )
}

export default ViewIngredientsList