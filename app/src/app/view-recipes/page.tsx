import { Ingredient } from "../objects/objects"
import { Recipe } from "../objects/objects"

const ViewRecipes = () => {
  const recipes: Recipe[] = [
    {
      name: "Steak Diane",
      photoURL: "",
      source: "",
      ingredients: []
    },
    {
      name: "Shrimp Alfredo",
      photoURL: "",
      source: "",
      ingredients: []
    }, 
    {
      name: "Caprese Chicken",
      photoURL: "",
      source: "",
      ingredients: []
    }, 
    {
      name: "Chili Mac and Cheese",
      photoURL: "",
      source: "",
      ingredients: []
    }
  ]

  return (
    <div className="w-dvw h-dvh flex justify-center items-center">
      <div className="w-1/2 grid grid-cols-3 gap-4 justify-center items-center">
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure className="px-10 pt-10">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Card Title</h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewRecipes