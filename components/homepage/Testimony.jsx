import { Avatar, Box, Stack, Text, useColorModeValue } from "@chakra-ui/react";

export default function Testimony() {
  return (
    <Stack
      bg={useColorModeValue("gray.50", "gray.800")}
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={"center"}
      direction={"column"}
    >
      <Text
        fontSize={{ base: "xl", md: "2xl" }}
        textAlign={"center"}
        maxW={"3xl"}
        pos="relative"
        id="testimony_text"
      >
        I'm so grateful to Engr. Udoekong and the entire organisation for the
        financial support during my studies in the university
      </Text>
      <Box textAlign={"center"}>
        <Avatar src={"/img/p2.jpg"} alt={"Anonymous Beneficiary"} mb={2} />

        <Text fontWeight={600}>(Anonymous)</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.400", "gray.400")}>
          Beneficiary
        </Text>
      </Box>
    </Stack>
  );
}
