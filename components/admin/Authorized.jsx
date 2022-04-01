/* eslint-disable react/no-unescaped-entities */

import {
  Box,
  Center,
  SimpleGrid,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";
import DrawerForAdmin from "./Drawer";

const adminLinks = [
  {
    link: "/admin/managebeneficiary",
    text: "Manage Beneficiary",
  },

  {
    link: "/admin/managegallery",
    text: "Manage Gallery",
  },

  {
    link: "/admin/managenews",
    text: "Manage News",
  },
];

export default function Authorised() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalType, setModalType] = useState("");

  const handleClick = (type) => {
    setModalType(type);
    onOpen();
  };

  return (
    <Stack as={Box} textAlign={"center"} py={{ base: 20, md: 36 }}>
      <Text as={"span"} fontSize={"20px"} color={"green.500"}>
        You're logged in!
      </Text>
      <Text
        as="h1"
        fontWeight={600}
        fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
        className="mfont"
      >
        what do you want to do?
      </Text>
      <SimpleGrid columns={[1, 2, 3]} spacing="10">
        <Box onClick={() => handleClick("B")} cursor={"pointer"}>
          <Center
            cursor="pointer"
            color="gray.500"
            transition={"all .3s ease"}
            flexDir={"column"}
            p="40px"
            shadow={"md"}
            borderTop={"1px solid"}
            borderTopColor={"gray.100"}
            rounded={"lg"}
            _hover={{
              color: "white",
              bg: "#ee5c27",
            }}
          >
            <Text
              textAlign={"center"}
              as="h2"
              fontSize="35px"
              fontWeight="semibold"
            >
              Add Beneficiary
            </Text>
          </Center>
        </Box>
        <Box onClick={() => handleClick("G")} cursor={"pointer"}>
          <Center
            cursor="pointer"
            color="gray.500"
            transition={"all .3s ease"}
            flexDir={"column"}
            p="40px"
            shadow={"md"}
            borderTop={"1px solid"}
            borderTopColor={"gray.100"}
            rounded={"lg"}
            _hover={{
              color: "white",
              bg: "#ee5c27",
            }}
          >
            <Text
              textAlign={"center"}
              as="h2"
              fontSize="35px"
              fontWeight="semibold"
            >
              Add to Gallery
            </Text>
          </Center>
        </Box>
        <Box onClick={() => handleClick("N")} cursor={"pointer"}>
          <Center
            cursor="pointer"
            color="gray.500"
            transition={"all .3s ease"}
            flexDir={"column"}
            p="40px"
            shadow={"md"}
            borderTop={"1px solid"}
            borderTopColor={"gray.100"}
            rounded={"lg"}
            _hover={{
              color: "white",
              bg: "#ee5c27",
            }}
          >
            <Text
              textAlign={"center"}
              as="h2"
              fontSize="35px"
              fontWeight="semibold"
            >
              Add News
            </Text>
          </Center>
        </Box>
        {/* links */}
        {adminLinks.map((e, i) => {
          return (
            <Box key={i} as={Link} href={e.link} cursor={"pointer"}>
              <Center
                cursor="pointer"
                color="gray.500"
                transition={"all .3s ease"}
                flexDir={"column"}
                p="40px"
                shadow={"md"}
                borderTop={"1px solid"}
                borderTopColor={"gray.100"}
                rounded={"lg"}
                _hover={{
                  color: "white",
                  bg: "#ee5c27",
                }}
              >
                <Text
                  textAlign={"center"}
                  as="h2"
                  fontSize="35px"
                  fontWeight="semibold"
                >
                  {e.text}
                </Text>
              </Center>
            </Box>
          );
        })}
      </SimpleGrid>
      <DrawerForAdmin type={modalType} isOpen={isOpen} onClose={onClose} />
    </Stack>
  );
}
