import {
  Box,
  Container,
  Stack,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaLinkedin, FaFacebook } from "react-icons/fa";

import { AiTwotoneHeart } from "react-icons/ai";
import SocialButton from "./SocialButton";

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Flex align={"center"}>
          Created with <AiTwotoneHeart className="mx-2 red" /> by Muhamamd
          Sarmad Khalique
        </Flex>
        <Stack direction={"row"} spacing={6}>
          <SocialButton
            label={"Linkedin"}
            href={
              "https://www.linkedin.com/in/muhammad-sarmad-khalique-9b26a7197/"
            }
          >
            <FaLinkedin />
          </SocialButton>
          <SocialButton
            label={"facebook"}
            href={"https://www.facebook.com/MuhammadSarmadKhalique2001"}
          >
            <FaFacebook />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
