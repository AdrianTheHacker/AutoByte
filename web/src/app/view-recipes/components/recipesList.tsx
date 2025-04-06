import Link from "next/link"
import { Recipe } from "../objects/recipe"

interface Props {
  recipes: Recipe[],
  setRecipesList: (newRecipes: Recipe[]) => any
}

export const RecipesList = (props: Props) => {
  return (
    <div tabIndex={0} className="bg-base-100 h-56 overflow-x-auto overflow-y-scroll">
      <h2 className="font-bold">Selected Recipes</h2>
      <table className="table table-zebra" >
        <tbody>
          {props.recipes.map((recipe) => {
            return (
              <tr key={recipe.id}>
                <td>
                  <button className="btn font-bold" onClick={() => {
                    for(let i = 0; i < props.recipes.length; i++) {
                      if(props.recipes[i].id !== recipe.id) continue
                      
                      // @ts-ignore
                      props.setRecipesList(() => {
                        const newRecipesList = [...props.recipes]
                        newRecipesList[i].quantity += 1
                        return newRecipesList
                      })
                      return
                    }
                  }}>+</button>
                </td>
                <th>{recipe.quantity}</th>
                <td>
                  <button className="btn font-bold" onClick={() => {
                    for(let i = 0; i < props.recipes.length; i++) {
                      if(props.recipes[i].id !== recipe.id) continue

                      // @ts-ignore
                      props.setRecipesList(() => {
                        const newRecipesList = [...props.recipes]
                        newRecipesList[i].quantity -= 1

                        if(newRecipesList[i].quantity === 0) {
                          newRecipesList.splice(i, 1)
                        }
                        return newRecipesList
                      })
                      return
                    }
                  }}>-</button>
                </td>
                <td>{recipe.name}</td>
                <td><Link href={recipe.credits} className="link link-hover">Source</Link></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}