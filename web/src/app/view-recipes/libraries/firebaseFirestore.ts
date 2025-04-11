import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { firebaseConfig } from "../../../../firebase.config.env"

const app = initializeApp(firebaseConfig)
const database = getFirestore(app)

export { database }

// export interface DataProps {
//   id: string,
//   Title: string,
//   Description: string,
//   Source: string,
//   Ingredients: string[]
// }