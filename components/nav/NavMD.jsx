import { Flex, Image, Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import NavLink from "./NavLink";

const navStyle = {
  margin: "0 5px",
  color: "#97320a",
  fontSize: "1.2rem",
  fontFamily: "Open Sans",
};

function NavMD(props) {
  return (
    <>
      <Link href="/">
        <a style={{ display: "flex" }}>
          <Box overflow="hidden">
            <Image src={"/img/logo.png"} w="80px" h="100%" alt="logo" />{" "}
          </Box>
        </a>
      </Link>
      <Flex alignItems="center">
        <NavLink href="/" style={navStyle} linkClass="link-md">
          <Text className="afont">Home</Text>
        </NavLink>

        <NavLink href="/about" style={navStyle} linkClass="link-md">
          <Text className="afont" display="block">
            About
          </Text>
        </NavLink>
        <NavLink href="/focus" style={navStyle} linkClass="link-md">
          <Text className="afont">Focus</Text>
        </NavLink>
        <NavLink href="/benficiaries" style={navStyle} linkClass="link-md">
          <Text className="afont">Beneficiaries</Text>
        </NavLink>
        <NavLink href="/News" style={navStyle} linkClass="link-md">
          <Text className="afont">News</Text>
        </NavLink>

        <NavLink href="/contact" style={navStyle} linkClass="link-md">
          <Text className="afont">Contact</Text>
        </NavLink>
      </Flex>
    </>
  );
}

export default NavMD;
