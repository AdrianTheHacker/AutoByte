# AUTOBYTE

### Welcome to AUTOBYTE!
Your ultimate destination for efficient and affordable meal prepping solutions. AUTOBYTE is designed to simplify your meal planning experience with a focus on Fast, Easy, and Cost Effective strategies. 

At AUTOBYTE, we understand the challenges of balancing a busy life with the need for nutritious meals. Our platform offers a variety of meal prep ideas, recipes, and tips that cater specifically to students and busy professionals alike. 

Whether you're looking to save time, cut costs, or simply eat healthier, AUTOBYTE provides the tools and resources to help you achieve your goals. Join our community and discover how easy it can be to prepare delicious meals in advance without breaking the bank. Let AUTOBYTE transform your meal prep routine into a seamless and enjoyable experience. Start today and embark on a journey towards healthier eating with AUTOBYTE.

### Setup
*Ensure NodeJS and npm are installed on your machine.<br>
*If you plan on developing a new feature, please do so in a separate branch.
1. Clone the Repository.
2. Open the Repository and navigate to the `app` folder.
3. Run `npm install` to install all necessary dependencies.
4. Navigate to `.>>src>>app` and create a file named `firebase.env.config.js`
5. Copy the following contents into `firebase.env.config.js`. Ensure to switch `firebaseConfig`'s data with your own:

```js
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "YOUR API KEY",
  authDomain: "YOUR AUTH DOMAIN",
  databaseURL: "YOUR DATABASE URL",
  projectId: "YOUR PROJECT ID",
  storageBucket: "YOUR STORAGE BUCKET",
  messagingSenderId: "YOUR MESSAGING SENDER ID",
  appId: "YOUR APP ID",
  measurementId: "YOUR MEASUREMENT ID"
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const database = getFirestore(app)

export { database }
```
5. Run `npm run dev`

## Contact Us
[AdrianTarantino](https://github.com/AdrianTarantino)<br>
[LinkedIn](https://www.linkedin.com/in/adriantarantino/)<br>
[adriantarantino2006@gmail.com](mailto:adriantarantino2006@gmail.com)<br>
