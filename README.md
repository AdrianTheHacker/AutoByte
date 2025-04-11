# AUTOBYTE 🥕

### Welcome to AUTOBYTE! 👋
Your ultimate destination for efficient and affordable meal prepping solutions. AUTOBYTE is designed to simplify your meal planning experience with a focus on Fast, Easy, and Cost Effective strategies. 

At AUTOBYTE, we understand the challenges of balancing a busy life with the need for nutritious meals. Our platform offers a variety of meal prep ideas, recipes, and tips that cater specifically to students and busy professionals alike. 

Whether you're looking to save time, cut costs, or simply eat healthier, AUTOBYTE provides the tools and resources to help you achieve your goals. Join our community and discover how easy it can be to prepare delicious meals in advance without breaking the bank. Let AUTOBYTE transform your meal prep routine into a seamless and enjoyable experience. Start today and embark on a journey towards healthier eating with AUTOBYTE.

For those wondering, the description was written by ChatGPT. I write code, not stories!

## Tech Bro Stuff 🤖
| Area | Name |
| --------- | ---- |
| Frontend/Routing 🖥️| NextJS with Tailwind and Typescript |
| Database🗄️ | Firebase - Firestore Database |
| Component Library 🧩 | DaisyUI |
| Email Service📫 | Resend |
| UI Design 🎨 | Canva |

## Developer Setup Instructions 🧑‍💻
*Ensure NodeJS and npm are installed on your machine.<br>
*If you plan on developing a new feature, please do so in a separate branch.<br>
*Ensure <b><u>ALL</u></b> code is written with indentation set to 2 spaces ([Stack Overflow - Modifying Indentation Settings in VsCode](https://stackoverflow.com/questions/34174207/how-to-change-indentation-in-visual-studio-code)).

#### General 
1. Clone the repository.
2. Open the repository and navigate to the `web` directory.
3. Run `npm install` to install all necessary dependencies.
4. Setup project dependencies listed below (Firebase, Resend, etc.)
5. Run a dev build of the project by navigating to the `web` directory and running `npm run dev`.

#### Database🗄️- Firebase 
1. Clone the Repository.
2. Open the Repository and navigate to the `web` folder.
3. Run `npm install` to install all necessary dependencies.
4. Make a copy of `firebase.config.EXAMPLE.ts` in the same directory.
5. Rename this copy to `firebase.config.env.ts`.
6. Switch all relevant data in `firebaseConfig`'s data with your own.

```ts
const firebaseConfig = {
  apiKey: "API KEY",
  authDomain: "AUTH DOMAIN",
  databaseURL: "DATABASE URL",
  projectId: "PROJECT ID",
  storageBucket: "STORAGE BUCKET",
  messagingSenderId: "MESSAGING SENDER ID",
  appId: "APP ID",
  measurementId: "MEASUREMENT ID"
}

export { firebaseConfig }
```

#### Email Service - Resend📫

## Contact Information 🙋‍♂️
If you're interested in the project or would like to help in the development, reach out:<br>
[LinkedIn - AdrianTarantino](https://www.linkedin.com/in/adriantarantino/)<br>
[Email - adriantarantino2006@gmail.com](mailto:adriantarantino2006@gmail.com)<br>
[GitHub - AdrianTheHacker](https://github.com/AdrianTheHacker)<br>
[Personal Website - adrianthehacker.github.io](https://adrianthehacker.github.io)<br>
