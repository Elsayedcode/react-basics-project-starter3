import { Heading, Image, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import RecipeListPage from "./RecipeListPage";
// eslint-disable-next-line no-unused-vars
import React from 'react';



const RecipePage = ({ recipe }) => {
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate();
  };

  const {
    label,
    image,
    mealType,
    dishType,
    totalTime,
    dietLabels,
    healthLabels,
    cautions,
    ingredientLines,
    // yield: servings,
    totalNutrients,
  } = recipe;

  const nutrients = {
    kcal: Math.round(totalNutrients.ENERC_KCAL.quantity),
    protein: Math.round(totalNutrients.PROCNT.quantity),
    fat: Math.round(totalNutrients.FAT.quantity),
    carbs: Math.round(totalNutrients.CHOCDF.quantity),
    cholesterol: Math.round(totalNutrients.CHOLE.quantity),
    sodium: Math.round(totalNutrients.NA.quantity),
  };

  

  return (
    <div>
      {RecipeListPage}
      <div >
        <Button onClick={handleBackButtonClick} mb={4}>
          Back
        </Button>
        <div >
          <Heading as='h2' size='xl' mb={4}>
            {label}
          </Heading>
          <Image src={image} alt={label} h='400px' objectFit='cover' />
        </div>
        <div >
          <Heading as='h3' size='md' mb={2}>
            Meal Type:
          </Heading>
          <div>{mealType.join(', ')}</div>
        </div>
        <div >
          <Heading as='h3' size='md' mb={2}>
            Dish Type:
          </Heading>
          <div>{dishType.join(', ')}</div>
        </div>
        <div >
          <Heading as='h3' size='md' mb={2}>
            Total Cooking Time:
          </Heading>
          <div>{totalTime} minutes</div>
        </div>
        {dietLabels.length > 0 && (
          <div >
            <Heading as='h3' size='md' mb={2}>
              Diet Label:
            </Heading>
            <div>{dietLabels.join(', ')}</div>
          </div>
        )}
        <div >
          <Heading as='h3' size='md' mb={2}>
            Health Labels:
          </Heading>
          <div spacing={2}>
            {healthLabels.map((label) => (
              <div key={label}>
                <div color='green.500' />
                {label}
              </div>
            ))}
          </div>
        </div>
        {cautions.length > 0 && (
          <div >
            <Heading as='h3' size='md' mb={2}>
              Cautions:
            </Heading>
            <div>{cautions.join(', ')}</div>
          </div>
        )}
        <div >
          <Heading as='h3' size='md' mb={2}>
            Nutrients:
          </Heading>
          <div>Energy: {nutrients.kcal} kcal</div>
          <div>Protein: {nutrients.protein} g</div>
          <div>Fat: {nutrients.fat} g</div>
          <div>Carbs: {nutrients.carbs} g</div>
          <div>Cholesterol: {nutrients.cholesterol} mg</div>
          <div>Sodium: {nutrients.sodium} mg</div>
</div>

      <div >
        <Heading as='h3' size='md' mb={2}>
          Ingredients:
        </Heading>
        <div spacing={2}>
          {ingredientLines.map((line, index) => (
            <div key={index}>
              <div  color='green.500' />
              {line}
            </div>
          ))}
        </div>
      </div>
      </div>
      </div>
      
      
      )};

export default RecipePage;
      
