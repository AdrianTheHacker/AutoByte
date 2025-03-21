'use client'

import { Ingredient } from "../objects/objects"
import { Recipe } from "../objects/objects"

const ViewRecipes = () => {
  const recipes: Recipe[] = [
    {
      name: "Steak Diane",
      photoURL: "testing/steakDiane.avif",
      description: "Believe it or not, a fancy steak dinner can count as a 30-minute meal! Ree's take on steak is easy yet delicious: it features a pan-fried steak topped with a savory sauce that you'll want to lick off the plate. Pair it with a simple side of string beans for a well-rounded meal!",
      source: "",
      ingredients: []
    },
    {
      name: "Shrimp Alfredo",
      photoURL: "testing/shrimpAlfredo.avif",
      description: "This creamy, dreamy fettuccine Alfredo will transport you straight to Italy (or at least your favorite Italian restaurant) in just 30 minutes. The four-ingredient sauce and frozen shrimp will make this recipe a weekly staple.",
      source: "",
      ingredients: []
    }, 
    {
      name: "Caprese Chicken",
      photoURL: "testing/capreseChicken.avif",
      description: "Instead of spending your evening making both roast chicken and caprese salad, combine them both into one quick dish! This chicken dinner is cheesy, herby and bursting with juicy cherry tomatoes.",
      source: "",
      ingredients: []
    }, 
    {
      name: "Chili Mac and Cheese",
      photoURL: "testing/chiliMacAndCheese.avif",
      description: "This hearty noodle dish is a step above the Hamburger Helper you grew up eating, but just as easy to make! As its name suggests, it features a comforting combination of hearty beef chili and gooey mac and cheese.",
      source: "",
      ingredients: []
    }
  ]

  return (
    <div className="w-dvw flex justify-center items-center">
      <ul className="w-1/2 grid grid-cols-3 gap-4 justify-center items-center">
        {recipes.map((recipe) => (
          <li className="card bg-base-100 w-96 shadow-sm" key={recipe.name}>
            <figure className="px-10 pt-10">
              <img
                src={recipe.photoURL}
                alt={recipe.name}
                className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{recipe.name} </h2>
              <p>{recipe.description}</p>
              <div className="card-actions">
                <button className="btn btn-primary" onClick={() => { document.getElementById(recipe.name+'-modal')!.classList.add('modal-open'); }}>View Recipe</button>
                <dialog id={recipe.name+'-modal'} className="modal">
                  <div className="modal-box">
                    <img
                      src={recipe.photoURL}
                      alt={recipe.name}
                      className="rounded-xl" />
                    <h3 className="font-bold text-lg">{recipe.name}</h3>
                    <p className="py-4">{recipe.description}</p>
                    <div className="modal-action">
                      <button className="btn" onClick={() => { document.getElementById(recipe.name+'-modal')!.classList.remove('modal-open'); }}>Close</button>
                    </div>
                  </div>
                </dialog>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ViewRecipes