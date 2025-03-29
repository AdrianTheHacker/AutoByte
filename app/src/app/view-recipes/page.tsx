'use client'

import { database } from "../firebase.env.config.js"
import { useState, useEffect } from "react"
import { collection, onSnapshot } from "firebase/firestore"
import Recipe from "../components/objects/recipe"
import Link from "next/link"
import ViewIngredientsList from "./components/view-ingredients-list"

const ViewRecipes = () => {
  const [recipes, setRecipes] = useState([])
  const [selectionCount, setSelectionCount] = useState<number>(0)
  const [selectionList, setSelectionList] = useState<Recipe[]>([])

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
  }, [])
  
  const getIngredientQuantity = (ingredientName: string): string => {
    if (typeof(ingredientName.split(" [")[1]) != "undefined") return ingredientName.split(" [")[1].split("]")[0]
    return ""
  }

  return (
    <div className="pt-3 w-dvw flex flex-col justify-center items-center">
      <button className="btn" onClick={() => document.getElementById("view-selection-modal")!.classList.add('modal-open') }>View Selection {`(${selectionCount})`}<svg className="fill-base-content" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.753 15.467c1.301 1.821.939 3.104 2.247 4.938l-5.041 3.595c-2.723-2.027-5.072-2.677-5.83-2.932-.723-.243-1.189-.706-1.029-1.289.164-.589.779-.764 1.286-.741.765.035 1.386.265 1.386.265l-3.516-4.93c-.314-.44-.211-1.051.229-1.365s1.05-.211 1.363.229l2.383 3.333c.114.161.338.199.498.084.162-.115.199-.339.085-.5l-.587-.823.944-.235c.248-.06.507.036.655.244l.48.673c.115.161.338.199.499.084s.197-.338.083-.5l-.555-.777.928-.208c.243-.052.495.045.64.247l.407.572c.114.161.339.198.5.084.16-.115.198-.339.084-.5l-.458-.641.273-.048c.952-.167 1.468.329 2.046 1.141zm-10.838-3.248c.61-.436 1.399-.45 1.987.002-.335-1.121-1.676-1.583-2.63-.902-.955.681-.952 2.099-.002 2.779-.235-.703.035-1.444.645-1.879zm1.577 10.745c-.682-.229-1.188-.571-1.569-.964h-6.923v-14h3v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h3v4.6c.541-.098 1.486-.294 2-.302v-6.298h-5v-2c0-2.209-1.791-4-4-4s-4 1.791-4 4v2h-5v18h13.134c-1-.49-1.683-.723-2.642-1.036zm-4.492-18.964c0-1.654 1.346-3 3-3s3 1.346 3 3v2h-6v-2z"/></svg></button>
      <dialog id={"view-selection-modal"} className="modal">
        <div className="modal-box">
          {/* <figure className="px-10 pt-10">
            <img
              src={recipe.id}
              alt={recipe.Title}
              className="rounded-xl" />
          </figure> */}
          <h3 className="font-bold text-lg text-center mb-4">Your Selection</h3>
          <div className="overflow-x-auto overflow-y-scroll no-scrollbar h-96">
            <ViewIngredientsList recipes={selectionList} />
            <table className="table table-zebra">
              <tbody>
                {selectionList.map((recipe) => (
                  <tr key={recipe.id}>
                    <td><button className="btn font-bold" onClick={() => {
                      recipe.Quantity += 1

                      setSelectionCount(selectionCount + 1)
                    }}>+</button></td>
                    <th>{recipe.Quantity}</th>
                    <td>
                      <button className="btn font-bold" onClick={() => {
                        recipe.Quantity -= 1
                        setSelectionCount(selectionCount - 1)

                        if(recipe.Quantity === 0) {
                          setSelectionList(selectionList => {
                            const newSelectionList = [...selectionList]
                            const index = newSelectionList.indexOf(recipe);
                            newSelectionList.splice(index, 1);
                            return newSelectionList
                          })
                        }
                      }}>-</button>
                    </td>
                    <td>{recipe.Title}</td>
                    <td><Link href={recipe.Source} className="link link-hover">Source</Link></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="modal-action">
            <button className="btn" onClick={() => { console.log("Creating Shopping List") }}>Download Shopping List</button>
            <button className="btn" onClick={() => { document.getElementById("view-selection-modal")!.classList.remove('modal-open'); }}>Close</button>
          </div>
        </div>
      </dialog>
      <ul className="w-2/3 flex flex-wrap gap-4 justify-center items-center">
        {recipes.map((recipe) => (
          <li key={ recipe.id }>
            <div className="card w-96 h-60 bg-base-100 card-md shadow-sm">
              <div className="card-body">
                <h2 className="card-title">{ recipe.Title }</h2>
                <p>{ recipe.Description.substring(0, 200) + "..." }</p>
                <div className="justify-end card-actions">
                  <button className="btn" onClick={() => {
                    setSelectionCount(selectionCount => selectionCount + 1)
                    
                    for(let i = 0; i < selectionList.length; i++) {
                      if(selectionList[i].id !== recipe.id) continue
                      setSelectionList(selectionList => {
                        const newSelectionList = [...selectionList]
                        newSelectionList[i].Quantity += 1
                        return newSelectionList
                      })
                      return
                    }
                    setSelectionList([...selectionList, {
                      id: recipe.id,
                      Title: recipe.Title,
                      Description: recipe.Description,
                      Ingredients: recipe.Ingredients,
                      Source: recipe.Source,
                      Quantity: 1
                    }])
                  }}>
                    <svg className="fill-base-content" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.753 15.467c1.301 1.821.939 3.104 2.247 4.938l-5.041 3.595c-2.723-2.027-5.072-2.677-5.83-2.932-.723-.243-1.189-.706-1.029-1.289.164-.589.779-.764 1.286-.741.765.035 1.386.265 1.386.265l-3.516-4.93c-.314-.44-.211-1.051.229-1.365s1.05-.211 1.363.229l2.383 3.333c.114.161.338.199.498.084.162-.115.199-.339.085-.5l-.587-.823.944-.235c.248-.06.507.036.655.244l.48.673c.115.161.338.199.499.084s.197-.338.083-.5l-.555-.777.928-.208c.243-.052.495.045.64.247l.407.572c.114.161.339.198.5.084.16-.115.198-.339.084-.5l-.458-.641.273-.048c.952-.167 1.468.329 2.046 1.141zm-10.838-3.248c.61-.436 1.399-.45 1.987.002-.335-1.121-1.676-1.583-2.63-.902-.955.681-.952 2.099-.002 2.779-.235-.703.035-1.444.645-1.879zm1.577 10.745c-.682-.229-1.188-.571-1.569-.964h-6.923v-14h3v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h3v4.6c.541-.098 1.486-.294 2-.302v-6.298h-5v-2c0-2.209-1.791-4-4-4s-4 1.791-4 4v2h-5v18h13.134c-1-.49-1.683-.723-2.642-1.036zm-4.492-18.964c0-1.654 1.346-3 3-3s3 1.346 3 3v2h-6v-2z"/></svg>
                  </button>
                  <button className="btn" onClick={() => open(recipe.Source)}>Source</button>
                  <button className="btn btn-primary" onClick={() => document.getElementById(recipe.Title+'-modal')!.classList.add('modal-open') }>More Information</button>
                </div>
              </div>
            </div>
            <dialog id={recipe.Title+'-modal'} className="modal">
              <div className="modal-box h-96 no-scrollbar">
                {/* <figure className="px-10 pt-10">
                  <img
                    src={recipe.id}
                    alt={recipe.Title}
                    className="rounded-xl" />
                </figure> */}
                <h3 className="font-bold text-lg">{recipe.Title}</h3>
                <div className="overflow-y-scroll no-scrollbar max-h-60">
                  <p className="font-bold py-4 text-lg">Description</p>
                  <p className="py-4 text-lg">{recipe.Description}</p>
                  <p className="font-bold py-4 text-lg">Ingredients</p>
                  <table className="table table-zebra">
                    <tbody>
                      {recipe.Ingredients.map((ingredient) => (
                        <tr key={ingredient}>
                          <th>{ingredient.split(" [")[0]}</th>
                          <td>{getIngredientQuantity(ingredient)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="modal-action">
                  <button className="btn"><svg className="fill-base-content" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.753 15.467c1.301 1.821.939 3.104 2.247 4.938l-5.041 3.595c-2.723-2.027-5.072-2.677-5.83-2.932-.723-.243-1.189-.706-1.029-1.289.164-.589.779-.764 1.286-.741.765.035 1.386.265 1.386.265l-3.516-4.93c-.314-.44-.211-1.051.229-1.365s1.05-.211 1.363.229l2.383 3.333c.114.161.338.199.498.084.162-.115.199-.339.085-.5l-.587-.823.944-.235c.248-.06.507.036.655.244l.48.673c.115.161.338.199.499.084s.197-.338.083-.5l-.555-.777.928-.208c.243-.052.495.045.64.247l.407.572c.114.161.339.198.5.084.16-.115.198-.339.084-.5l-.458-.641.273-.048c.952-.167 1.468.329 2.046 1.141zm-10.838-3.248c.61-.436 1.399-.45 1.987.002-.335-1.121-1.676-1.583-2.63-.902-.955.681-.952 2.099-.002 2.779-.235-.703.035-1.444.645-1.879zm1.577 10.745c-.682-.229-1.188-.571-1.569-.964h-6.923v-14h3v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h3v4.6c.541-.098 1.486-.294 2-.302v-6.298h-5v-2c0-2.209-1.791-4-4-4s-4 1.791-4 4v2h-5v18h13.134c-1-.49-1.683-.723-2.642-1.036zm-4.492-18.964c0-1.654 1.346-3 3-3s3 1.346 3 3v2h-6v-2z"/></svg></button>
                  <button className="btn" onClick={() => { open(recipe.Source) }}>Source</button>
                  <button className="btn" onClick={() => { document.getElementById(recipe.Title+'-modal')!.classList.remove('modal-open'); }}>Close</button>
                </div>
              </div>
            </dialog>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ViewRecipes