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
          credits: doc.data().Source
        }
      }))
    })
  }, [])

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="sm:w-full md:w-full lg:w-2/3">
          <h1 className="text-3xl font-bold">View Recipe</h1>
          <div className="mt-3 flex flex-wrap flex-row gap-5 justify-center item-center">
            {recipes.map((recipe: Recipe) => {
              return (
                <div key={recipe.id}>
                  <RecipeCard recipe={recipe} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}