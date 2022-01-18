import { Box, Flex, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import WrapContent from "../general/WrapContent";

export default function Origin() {
  return (
    <WrapContent>
      <Box py="80px">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              as="h2"
              textTransform={"capitalize"}
              fontWeight={"bolder"}
              className="mfont"
              color="#ee5c27"
              fontSize={["4xl", "4xl", "5xl", "5xl"]}
            >
              The Origins...
            </Text>
            <Text color={"gray.700"} fontSize={"md"} className="ofont">
              Engr. Anthony Udoekong, a young man in his 30s who spoke to
              announce the institution forthwith of an Education Trust Fund
              ...in memory of his late father, a lover of education and its
              development potentials announced an immediate donation of N50,000
              (Fifty Thousand Naira) which marked the beginning of a scholarship
              programme for students of Aka Ikot Udo Eno origin wherever they
              may be studying in tertiary institutions.
            </Text>
            <Text color={"gray.700"} fontSize={"md"} className="ofont">
              Education is vital but can be expensive. The James Udoekong
              Education Trust Fund will be a veritable source of financial
              assistance to Aka Ikot Udo Eno indigenes and its environs and will
              grow into one of the top five scholarship programmes for indigent
              students of Ibiono Ibom Local Government Area by 2030.
            </Text>
          </Stack>
          <Flex>
            <Image
              m="auto"
              rounded={"md"}
              alt={"feature image"}
              src={"/img/p1.jpg"}
              objectFit={"cover"}
            />
          </Flex>
        </SimpleGrid>
      </Box>
    </WrapContent>
  );
}
