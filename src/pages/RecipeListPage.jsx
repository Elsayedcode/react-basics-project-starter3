// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";
import { Heading, Image, Box, Input, Center } from "@chakra-ui/react";
import { data } from "../utils/data";




const RecipeListPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredRecips = data.hits.filter((hit) => {
    const { recipe } = hit;
    const { label, healthLabels } = recipe;
    const normalizedLabel = label.toLowerCase();
    const normalizedSearchQuery = searchQuery.toLowerCase();

    return (
      normalizedLabel.includes(normalizedSearchQuery) ||
      healthLabels.some((label) =>
        label.toLowerCase().includes(normalizedSearchQuery)
      )
    );
  });

  const recipes = filteredRecips.map((hit) => {
    const { recipe } = hit;
    const {
      label,
      image,
      dietLabels,
      cautions,
      mealType,
      dishType,
      healthLabels,
    } = recipe;

    return (
      <Box
        className="card"
        key={label}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={4}
        my={4}
        w="25%"
        h="650px"
        m="10px"
        ml="60px"
        cursor="pointer"
        display="inline-block"
        textAlign="center"
        flexDir="column"
        bgColor="blue.300"
      >
        <Image src={image} alt={label} h="300px" objectFit="cover" />
        <Heading as="h2" size="lg" my={2}>
          {label}
        </Heading>
        {dietLabels.length > 0 && (
          <Box>
            <strong>Diet:</strong> {dietLabels.join(", ")}
          </Box>
        )}
        {cautions.length > 0 && (
          <Box>
            <strong>Cautions:</strong> {cautions.join(", ")}
          </Box>
        )}
        <Box>
          <strong>Meal Type:</strong> {mealType.join(", ")}
        </Box>
        <Box>
          <strong>Dish Type:</strong> {dishType.join(", ")}
        </Box>
        <Box mt={2}>
          {healthLabels.includes("Vegan") && (
            <Box as="span" color="green.500" fontWeight="bold" mr={2}>
              Vegan
            </Box>
          )}
          {healthLabels.includes("Vegetarian") && (
            <Box as="span" color="green.500" fontWeight="bold" mr={2}>
              Vegetarian
            </Box>
          )}
        </Box>
      </Box>
    );
  });

  return (
    
    <div className="body-page">
      <Heading textAlign="center">Your Recipe App</Heading>
      <Center>
        <Input
          type="text"
          placeholder="Search recipes..."
          onChange={handleSearch}
          mb="5rem"
        />
      </Center>
      {recipes}
      
    </div>
  );
};

export default RecipeListPage;
