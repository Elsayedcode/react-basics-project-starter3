import { ChakraProvider } from '@chakra-ui/react';
import { useState } from 'react';
import RecipeList from './pages/RecipeList.jsx';
import RecipeListPage from './pages/RecipeListPage.jsx';

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <ChakraProvider>
      {selectedRecipe ? (
        <RecipeListPage recipe={selectedRecipe} onBack={() => setSelectedRecipe(null)} />
      ) : (
        <RecipeList onRecipeClick={handleRecipeClick} />
      )}
    </ChakraProvider>
  );
}

export default App;
