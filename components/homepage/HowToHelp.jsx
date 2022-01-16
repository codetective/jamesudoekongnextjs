import { Box, Center, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FaGifts, FaShareAlt } from "react-icons/fa";
import WrapContent from "../general/WrapContent";

export default function HowToHelp() {
  return (
    <WrapContent>
      <Box pb="80px">
        <Text
          as="h2"
          textTransform={"capitalize"}
          fontWeight={"bolder"}
          className="mfont"
          color="#ee5c27"
          fontSize={["4xl", "4xl", "5xl", "5xl"]}
          textAlign={"center"}
          py="40px"
        >
          You too can help!
        </Text>
        <SimpleGrid columns={[1, 1, 2, 2]} spacing={"10"}>
          <Box as={Link} href="/donate" cursor={"pointer"}>
            <Center
              cursor="pointer"
              color="gray.500"
              transition={"all .3s ease"}
              flexDir={"column"}
              p="40px"
              shadow={"2xl"}
              rounded={"lg"}
              _hover={{
                color: "white",
                bg: "#ee5c27",
              }}
            >
              <Icon as={FaGifts} fontSize={"80px"} />
              <Text
                textAlign={"center"}
                as="h2"
                fontSize="35px"
                fontWeight="semibold"
              >
                Donate
              </Text>
              <Text as="p" fontSize={"20px"} textAlign={"center"}>
                Donations are important to our work as an organisation, hence we
                can support more students with your funds.
              </Text>
            </Center>
          </Box>
          <Box
            as={Link}
            href="https://www.facebook.com/James-Udoekong-Education-Trust-Fund-117624183436700/"
          >
            <Center
              cursor="pointer"
              flexDir={"column"}
              p="40px"
              shadow={"2xl"}
              rounded={"lg"}
              color="gray.500"
              transition={"all .3s ease"}
              _hover={{
                color: "white",
                bg: "#ee5c27",
              }}
            >
              <Icon as={FaShareAlt} fontSize={"80px"} />
              <Text
                textAlign={"center"}
                as="h2"
                fontSize="35px"
                fontWeight="semibold"
              >
                Share on social media
              </Text>
              <Text as="p" fontSize={"20px"} textAlign={"center"}>
                Help others learn about our cause and to have a chance to
                support us too. Click here to view our Facebook Page.
              </Text>
            </Center>
          </Box>
        </SimpleGrid>
      </Box>
    </WrapContent>
  );
}
