// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";
import { Center,Heading, Image } from "@chakra-ui/react";
import { data } from "../utils/data";
import RecipePage from "./RecipePage";

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

  const handleClick = (recipe) => {
    console.log(`Clicked recipe: ${recipe.label}`);
    // Open the RecipePage component with the selected recipe
  };
  

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
      <>
      <div
        className="card"
        key={label}
        style={{
          border: "2px solid black",
          borderRadius: "0.50rem",
          overflow: "hidden",
          padding: "0px",
          margin: "22px",
          width: "270px",
          height: "600px",
          cursor: "pointer",
          display: "inline-block",
          textAlign: "center",
          flexDirection: "column",
          backgroundColor: "white",
        }}
        onClick={() => handleClick(recipe)}
      >
        <Image src={image} alt={label} w="100%" h="300px" />
        <Heading as="h2" size="lg" my={2} color="black">
          {label}
        </Heading>
        {dietLabels.length > 0 && (
          <div color="black">
            <strong>Diet:</strong> {dietLabels.join(", ")}
          </div>
        )}
        {cautions.length > 0 && (
          <div color="black">
            <strong>Cautions:</strong> {cautions.join(", ")}
          </div>
        )}
        <div color="black">
          <strong>Meal Type:</strong> {mealType.join(", ")}
        </div>
        <div color="black">
          <strong>Dish Type:</strong> {dishType.join(", ")}
        </div>
        <div>
          {healthLabels.includes("Vegan") && (
            <div style={{ color: "green", fontWeight: "bold" }}>Vegan</div>
          )}
          {healthLabels.includes("Vegetarian") && (
            <div style={{ color: "green", fontWeight: "bold" }}>
              Vegetarian
            </div>
          )}
        </div>
      </div>
      </>
    );
    
  });
  
  return (
    <div className="body-page" style={{ backgroundColor: "blue" }}>
      <Heading textAlign="center" color="#E2E8F0">
        Welcome to my Recipe App
      </Heading>
      <div >
        <Center><input 
          type="text"
          placeholder="Search recipes..."
          onChange={handleSearch}
        /></Center>
      </div>
      <div>{recipes}</div>
      {RecipePage}
    </div>
  );
};

export default RecipeListPage;
