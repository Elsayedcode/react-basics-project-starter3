import {data} from "./utils/data";
import {useState} from "react";
import RecipeListPage from "./pages/RecipeListPage";
import RecipePage from "./pages/RecipePage";



function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleRecipeSelect = (recipeLabel) => {
    setSelectedRecipe(recipeLabel);
  };

  return (
    <div>
      {selectedRecipe ? (
        <RecipePage
          recipe={data.hits.find((hit) => hit.recipe.label === selectedRecipe).recipe}
          handleRecipeDeselect={() => setSelectedRecipe(null)}
        />
      ) : (
        <RecipeListPage handleRecipeSelect={handleRecipeSelect} />
      )}
    </div>
  );
}

export default App;
