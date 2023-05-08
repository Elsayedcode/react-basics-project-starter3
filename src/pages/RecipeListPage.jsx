import { Heading, Image, Box } from "@chakra-ui/react";
import { data } from "../utils/data";

export const RecipeListPage = () => {
  const recipes = data.hits.map((hit) => {
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
        key={label}
        borderWidth="5px"
        borderRadius="lg"
        overflow="hidden"
        p={5}
        my={5}
        w="310px"
        h="600px"
        mx="auto"
        cursor="pointer"
        textAlign="center"
        margin="20px 20px 20px 20px"
        display="inline-block"
        flexDir="row"
      >
        <Image src={image} alt={label} h="200px" w="500px" objectFit="cover" />
        <Heading as="h2" size="lg" marginBottom="10px">
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
        <Box mt={50}>
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
    <div className="page-body">
      <Heading textAlign="center" mb="150px" mt="50px">
        Your Recipe App
      </Heading>
      <div>{recipes}</div>
    </div>
  );
};
