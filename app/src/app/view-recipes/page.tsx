'use client'

import { database } from "../firebase.env.config"
import { useState, useEffect } from "react"
import { collection, onSnapshot } from "firebase/firestore"

const ViewRecipes = () => {
  // const recipes: Recipe[] = [
  //   {
  //     name: "Steak Diane",
  //     photoURL: "testing/steakDiane.avif",
  //     description: "Believe it or not, a fancy steak dinner can count as a 30-minute meal! Ree's take on steak is easy yet delicious: it features a pan-fried steak topped with a savory sauce that you'll want to lick off the plate. Pair it with a simple side of string beans for a well-rounded meal!",
  //     source: "https://www.thepioneerwoman.com/food-cooking/recipes/a61827998/steak-diane-recipe/",
  //     ingredients: [
  //       { name: "Strip steaks", quantityInGrams: 454 }, // 2 (8-oz.) steaks ≈ 454g
  //       { name: "Salted butter", quantityInGrams: 28 }, // 2 Tbsp. ≈ 28g
  //       { name: "Olive oil", quantityInGrams: 27 }, // 2 Tbsp. ≈ 27g
  //       { name: "Red onion", quantityInGrams: 100 }, // Approx. size of a small red onion
  //       { name: "Garlic cloves", quantityInGrams: 9 }, // 3 cloves ≈ 9g
  //       { name: "Fresh thyme leaves", quantityInGrams: 1 }, // 1 tsp. ≈ 1g
  //       { name: "Brandy", quantityInGrams: 120 }, // 1/2 cup ≈ 120g
  //       { name: "Heavy cream", quantityInGrams: 240 }, // 1 cup ≈ 240g
  //       { name: "Whole-grain mustard", quantityInGrams: 15 }, // 1 Tbsp. ≈ 15g
  //       { name: "Balsamic reduction", quantityInGrams: 15 }, // 1 Tbsp. ≈ 15g
  //       { name: "Minced chives", quantityInGrams: 9 }, // 3 Tbsp. ≈ 9g
  //       { name: "Kosher salt", quantityInGrams: 0 }, // To taste
  //       { name: "Black pepper", quantityInGrams: 0 } // To taste
  //     ]
  //   },
  //   {
  //     name: "Shrimp Alfredo",
  //     photoURL: "testing/shrimpAlfredo.avif",
  //     description: "This creamy, dreamy fettuccine Alfredo will transport you straight to Italy (or at least your favorite Italian restaurant) in just 30 minutes. The four-ingredient sauce and frozen shrimp will make this recipe a weekly staple.",
  //     source: "https://www.thepioneerwoman.com/food-cooking/recipes/a63137669/shrimp-alfredo-recipe/",
  //     ingredients: [
  //       { name: "Fettuccine", quantityInGrams: 340 }, // 12 oz. ≈ 340g
  //       { name: "Olive oil", quantityInGrams: 27 }, // 2 Tbsp. ≈ 27g
  //       { name: "Salted butter", quantityInGrams: 170 }, // 12 Tbsp. ≈ 170g
  //       { name: "Jumbo shrimp, peeled and deveined", quantityInGrams: 454 }, // 1 lb. ≈ 454g
  //       { name: "Heavy cream", quantityInGrams: 360 }, // 1 1/2 cups ≈ 360g
  //       { name: "Garlic cloves", quantityInGrams: 6 }, // 2 cloves ≈ 6g
  //       { name: "Freshly grated parmesan cheese", quantityInGrams: 227 }, // 8 oz. ≈ 227g
  //       { name: "Fresh parsley, chopped", quantityInGrams: 30 }, // 1/2 cup ≈ 30g
  //       { name: "Kosher salt", quantityInGrams: 0 }, // To taste
  //       { name: "Black pepper", quantityInGrams: 0 } // To taste
  //     ]
  //   }, 
  //   {
  //     name: "Caprese Chicken",
  //     photoURL: "testing/capreseChicken.avif",
  //     description: "Instead of spending your evening making both roast chicken and caprese salad, combine them both into one quick dish! This chicken dinner is cheesy, herby and bursting with juicy cherry tomatoes.",
  //     source: "https://www.thepioneerwoman.com/food-cooking/recipes/a61855912/caprese-chicken-recipe/",
  //     ingredients: [
  //       { name: "Cherry tomatoes", quantityInGrams: 300 }, // 2 cups ≈ 300g
  //       { name: "Olive oil", quantityInGrams: 54 }, // 4 Tbsp. (2 for tomatoes + 2 for chicken) ≈ 54g
  //       { name: "Prepared pesto", quantityInGrams: 30 }, // 2 Tbsp. ≈ 30g
  //       { name: "Balsamic reduction", quantityInGrams: 15 }, // 1 Tbsp. ≈ 15g
  //       { name: "Salted butter", quantityInGrams: 28 }, // 2 Tbsp. ≈ 28g
  //       { name: "Chicken cutlets", quantityInGrams: 567 }, // 1.25 to 1.5 lbs. ≈ 567g
  //       { name: "Fresh basil leaves", quantityInGrams: 10 }, // 6 large leaves ≈ 10g
  //       { name: "Fresh mozzarella", quantityInGrams: 170 }, // 6 slices ≈ 170g
  //       { name: "Ciabatta bread", quantityInGrams: 200 }, // Approximate weight for slices
  //       { name: "Kosher salt", quantityInGrams: 0 }, // To taste
  //       { name: "Black pepper", quantityInGrams: 0 } // To taste
  //     ]
  //   }, 
  //   {
  //     name: "Chili Mac and Cheese",
  //     photoURL: "testing/chiliMacAndCheese.avif",
  //     description: "This hearty noodle dish is a step above the Hamburger Helper you grew up eating, but just as easy to make! As its name suggests, it features a comforting combination of hearty beef chili and gooey mac and cheese.",
  //     source: "https://www.thepioneerwoman.com/food-cooking/recipes/a62058968/chili-mac-and-cheese-recipe/",
  //     ingredients: [
  //       { name: "Olive oil", quantityInGrams: 27 }, // 2 Tbsp. ≈ 27g
  //       { name: "Ground beef", quantityInGrams: 454 }, // 1 lb. ≈ 454g
  //       { name: "Garlic cloves", quantityInGrams: 9 }, // 3 cloves ≈ 9g
  //       { name: "Yellow onion", quantityInGrams: 110 }, // Small onion ≈ 110g
  //       { name: "Chili powder", quantityInGrams: 14 }, // 2 Tbsp. ≈ 14g
  //       { name: "Ground cumin", quantityInGrams: 4 }, // 2 tsp. ≈ 4g
  //       { name: "Beef broth", quantityInGrams: 720 }, // 3 cups ≈ 720g
  //       { name: "Tomato sauce", quantityInGrams: 227 }, // 8-oz. can ≈ 227g
  //       { name: "Large elbow macaroni", quantityInGrams: 340 }, // 12 oz. ≈ 340g
  //       { name: "Pinto beans, drained", quantityInGrams: 425 }, // 15-oz. can ≈ 425g
  //       { name: "Cheddar cheese, grated", quantityInGrams: 170 }, // 6 oz. ≈ 170g
  //       { name: "Pepper jack cheese, grated", quantityInGrams: 113 }, // 4 oz. ≈ 113g
  //       { name: "Cilantro", quantityInGrams: 10 }, // Small bunch ≈ 10g
  //       { name: "Hot sauce", quantityInGrams: 0 }, // To taste
  //       { name: "Sour cream", quantityInGrams: 0 }, // Optional
  //       { name: "Kosher salt", quantityInGrams: 0 }, // To taste
  //       { name: "Black pepper", quantityInGrams: 0 } // To taste
  //     ]
  //   }
  // ]

  const [recipes, setRecipes] = useState([])
  const recipesCollectionReference = collection(database, "Recipes")

  useEffect(() => {
    onSnapshot(recipesCollectionReference, snapshot => {
      setRecipes(snapshot.docs.map(doc => {
        return {
          id: doc.id,
          viewing: false,
          ...doc.data() 
        }
      }))
    })
  })

  return (
    <div className="w-dvw flex justify-center items-center">
      <ul className="w-1/2 flex flex-wrap gap-4 justify-center items-center">
        {recipes.map((recipe, index) => (
          <div className="card w-96 h-60 bg-base-100 card-md shadow-sm" key={ recipe.id }>
            <div className="card-body">
              <h2 className="card-title">{ recipe.Title }</h2>
              <p>{ recipe.Description.substring(0, 200) + "..." }</p>
              <div className="justify-end card-actions">
                <button className="btn" onClick={() => open(recipe.Source)}>Source</button>
                <button className="btn btn-primary">More Information</button>
              </div>
            </div>
          </div>
          // <div key={recipe.id}>
          //   <li className="z-10 card bg-base-100 w-80 shadow-sm transition duration-350 hover:scale-110 hover:z-50">
          //     <figure className="px-10 pt-10">
          //       <img
          //         src={recipe.id}
          //         alt={recipe.Title}
          //         className="rounded-xl" />
          //     </figure>
          //     <div className="card-body items-center text-center">
          //       <h2 className="card-title">{recipe.Title} </h2>
          //       <p>{recipe.Description.substring(0, 40) + "..."}</p>
          //       <div className="card-actions">
          //         <button className="btn" onClick={() => { open(recipe.id) }}>Source</button>
          //         <button className="btn btn-primary" onClick={() => { document.getElementById(recipe.Title+'-modal')!.classList.add('modal-open'); }}>More Info</button>
          //       </div>
          //     </div>
          //   </li>
          //   <dialog id={recipe.Title+'-modal'} className="modal">
          //     <div className="modal-box">
          //     <figure className="px-10 pt-10">
          //       <img
          //         src={recipe.id}
          //         alt={recipe.Title}
          //         className="rounded-xl" />
          //     </figure>
          //       <h3 className="font-bold text-lg">{recipe.Title}</h3>
          //       <p className="py-4 text-lg">{recipe.Description}</p>
          //       <div className="modal-action">
          //         <button className="btn" onClick={() => { open(recipe.id) }}>Source</button>
          //         <button className="btn" onClick={() => { document.getElementById(recipe.Title+'-modal')!.classList.remove('modal-open'); }}>Close</button>
          //       </div>
          //     </div>
          //   </dialog>
          // </div>
        ))}
      </ul>
    </div>
  )
}

export default ViewRecipes