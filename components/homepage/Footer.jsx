import {
  Box,
  Container,
  HStack,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { FaEnvelopeOpen, FaFacebook, FaPhoneAlt } from "react-icons/fa";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box bg="#282828" color="white">
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Link href="/">
                <a style={{ display: "flex" }}>
                  <Box overflow="hidden">
                    <Image src={"/img/logo.png"} w="50%" h="100%" alt="logo" />{" "}
                  </Box>
                </a>
              </Link>{" "}
            </Box>
            <Text fontSize={"sm"}>
              © {new Date().getFullYear()} The James Udoekong Foundation
            </Text>
          </Stack>

          <Stack align={"flex-start"} spacing={"4"}>
            <ListHeader>Get Involved</ListHeader>
            <Link href={"/donate"}>Donate</Link>
            <Link href={"/news"}>News</Link>
            <Link href={"/gallery"}>Gallery</Link>
            <Link href={"/about"}>Board of Trustees</Link>
            <Link href={"/admin"}>Login</Link>
          </Stack>

          <Stack align={"flex-start"} spacing="4">
            <ListHeader>Contact Us</ListHeader>
            <Link
              passHref
              href={
                "https://www.facebook.com/James-Udoekong-Education-Trust-Fund-117624183436700/"
              }
            >
              <HStack spacing="4" cursor={"pointer"}>
                <Icon as={FaFacebook} fontSize="30px" />
                <Text>James Udoekong Education Trust Fund</Text>
              </HStack>
            </Link>
            <Link passHref href={"mailto:info@jamesudoekongtrustfund.org"}>
              <HStack spacing="4" cursor={"pointer"}>
                <Icon as={FaEnvelopeOpen} fontSize="30px" />
                <Text>info@jamesudoekongtrustfund.org</Text>
              </HStack>
            </Link>
            <Link passHref href={"tel:+2348034023476"}>
              <HStack spacing="4" cursor={"pointer"}>
                <Icon as={FaPhoneAlt} fontSize="30px" />
                <Text>+234 803 402 3476</Text>
              </HStack>
            </Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
