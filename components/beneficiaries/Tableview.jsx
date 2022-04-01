/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { chakra, Flex, Button, SimpleGrid, Box } from "@chakra-ui/react";

export default function Tableview({
  person,
  pid,
  admin,
  deletePerson,
  onOpen,
}) {
  return (
    <Flex
      direction={{ base: "row", md: "column" }}
      bg="white"
      borderBottom={"1px solid"}
      borderColor={"gray.200"}
    >
      <SimpleGrid
        display={{ base: "none", md: pid === 0 ? "grid" : "none" }}
        spacing={2}
        columns={admin ? [1, 1, 4, 4] : [1, 1, 3, 3]}
        w={{ base: 120, md: "full" }}
        textTransform="uppercase"
        bg="gray.100"
        py={{ base: 2, md: 4 }}
        px={{ base: 2, md: 10 }}
        fontSize="md"
        fontWeight="light"
      >
        <Box className="pfont">Name</Box>
        <Box className="pfont" textAlign={{ md: "center" }}>
          Course of Study
        </Box>
        <chakra.span className="pfont" textAlign={{ md: "right" }}>
          Institution
        </chakra.span>
        {admin && (
          <chakra.span className="pfont" textAlign={{ md: "right" }}>
            actions
          </chakra.span>
        )}
      </SimpleGrid>

      <SimpleGrid
        spacingY={3}
        spacingX={5}
        columns={admin ? { base: 1, md: 4 } : { base: 1, md: 3 }}
        w="full"
        py={2}
        fontWeight="light"
      >
        <span>
          <Box pr="2" as="span" fontWeight="bold">
            {pid + 1}
          </Box>
          {person.name}
        </span>
        <chakra.span
          textOverflow="ellipsis"
          // overflow="hidden"
          // whiteSpace="nowrap"
        >
          <Box
            as="i"
            className="pfont"
            fontWeight={"light"}
            display={["inline", "inline", "none", "none"]}
          >
            Course :
          </Box>
          {" " + person.course}
        </chakra.span>
        <Flex justify={{ md: "end" }}>
          <chakra.span
            textOverflow="ellipsis"
            // overflow="hidden"
            // whiteSpace="nowrap"
          >
            <Box
              as="i"
              fontWeight={"light"}
              className="pfont"
              display={["inline", "inline", "none", "none"]}
            >
              School :
            </Box>
            {" " + person.institution}
          </chakra.span>
        </Flex>
        {admin && (
          <Flex justify={{ md: "end" }}>
            <Button
              variant="outline"
              color={"red"}
              colorScheme={"red"}
              size="sm"
              onClick={() => deletePerson(person.id)}
            >
              Delete
            </Button>
            <Button
              variant="outline"
              color={"blue.500"}
              colorScheme={"blue.500"}
              size="sm"
              ml="2"
              onClick={() => onOpen("B", person)}
            >
              Edit
            </Button>
          </Flex>
        )}
      </SimpleGrid>
    </Flex>
  );
}
