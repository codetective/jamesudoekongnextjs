import { Box, Stack, Text, Flex } from "@chakra-ui/react";
import React from "react";
import WrapContent from "../general/WrapContent";

export default function AboutHeader({ title }) {
  return (
    <Box
      h="300px"
      bgImage={'url("/img/p1.jpg")'}
      bgColor={"blackAlpha.800"}
      bgBlendMode={"overlay"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      bgPos="center"
    >
      <WrapContent>
        <Stack h="300px" as={Flex} justifyContent={"center"}>
          <Text
            textTransform={"capitalize"}
            fontWeight={"bolder"}
            className="mfont"
            fontSize={["4xl", "4xl", "5xl", "5xl"]}
            pos={"relative"}
            color={"gray.200"}
            _before={{
              content: "''",
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "64px",
              height: "4px",
              borderRadius: "2px",
              background: "#ee5c27",
            }}
            as="h1"
            py="5"
          >
            {title || "About Us"}
          </Text>
        </Stack>
      </WrapContent>
    </Box>
  );
}
