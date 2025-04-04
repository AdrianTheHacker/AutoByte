'use client'

import { Recipe } from "../objects/recipe";
import convert from "convert";
import { Ingredient } from "../objects/ingredient";

interface Props {
  recipes: Recipe[],
}

export const IngredientsList = (props: Props) => {
  // Find where the ingredient quantities become NaN

  const getIngredientsList = (recipes: Recipe[]): Ingredient[] => {
    return []
  }

  return (
    <div tabIndex={0} className="bg-base-100 h-56 overflow-x-auto overflow-y-scroll">
      <h2 className="font-bold">Ingredients List</h2>
      <table className="table table-zebra" >
        <tbody>
          {getIngredientsList(props.recipes).map((ingredient) => {
            return (<tr key={ingredient.name}>
              <td>{ingredient.name}</td>
              <td>{ingredient.quantity == 0 ? "For Taste" : ingredient.quantity}</td>
              <td>{ingredient.units == "Picks" ? "" : ingredient.units}</td>
            </tr> 
          )})}
        </tbody>
      </table>
    </div>
  )
}