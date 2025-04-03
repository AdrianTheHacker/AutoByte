'use client'

import { collection, onSnapshot } from "firebase/firestore"
import { RecipeCard } from "./components/recipeCard"
import { Recipe } from "./objects/recipe"
import { numericQuantity } from 'numeric-quantity';
import { useEffect, useState } from "react"
import { Ingredient } from "./objects/ingredient"
import { database } from "./libraries/firebaseFirestore";

export default function ViewRecipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [selectedRecipes, setSelectedRecipes] = useState<Recipe[]>([])

  const getFormattedIngredient = (ingredient: string): Ingredient => {
    const formattedIngredient: Ingredient = {
      name: "",
      quantity: 0,
      units: ""
    }

    formattedIngredient.name = ingredient.split(" [")[0]
    if (typeof(ingredient.split(" [")[1]) != "undefined") {
      if(ingredient.split(" [")[1].split(" ")[0] === "Any") formattedIngredient.quantity = 0 // anything without specified quantity will always be 0
      else formattedIngredient.quantity = numericQuantity(ingredient.split(" [")[1].split(" ")[0])
    }
    formattedIngredient.units = ingredient.split(" [")[1].split(" ")[1].slice(0, -1)

    return formattedIngredient
  }
  
  const recipesCollectionReference = collection(database, "Recipes")
  useEffect(() => {
    onSnapshot(recipesCollectionReference, snapshot => {
      setRecipes(snapshot.docs.map(doc => {
        const formattedIngredients: Ingredient[] = []
        doc.data().Ingredients.forEach((ingredient: string) => {
          formattedIngredients.push(getFormattedIngredient(ingredient))
        })  

        return {
          id: doc.id,
          name: doc.data().Title,
          description: doc.data().Description,
          ingredients: formattedIngredients,
          credits: doc.data().Source,
          quantity: 1
        }
      }))
    })
  }, [])

  const getSelectedRecipesAmount = (selectedRecipes: Recipe[]) => {
    let selectedRecipesAmount: number = 0
    selectedRecipes.forEach((selectedRecipe) => {
      selectedRecipesAmount += selectedRecipe.quantity
    })

    console.log(selectedRecipesAmount)
    return selectedRecipesAmount
  }

  return (
    <div className="hero bg-base-200 min-h-screen t">
      <div className="hero-content text-center flex-col">
      <h1 className="text-3xl font-bold">View Recipe</h1>
      <button className="btn">({getSelectedRecipesAmount(selectedRecipes)}) View Selection
        <svg className="fill-base-content" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.753 15.467c1.301 1.821.939 3.104 2.247 4.938l-5.041 3.595c-2.723-2.027-5.072-2.677-5.83-2.932-.723-.243-1.189-.706-1.029-1.289.164-.589.779-.764 1.286-.741.765.035 1.386.265 1.386.265l-3.516-4.93c-.314-.44-.211-1.051.229-1.365s1.05-.211 1.363.229l2.383 3.333c.114.161.338.199.498.084.162-.115.199-.339.085-.5l-.587-.823.944-.235c.248-.06.507.036.655.244l.48.673c.115.161.338.199.499.084s.197-.338.083-.5l-.555-.777.928-.208c.243-.052.495.045.64.247l.407.572c.114.161.339.198.5.084.16-.115.198-.339.084-.5l-.458-.641.273-.048c.952-.167 1.468.329 2.046 1.141zm-10.838-3.248c.61-.436 1.399-.45 1.987.002-.335-1.121-1.676-1.583-2.63-.902-.955.681-.952 2.099-.002 2.779-.235-.703.035-1.444.645-1.879zm1.577 10.745c-.682-.229-1.188-.571-1.569-.964h-6.923v-14h3v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h3v4.6c.541-.098 1.486-.294 2-.302v-6.298h-5v-2c0-2.209-1.791-4-4-4s-4 1.791-4 4v2h-5v18h13.134c-1-.49-1.683-.723-2.642-1.036zm-4.492-18.964c0-1.654 1.346-3 3-3s3 1.346 3 3v2h-6v-2z"/></svg>
      </button>
      <div className="sm:w-full md:w-full lg:w-2/3">
        <div className="mt-3 flex flex-wrap flex-row gap-5 justify-center item-center">
          {recipes.map((recipe: Recipe) => {
            return (
              <div key={recipe.id}>
                <RecipeCard recipe={recipe} handleAddToSelectedRecipes={() => {
                  console.log(selectedRecipes)

                  for(let selectedRecipesIndex = 0; selectedRecipesIndex < selectedRecipes.length; selectedRecipesIndex++) {
                    if(selectedRecipes[selectedRecipesIndex].id !== recipe.id) continue

                    setSelectedRecipes(selectedRecipes => {
                      const newSelectedRecipes = [...selectedRecipes]
                      newSelectedRecipes[selectedRecipesIndex].quantity += 1

                      return newSelectedRecipes
                    })
                    return
                  }

                  setSelectedRecipes([...selectedRecipes, {
                    id: recipe.id,
                    name: recipe.name,
                    description: recipe.description,
                    ingredients: recipe.ingredients,
                    credits: recipe.credits,
                    quantity: 1
                  }])
                }}/>
              </div>
            )
          })}
        </div>
      </div>
      </div>
    </div>
  )
}