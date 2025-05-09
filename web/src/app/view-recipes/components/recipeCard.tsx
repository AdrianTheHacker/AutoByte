'use client'

import Link from "next/link"
import { Recipe } from "../objects/recipe"
import { RecipeMoreInfo } from "./recipeMoreInfo"
import { useState } from "react"

interface Props {
  recipe: Recipe
  handleAddToSelectedRecipes: () => void
}

export const RecipeCard = (props: Props) => {
  const [modalState, setModalState] = useState("")

  return (
    <>
      <div className="card w-96 bg-base-100 card-lg shadow-sm">
        <div className="card-body">
          <h2 className="card-title">{props.recipe.name}</h2>
          <p className="text-left">{props.recipe.description.substring(0, 200).concat("...")}</p>
          <div className="justify-end card-actions items-center gap-3">
            <button className="btn mr-auto" onClick={props.handleAddToSelectedRecipes}>
              <svg className="fill-base-content" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.753 15.467c1.301 1.821.939 3.104 2.247 4.938l-5.041 3.595c-2.723-2.027-5.072-2.677-5.83-2.932-.723-.243-1.189-.706-1.029-1.289.164-.589.779-.764 1.286-.741.765.035 1.386.265 1.386.265l-3.516-4.93c-.314-.44-.211-1.051.229-1.365s1.05-.211 1.363.229l2.383 3.333c.114.161.338.199.498.084.162-.115.199-.339.085-.5l-.587-.823.944-.235c.248-.06.507.036.655.244l.48.673c.115.161.338.199.499.084s.197-.338.083-.5l-.555-.777.928-.208c.243-.052.495.045.64.247l.407.572c.114.161.339.198.5.084.16-.115.198-.339.084-.5l-.458-.641.273-.048c.952-.167 1.468.329 2.046 1.141zm-10.838-3.248c.61-.436 1.399-.45 1.987.002-.335-1.121-1.676-1.583-2.63-.902-.955.681-.952 2.099-.002 2.779-.235-.703.035-1.444.645-1.879zm1.577 10.745c-.682-.229-1.188-.571-1.569-.964h-6.923v-14h3v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h3v4.6c.541-.098 1.486-.294 2-.302v-6.298h-5v-2c0-2.209-1.791-4-4-4s-4 1.791-4 4v2h-5v18h13.134c-1-.49-1.683-.723-2.642-1.036zm-4.492-18.964c0-1.654 1.346-3 3-3s3 1.346 3 3v2h-6v-2z"/></svg>
            </button>
            <Link className="link" href={props.recipe.credits}>Source</Link>
            <button className="btn btn-primary" onClick={() => setModalState("modal-open")}>More Info</button>
          </div>
        </div>
      </div>
      <dialog id={props.recipe.id} className={`modal ${modalState}`}>
        <RecipeMoreInfo recipe={props.recipe} handleOnCloseButton={() => { setModalState("") } } />
      </dialog>
    </>
  )
}