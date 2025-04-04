'use client'

import { Recipe } from "../objects/recipe";
import convert from "convert";
import { Ingredient } from "../objects/ingredient";

interface Props {
  recipes: Recipe[],
}

export const IngredientsList = (props: Props) => {
  // Find where the ingredient quantities become NaN
  
  function checkForNaN(recipes: Recipe[]): void {
    recipes.forEach((recipe) => {
      recipe.ingredients.forEach((ingredient) => {
        if(Number.isNaN(ingredient.quantity)) {
          console.log(ingredient)
          throw new Error("Parameter is not a number!");
        }
      })
    })
  }

  function checkForNaN(ingredients: Ingredient[]): void {

  }

  const getIngredientsList = (recipes: Recipe[]): Ingredient[] => {
    
    checkForNaN(recipes)

    const newIngredientsList: Ingredient[] = []

    for(let recipesIndex = 0; recipesIndex < recipes.length; recipesIndex++) {
      const recipe = recipes[recipesIndex]

      for(let ingredientsIndex = 0; ingredientsIndex < recipe.ingredients.length; ingredientsIndex++) {
        const ingredient = recipe.ingredients[ingredientsIndex]


      }
    }

    // // for(let recipesIndex = 0; recipesIndex < recipes.length; recipesIndex++) {
    // //   const recipe = recipes[recipesIndex]

    // //   for(let ingredientsIndex = 0; ingredientsIndex < recipe.ingredients.length; ingredientsIndex++) {
    // //     const ingredient = recipe.ingredients[ingredientsIndex]

    // //     if(newIngredients.length === 0) {
    // //       newIngredients.push(ingredient)
    // //       continue
    // //     }

    // //     for(let newIngredientsIndex = 0; newIngredientsIndex < newIngredients.length; newIngredientsIndex++) {
    // //       const newIngredient = newIngredients[newIngredientsIndex]

    // //       if(newIngredientsIndex === newIngredients.length - 1 && newIngredient.name !== ingredient.name) {
    // //         newIngredients.push(ingredient)
    // //       }
    // //     }
    // //   }
    // // }
    // {/* 
    //   *** For version one, assume units are always equal ***

    //   Create array for each ingredient
    //   For each recipe:
    //     For each ingredient
    //       If ingredient isn't in newIngredientsList
    //         Add ingredient to newIngredientsList
    //       If ingredient is in newIngredientsList
    //         Combine the quantities of both ingredients
    //   set ingredientsList to newIngredientsList
    // */}

    // const newIngredientsList: Ingredient[] = []
    
    // for(let recipesIndex = 0; recipesIndex < recipes.length; recipesIndex++) {
    //   recipes[recipesIndex].ingredients.forEach((newIngredientx) => {
    //     if(Number.isNaN(newIngredientx.quantity)) {
    //       console.log(newIngredientx)
    //     }
    //   })

    //   for(let ingredientsIndex = 0; ingredientsIndex < recipes[recipesIndex].ingredients.length; ingredientsIndex++) {
    //     const ingredient: Ingredient = recipes[recipesIndex].ingredients[ingredientsIndex]
    //     ingredient.quantity *= recipes[recipesIndex].quantity
    //     ingredient.units = ingredient.units.toLowerCase()
        
    //     // for(let newIngredientsIndex = 0; newIngredientsIndex < newIngredientsList.length; newIngredientsIndex++) {
    //     //   if(newIngredientsList[newIngredientsIndex].name !== ingredient.name && newIngredientsIndex === newIngredientsList.length - 1) newIngredientsList.push(ingredient)
    //     //   if(newIngredientsList[newIngredientsIndex].name !== ingredient.name) continue

    //     //   if(ingredient.units === "picks") {
    //     //     newIngredientsList[newIngredientsIndex].quantity += ingredient.quantity
    //     //     continue
    //     //   }

    //     //   if(ingredient.units === "") {
    //     //     newIngredientsList[newIngredientsIndex].quantity += ingredient.quantity
    //     //     continue
    //     //   }

    //     //   newIngredientsList[newIngredientsIndex].quantity += convert(ingredient.quantity, ingredient.units).to(newIngredientsList[newIngredientsIndex].units).quantity
    //     // // }
    //     // indexOf doesn't work with Ingredient[]
    //     // Rewrite this and the indexOf statement below to not use "indexOf()"
    //     if(newIngredientsList.length === 0) {
    //       newIngredientsList.push(ingredient)
    //       continue
    //     }

    //     if(newIngredientsList.find(newIngredient => newIngredient.name === ingredient.name) === undefined) { // Ingredient isn't in newIngredientsList
    //       newIngredientsList.push(ingredient)
    //       continue
    //     }

    //     let newIngredientsIndex: number = 0
    //     for(let i = 0; i < newIngredientsList.length; i++) {
    //       if(newIngredientsList[i].name === ingredient.name) {
    //         newIngredientsIndex = i
    //       }
    //     }

    //     if(ingredient.units === "Picks") {
    //       newIngredientsList[newIngredientsIndex].quantity += ingredient.quantity
    //       continue
    //     }

    //     if(ingredient.units === "") {
    //       newIngredientsList[newIngredientsIndex].quantity += ingredient.quantity
    //       continue
    //     }
        
    //     newIngredientsList[newIngredientsIndex].quantity += convert(ingredient.quantity, ingredient.units).to(newIngredientsList[newIngredientsIndex].units).quantity
    //   }
    // }

    // for(let newIngredientsIndex = 0; newIngredientsIndex < newIngredientsList.length; newIngredientsIndex++) {
    //   if(newIngredientsList[newIngredientsIndex].units === "") continue
    //   if(newIngredientsList[newIngredientsIndex].units === "picks") {
    //     newIngredientsList[newIngredientsIndex].units = ""
    //     continue
    //   }
      
    //   const bestQuantity = convert(newIngredientsList[newIngredientsIndex].quantity, newIngredientsList[newIngredientsIndex].units).to("best").quantity
    //   const bestUnits = convert(newIngredientsList[newIngredientsIndex].quantity, newIngredientsList[newIngredientsIndex].units).to("best").unit

    //   newIngredientsList[newIngredientsIndex].quantity = Math.round((bestQuantity + Number.EPSILON) * 100) / 100
    //   newIngredientsList[newIngredientsIndex].units = bestUnits
    // }

    // // console.log(newIngredientsList)

    // newIngredientsList.forEach((newIngredient) => {
    //   if(Number.isNaN(newIngredient.quantity)) {
    //     console.log(newIngredient)
    //   }
    // })
    return newIngredientsList
  }

  return (
    <div tabIndex={0} className="bg-base-100 h-56 overflow-x-auto overflow-y-scroll">
      <h2 className="font-bold">Ingredients List</h2>
      <table className="table table-zebra" >
        <tbody>
          {getIngredientsList(props.recipes).map((ingredient) => {
            
            // console.log(ingredient)
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