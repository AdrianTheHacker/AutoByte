import { useEffect } from "react";
import { Recipe } from "../objects/recipe";
import { IngredientsList } from "./ingredientsList";

interface Props {
  recipe: Recipe
  handleOnCloseButton: () => void
}

export const RecipeMoreInfoBox = (props: Props) => {

  return (
    <div className="modal-box h-2/3">
      <h3 className="font-bold text-lg">{props.recipe.name}</h3>
      <p className="py-4 text-left">{props.recipe.description}</p>
      <IngredientsList recipes={[props.recipe]} />
      <div className="modal-action justify-self-center" >
          <button className="btn" onClick={props.handleOnCloseButton}>Close</button>
      </div>
    </div>
  )
}