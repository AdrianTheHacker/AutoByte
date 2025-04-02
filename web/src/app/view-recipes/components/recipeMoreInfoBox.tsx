import { useEffect } from "react";
import { Recipe } from "../objects/recipe";
import { IngredientsList } from "./ingredientsList";

interface Props {
  recipe: Recipe
  handleOnCloseButton: () => void
}

export const RecipeMoreInfoBox = (props: Props) => {

  return (
    <div className="modal-box">
      <h3 className="font-bold text-lg">{props.recipe.name}</h3>
      <p className="py-4 text-left">{props.recipe.description}</p>
      <IngredientsList recipes={[props.recipe]} />
      <div className="modal-action">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn" onClick={props.handleOnCloseButton}>Close</button>
        </form>
      </div>
    </div>
  )
}