import {
  Box,
  Flex,
  Text,
  IconButton,
  Collapse,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Switch,
  useColorMode,
} from "@chakra-ui/react";

import { HamburgerIcon, CloseIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const NAV_ITEMS = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Store",
      children: [
        {
          label: "Men",
          subLabel: "An Exclusive Range of Men Sneakers",
          href: "/store/men",
        },
        {
          label: "Women",
          subLabel: "An Exclusive Range of Women Shoes",
          href: "/store/women",
        },
        {
          label: "Kids",
          subLabel: "An Exclusive Range of Kids Shoes",
          href: "/store/kids",
        },
      ],
    },
  ];

  console.log(colorMode);
  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          >
            <Link to={"/"}>Shoe Store</Link>
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav NAV_ITEMS={NAV_ITEMS} />
          </Flex>
        </Flex>
        <Flex
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          align={"center"}
        >
          <SunIcon />
          <Switch
            colorScheme="pink"
            marginX={2}
            onChange={toggleColorMode}
            isChecked={colorMode === "dark"}
          />
          <MoonIcon />
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav NAV_ITEMS={NAV_ITEMS} />
      </Collapse>
    </Box>
  );
};

export default Navbar;
