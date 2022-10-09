import { Flex, VStack, Box } from "@chakra-ui/react";
import React from "react";
import ItemCard from "../ItemCard/ItemCard";

const ItemsCategoricalPreview = ({ category, items }) => {
  return (
    <VStack>
      <Box
        fontSize="2xl"
        fontWeight="semibold"
        as="h4"
        lineHeight="tight"
        sx={{ textTransform: "uppercase" }}
      >
        {category}
      </Box>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        flexWrap={{ md: "wrap" }}
        width={"full"}
        justifyContent={"center"}
      >
        {items?.map((item) => (
          <ItemCard data={item} />
        ))}
      </Flex>
    </VStack>
  );
};

export default ItemsCategoricalPreview;
