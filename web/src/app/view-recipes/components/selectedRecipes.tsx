import { Recipe } from "../objects/recipe"
import { IngredientsList } from "./ingredientsList"

interface Props {
  selectedRecipes: Recipe[]
  handleOnCloseButton: () => void
}

export const SelectedRecipes = (props: Props) => {
  console.log(props.selectedRecipes)
  return (
    <div className="modal-box h-2/3">
      <IngredientsList recipes={props.selectedRecipes} />
      
      <div className="modal-action justify-self-center" >
        <button className="btn" onClick={props.handleOnCloseButton}>Close</button>
      </div>
    </div>
  )
}