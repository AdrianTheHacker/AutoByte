
const IngredientsList = () => {
  return (
    // <div className="collapse bg-base-100 border-base-300 border">
    //   <input type="checkbox" />
    //   <div className="collapse-title font-semibold">How do I create an account?</div>
    //   <div className="collapse-content text-sm">
    //     Click the "Sign Up" button in the top right corner and follow the registration process.
    //   </div>
    // </div>
    <div tabIndex={0} className="collapse collapse-arrow bg-base-100 border-base-300 border">
      <input type="checkbox" />
      <div className="collapse-title font-semibold">Ingredients List</div>
      <div className="collapse-content text-sm">
        List of all ingredients from the recipes.
      </div>
    </div>
  )
}

export default IngredientsList