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
  const [fieldState, setFieldState] = useState<string[]>(["dock-active", "", ""])

  useEffect(() => {
    if(!showNoneSelectedAlert) { return }
    const intervalId = setInterval(() => {
      setShowNoneSelectedAlert(false)
    }, 5000)
    return () => clearInterval(intervalId)
  }, [showNoneSelectedAlert])

  const handleFieldStateChange = (newActiveFieldIndex: number) => {
    setFieldState(() => {
      const newFieldState: string[] = []
      
      fieldState.forEach((field, index) => {
        if(index === newActiveFieldIndex) newFieldState[index] = "dock-active"
        else newFieldState[index] = ""
      })

      return newFieldState
    })
  }

  return (
    <div className="modal-box h-2/3">
      <div className={`selectionPageContentHeight overflow-y-scroll ${fieldState[0] === "dock-active" ? "" : "hidden"}`}><RecipesList recipes={props.selectedRecipes} setRecipesList={props.setSelectedRecipes}/></div>
      <div className={`selectionPageContentHeight overflow-y-scroll ${fieldState[1] === "dock-active" ? "" : "hidden"}`}><IngredientsList recipes={props.selectedRecipes}/></div>
      <div className={`selectionPageContentHeight overflow-y-scroll ${fieldState[2] === "dock-active" ? "" : "hidden"}`}>
        <h2 className="font-bold">Ingredients List</h2>
        
      </div>

      <div className="dock dock-lg">
        <button className={`${fieldState[0]}`} onClick={() => handleFieldStateChange(0)}>
          <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt"><polyline points="1 11 12 2 23 11" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2"></polyline><path d="m5,13v7c0,1.105.895,2,2,2h10c1.105,0,2-.895,2-2v-7" fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2"></path><line x1="12" y1="22" x2="12" y2="18" fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2"></line></g></svg>
          <span className="dock-label">Recipes</span>
        </button>
        
        <button className={`${fieldState[1]}`} onClick={() => handleFieldStateChange(1)}>
          <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt"><polyline points="3 14 9 14 9 17 15 17 15 14 21 14" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2"></polyline><rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2"></rect></g></svg>
          <span className="dock-label">Ingredients</span>
        </button>
        
        <button className={`${fieldState[2]}`} onClick={() => handleFieldStateChange(2)}>
          <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"></path></svg>
          <span className="dock-label">Export</span>
        </button>

        <button onClick={props.handleOnCloseButton}>Close</button>
      </div>
    </div>
  )
}