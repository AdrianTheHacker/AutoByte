'use client'

import { Recipe } from "../objects/recipe";
import convert from "convert";
import { Ingredient } from "../objects/ingredient";
import { useEffect, useState } from "react";

interface Props {
  recipes: Recipe[],
}

export const IngredientsList = (props: Props) => {
  const getIngredientsList = (recipes: Recipe[]): Ingredient[] => {
    console.log("newIQ + (IQ * RQ) =")
    const newIngredients: Ingredient[] = []
    
    // Start ChatGPT Code with modification
    recipes.forEach(recipe => {
      recipe.ingredients.forEach(ingredient => {
        const existing = newIngredients.find(
          (i) => i.name === ingredient.name
        );
  
        if (existing) {
          existing.quantity += ingredient.quantity;
        } else {
          newIngredients.push(JSON.parse(JSON.stringify(ingredient)));
          newIngredients[newIngredients.length - 1].quantity *= recipe.quantity
        }
      });
    });
    // End ChatGPT Code with modification

    return newIngredients
  }

  const [ingredientsList, setIngredientsList] = useState<Ingredient[]>(getIngredientsList(props.recipes))

  useEffect(() => {
    setIngredientsList(getIngredientsList(props.recipes))
  }, [props.recipes])

  return (
    <div tabIndex={0} className="bg-base-100 h-56 overflow-x-auto overflow-y-scroll">
      <h2 className="font-bold">Ingredients List</h2>
      <table className="table table-zebra" >
        <tbody>
          {ingredientsList.map((ingredient) => {
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