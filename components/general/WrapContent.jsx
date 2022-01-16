import { Box, Container } from "@chakra-ui/react";
import React from "react";

function WrapContent({ children, bgColor }) {
  return (
    <Box bgColor={bgColor} w="100%">
      <Container maxW="container.xl" px={8}>
        {children}
      </Container>
    </Box>
  );
}

export default WrapContent;
