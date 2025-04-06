import { useEffect, useState } from "react"
import { Recipe } from "../objects/recipe"
import { IngredientsList } from "./ingredientsList"
import { RecipesList } from "./recipesList"

interface Props {
  selectedRecipes: Recipe[],
  setSelectedRecipes: (newRecipes: Recipe[]) => any,
  handleOnCloseButton: () => void
}

export const SelectedRecipes = (props: Props) => {
  const [showNoneSelectedAlert, setShowNoneSelectedAlert] = useState<boolean>(false)

  useEffect(() => {
    if(!showNoneSelectedAlert) { return }
    const intervalId = setInterval(() => {
      setShowNoneSelectedAlert(false)
    }, 5000)
    return () => clearInterval(intervalId)
  }, [showNoneSelectedAlert])

  return (
    <>
      
      <div className="modal-box h-2/3">
        <RecipesList recipes={props.selectedRecipes} setRecipesList={props.setSelectedRecipes}/>
        <IngredientsList recipes={props.selectedRecipes} />
        
        <div className="modal-action justify-self-center" >
          <button className="btn" onClick={props.handleOnCloseButton}>Close</button>
        </div>
      </div>
    </>
  )
}