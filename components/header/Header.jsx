import { Box, Text, chakra, Flex, Icon } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import WrapContent from "../general/WrapContent";

export default function Header() {
  return (
    <Box h="650px" id="header-home">
      <WrapContent>
        <Flex pt={64} h="100%" mx="auto">
          <Box w="full" mx="auto">
            <chakra.p
              mb={2}
              fontSize="xs"
              fontWeight="semibold"
              letterSpacing="wide"
              color="gray.400"
              textTransform="uppercase"
            >
              Welcome to
            </chakra.p>
            <chakra.h1
              mb={3}
              fontSize={{ base: "3xl", md: "6xl" }}
              fontWeight="bold"
              lineHeight="shorter"
              className="pfont"
              color={"white"}
            >
              James Udoekong <br />
              Education Trust Fund
            </chakra.h1>
            <chakra.p mb={5} color="white" fontSize={{ md: "lg" }}>
              We motivate and support students through our robust Education
              trust fund.
            </chakra.p>
            <Box
              display="flex"
              w="fit-content"
              alignItems="center"
              as="a"
              aria-label="Sponsor our cause"
              href={"/donate"}
              rel="noopener noreferrer"
              bg="#ee5c27"
              color="white"
              borderWidth="1px"
              borderColor="gray.200"
              px="2em"
              h="40px"
              rounded="md"
              fontSize="md"
              outline="0"
              transition="all 0.3s"
              _hover={{
                bg: "gray.100",
                borderColor: "gray.300",
                color: "#ee5c27",
              }}
              _active={{
                borderColor: "gray.200",
              }}
              _focus={{
                boxShadow: "outline",
              }}
            >
              <Icon as={FaHeart} w="4" h="4" mr="1" />
              <Text as="strong" lineHeight="inherit" fontWeight="semibold">
                Donate
              </Text>
            </Box>
          </Box>
        </Flex>
      </WrapContent>
    </Box>
  );
}
