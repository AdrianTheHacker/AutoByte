'use client'

import Recipe from "../../components/objects/recipe"
import { useState } from "react"
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

  const [ingredientsList, setIngredientsList] = useState<Ingredient[]>([])

  const getFormattedIngredient = (ingredient: string): Ingredient => {
    const formattedIngredient: Ingredient = {
      name: "",
      quantity: 0,
      units: ""
    }

    formattedIngredient.name = ingredient.split(" [")[0]
    if (typeof(ingredient.split(" [")[1]) != "undefined") {
      if(ingredient.split(" [")[1].split(" ")[0] === "Any") formattedIngredient.quantity = -1
      else formattedIngredient.quantity = numericQuantity(ingredient.split(" [")[1].split(" ")[0])
    }
    formattedIngredient.units = ingredient.split(" [")[1].split(" ")[1].slice(0, -1)

    return formattedIngredient
  }

  const createIngredientsList = (recipes: Recipe[]): Ingredient[] => {
    
    return []
  }

  return (
    <div tabIndex={0} className="collapse collapse-arrow bg-base-100 border-base-300 border">
      <input type="checkbox" />
      <div className="collapse-title font-semibold">Ingredients List</div>
      <div className="collapse-content text-sm">
        <p>Ingredients</p>
        
        <table className="table table-zebra" >
          {props.recipes.map((recipe) => (
            <tbody key={recipe.id}>
              {recipe.Ingredients.map((ingredient) => {
                const formattedIngredient: Ingredient = getFormattedIngredient(ingredient)

                return (
                  <tr key={ingredient}>
                    <td>{formattedIngredient.name}</td>
                    <td>{formattedIngredient.quantity}</td>
                    <td>{formattedIngredient.units}</td>
                  </tr>
                )
              })}
            </tbody>
          ))}
         </table>
      </div>
    </div>
  )
}

export default ViewIngredientsList