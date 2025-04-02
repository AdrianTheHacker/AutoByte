import { RecipeCard } from "./components/recipeCard"
import { Recipe } from "./objects/recipe"

export default function ViewRecipes() {
  const testData: Recipe[] = [
    {
      name: "Steak Diane", 
      description: "Believe it or not, a fancy steak dinner can count as a 30-minute meal! Ree's take on steak is easy yet delicious: it features a pan-fried steak topped with a savory sauce that you'll want to lick off the plate. Pair it with a simple side of string beans for a well-rounded meal!",
      ingredients: [],
      credits: "https://www.thepioneerwoman.com/food-cooking/recipes/a61827998/steak-diane-recipe/"
    },
    {
      name: "Shrimp Alfredo", 
      description: "This creamy, dreamy fettuccine Alfredo will transport you straight to Italy (or at least your favorite Italian restaurant) in just 30 minutes. The four-ingredient sauce and frozen shrimp will make this recipe a weekly staple.",
      ingredients: [],
      credits: "https://www.thepioneerwoman.com/food-cooking/recipes/a63137669/shrimp-alfredo-recipe/"
    },
    {
      name: "Chili Mac and Cheese", 
      description: "This hearty noodle dish is a step above the Hamburger Helper you grew up eating, but just as easy to make! As its name suggests, it features a comforting combination of hearty beef chili and gooey mac and cheese.",
      ingredients: [],
      credits: "https://www.thepioneerwoman.com/food-cooking/recipes/a62058968/chili-mac-and-cheese-recipe/"
    },
    {
      name: "Caprese Chicken", 
      description: "Instead of spending your evening making both roast chicken and caprese salad, combine them both into one quick dish! This chicken dinner is cheesy, herby and bursting with juicy cherry tomatoes.",
      ingredients: [],
      credits: "https://www.thepioneerwoman.com/food-cooking/recipes/a61855912/caprese-chicken-recipe/"
    },
    {
      name: "Steak Diane", 
      description: "Believe it or not, a fancy steak dinner can count as a 30-minute meal! Ree's take on steak is easy yet delicious: it features a pan-fried steak topped with a savory sauce that you'll want to lick off the plate. Pair it with a simple side of string beans for a well-rounded meal!",
      ingredients: [],
      credits: "https://www.thepioneerwoman.com/food-cooking/recipes/a61827998/steak-diane-recipe/"
    },
    {
      name: "Shrimp Alfredo", 
      description: "This creamy, dreamy fettuccine Alfredo will transport you straight to Italy (or at least your favorite Italian restaurant) in just 30 minutes. The four-ingredient sauce and frozen shrimp will make this recipe a weekly staple.",
      ingredients: [],
      credits: "https://www.thepioneerwoman.com/food-cooking/recipes/a63137669/shrimp-alfredo-recipe/"
    },
  ]

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="sm:w-full md:w-full lg:w-2/3">
          <h1 className="text-3xl font-bold">View Recipe</h1>
          <div className="mt-3 flex flex-wrap flex-row gap-5 justify-center item-center border border-red-500">
            {testData.map((recipe: Recipe, index: number) => {
              return (
                <RecipeCard key={recipe.name.concat(String(index))} recipe={recipe} />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}