import Link from "next/link"
import { Recipe } from "../objects/recipe"

interface Props {
  recipe: Recipe
}

export const RecipeCard = (props: Props) => {
  return (
    <div className="card w-96 bg-base-100 card-lg shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{props.recipe.name}</h2>
        <p className="text-left">{props.recipe.description}</p>
        <div className="justify-end card-actions items-center gap-3">
          <Link className="link" href={props.recipe.credits}>Source</Link>
          <button className="btn btn-primary">More Info</button>
        </div>
      </div>
    </div>
  )
}