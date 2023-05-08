import { Heading, Input, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { data } from '../utils/data';


const RecipeList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = data.filter((recipe) => {
    const lowerCaseTerm = searchTerm.toLowerCase();
    const isVegan = recipe.recipe.healthLabels.includes('Vegan');
    const isVegetarian = recipe.recipe.healthLabels.includes('Vegetarian');
    const isPescetarian = recipe.recipe.healthLabels.includes('Pescatarian');
    const isGlutenFree = recipe.recipe.healthLabels.includes('Gluten-Free');
    const isSesameFree = recipe.recipe.healthLabels.includes('Sesame-Free');

    return (
      recipe.recipe.label.toLowerCase().includes(lowerCaseTerm) &&
      (isVegan || isVegetarian || isPescetarian || isGlutenFree || isSesameFree)
    );
  });

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const recipeCards = filteredData.map((recipe) => {
    const {
      label,
      image,
      mealType,
      dishType,
      healthLabels,
      cautions,
      id,
    } = recipe.recipe;

    const isVegan = healthLabels.includes('Vegan');
    const isVegetarian = healthLabels.includes('Vegetarian');
    const isPescetarian = healthLabels.includes('Pescatarian');
    const isGlutenFree = healthLabels.includes('Gluten-Free');
    const isSesameFree = healthLabels.includes('Sesame-Free');

    return (
      <div className='card' key={id}>
        <h1>{label}</h1>
        <img src={image} alt={label} />
        {isVegan && <p>Vegan</p>}
        {isVegetarian && <p>Vegetarian</p>}
        {isPescetarian && <p>Pescatarian</p>}
        {isGlutenFree && <p>Gluten-Free</p>}
        {isSesameFree && <p>Sesame-Free</p>}
        <p>Meal Type: {mealType.join(', ')}</p>
        <p>Dish Type: {dishType.join(', ')}</p>
        {cautions.length > 0 && <p>Cautions: {cautions.join(', ')}</p>}
      </div>
    );
  });

  return (
    // eslint-disable-next-line react/no-unknown-property
    <div h='100vh' flexDir='column'>
      <Heading>Your Recipe App</Heading>
      <VStack>
        <Input
          placeholder='Search for recipe...'
          size='lg'
          type='search'
          value={searchTerm}
          onChange={handleChange}
        />
        {recipeCards}
      </VStack>
    </div>
  );
};

export default RecipeList;
