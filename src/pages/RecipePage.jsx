import { Heading, Image, Box, List, ListItem, ListIcon, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import {  } from "module";
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { MdCheckCircle } from 'react-icons/md';


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
    
    <Box p={6}>
      <Button onClick={handleBackButtonClick} mb={4}>
        Back
      </Button>
      <Box mb={8}>
        <Heading as='h2' size='xl' mb={4}>
          {label}
        </Heading>
        <Image src={image} alt={label} h='400px' objectFit='cover' />
      </Box>
      <Box mb={8}>
        <Heading as='h3' size='md' mb={2}>
          Meal Type:
        </Heading>
        <Box>{mealType.join(', ')}</Box>
      </Box>
      <Box mb={8}>
        <Heading as='h3' size='md' mb={2}>
          Dish Type:
        </Heading>
        <Box>{dishType.join(', ')}</Box>
      </Box>
      <Box mb={8}>
        <Heading as='h3' size='md' mb={2}>
          Total Cooking Time:
        </Heading>
        <Box>{totalTime} minutes</Box>
      </Box>
      {dietLabels.length > 0 && (
        <Box mb={8}>
          <Heading as='h3' size='md' mb={2}>
            Diet Label:
          </Heading>
          <Box>{dietLabels.join(', ')}</Box>
        </Box>
      )}
      <Box mb={8}>
        <Heading as='h3' size='md' mb={2}>
          Health Labels:
        </Heading>
        <List spacing={2}>
          {healthLabels.map((label) => (
            <ListItem key={label}>
              <ListIcon as={MdCheckCircle} color='green.500' />
              {label}
            </ListItem>
          ))}
        </List>
      </Box>
      {cautions.length > 0 && (
        <Box mb={8}>
          <Heading as='h3' size='md' mb={2}>
            Cautions:
          </Heading>
          <Box>{cautions.join(', ')}</Box>
        </Box>
      )}
      <Box mb={8}>
  <Heading as='h3' size='md' mb={2}>
    Nutrients:
  </Heading>
  <Box>Energy: {nutrients.kcal} kcal</Box>
  <Box>Protein: {nutrients.protein} g</Box>
  <Box>Fat: {nutrients.fat} g</Box>
  <Box>Carbs: {nutrients.carbs} g</Box>
  <Box>Cholesterol: {nutrients.cholesterol} mg</Box>
  <Box>Sodium: {nutrients.sodium} mg</Box>
</Box>

      <Box mb={8}>
        <Heading as='h3' size='md' mb={2}>
          Ingredients:
        </Heading>
        <List spacing={2}>
          {ingredientLines.map((line, index) => (
            <ListItem key={index}>
              <ListIcon as={MdCheckCircle} color='green.500' />
              {line}
            </ListItem>
          ))}
        </List>
      </Box>
      </Box>
      
      )};

export default RecipePage;
      
