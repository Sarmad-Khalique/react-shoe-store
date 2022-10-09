import { Flex, Box, Image, useColorModeValue } from "@chakra-ui/react";

const ItemCard = ({ data }) => {
  return (
    <Flex
      p={{ base: 5, md: 25, lg: 50 }}
      w="fit"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
        sx={{ overflow: "hidden" }}
      >
        <Box sx={{ overflow: "hidden" }}>
          <Image
            src={data.imageURL}
            alt={`Picture of ${data.name}`}
            roundedTop="lg"
            className="scale"
          />
        </Box>

        <Box p="6">
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {data.name}
            </Box>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Box fontSize="lg" color={useColorModeValue("gray.800", "white")}>
              <Box
                as="span"
                color={useColorModeValue("gray.800", "white")}
                fontSize="lg"
              >
                $
              </Box>
              {data.price.toFixed(2)}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default ItemCard;
