import { Flex } from "@chakra-ui/react";
import React from "react";
import ItemCard from "../ItemCard/ItemCard";

const ItemsPreview = ({ items }) => {
  return (
    <Flex
      flexDirection={{ base: "column", md: "row" }}
      flexWrap={{ md: "wrap" }}
      width={"full"}
      justifyContent={"center"}
    >
      {items?.map((item, idx) => (
        <ItemCard key={idx} data={item} />
      ))}
    </Flex>
  );
};

export default ItemsPreview;
