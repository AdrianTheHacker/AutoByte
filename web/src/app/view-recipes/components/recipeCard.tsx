'use client'

import Link from "next/link"
import { Recipe } from "../objects/recipe"
import { RecipeMoreInfoBox } from "./recipeMoreInfoBox"
import { useState } from "react"

interface Props {
  recipe: Recipe
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
            <Link className="link" href={props.recipe.credits}>Source</Link>
            <button className="btn btn-primary" onClick={() => setModalState("modal-open")}>More Info</button>
          </div>
        </div>
      </div>
      <dialog id={props.recipe.id} className={`modal ${modalState}`}>
        <RecipeMoreInfoBox recipe={props.recipe} handleOnCloseButton={() => { setModalState("") } } />
      </dialog>
    </>
    
  )
}