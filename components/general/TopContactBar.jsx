import React from "react";
import { Flex, Box, Text, HStack, Icon } from "@chakra-ui/react";
import WrapContent from "./WrapContent";
import { FaEnvelope, FaHeart, FaPhoneAlt } from "react-icons/fa";

const SponsorButton = (
  <Box
    display={["none", "flex", "flex", "flex"]}
    alignItems="center"
    size={"small"}
    as="a"
    aria-label="Sponsor our cause"
    href={"/donate"}
    rel="noopener noreferrer"
    bg="gray.50"
    borderWidth="1px"
    borderColor="gray.200"
    px="1em"
    h="35px"
    rounded="md"
    fontSize="sm"
    color="gray.800"
    outline="0"
    transition="all 0.3s"
    _hover={{
      bg: "gray.100",
      borderColor: "gray.300",
    }}
    _active={{
      borderColor: "gray.200",
    }}
    _focus={{
      boxShadow: "outline",
    }}
  >
    <Icon as={FaHeart} w="4" h="4" color="red.500" mr="1" />
    <Box as="strong" lineHeight="inherit" fontWeight="semibold">
      Donate
    </Box>
  </Box>
);

function TopContactBar() {
  return (
    <WrapContent bgColor="#ee5c27">
      <HStack minH="60px" id="topBar">
        <Flex justifyContent={"space-between"} w="full">
          <Box>
            <Text
              color="white"
              fontWeight={"semibold"}
              display="flex"
              alignItems={"center"}
              fontSize={["small", "small", "md"]}
            >
              <Box as="span" pr="2">
                <FaEnvelope />
              </Box>
              <a href="mailto:info@jamesudoekongtrustfund.org">
                info@jamesudoekongtrustfund.org
              </a>
            </Text>
            <Text
              color="white"
              fontWeight={"semibold"}
              display="flex"
              alignItems={"center"}
              fontSize={["small", "small", "md"]}
            >
              <Box as="span" pr="2">
                <FaPhoneAlt />
              </Box>
              <a href="tel:+2348034023476"> +234 803 402 3476</a>
            </Text>
          </Box>
          <Flex alignItems={"center"} justifyContent={"right"}>
            {SponsorButton}
          </Flex>
        </Flex>
      </HStack>
    </WrapContent>
  );
}

export default TopContactBar;
