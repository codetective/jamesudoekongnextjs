import { Box, SimpleGrid, Text, Flex, Center } from "@chakra-ui/react";
import React from "react";
import WrapContent from "../general/WrapContent";

import {
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";

function StatsCard(props) {
  const { title, stat } = props;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
    >
      <StatLabel
        fontWeight={"medium"}
        fontSize="16px"
        isTruncated
        className="pfont"
      >
        {title}
      </StatLabel>
      <StatNumber fontSize={"2xl"} fontWeight={"medium"} className="mfont">
        {stat}
      </StatNumber>
    </Stat>
  );
}

export default function Stats() {
  return (
    <Box py="80px">
      <WrapContent>
        <SimpleGrid columns={[1, 1, 2, 2]} spacing="5">
          <Box>
            <Text as="h2" fontSize={["30px", "30px", "30px", "40px"]}>
              We've been shaping the society by motivating and supporting
              academic dreams of students since 2000
            </Text>
          </Box>
          <Box>
            <SimpleGrid columns={[1, 1, 1, 1]} spacing={{ base: 5, lg: 8 }}>
              <StatsCard
                title={"We have supported"}
                stat={"100+ beneficiaries"}
              />
              <StatsCard
                title={"for"}
                stat={"over 20 years and still going strong"}
              />
              {/* <StatsCard title={"Who speak"} stat={"100 different languages"} /> */}
            </SimpleGrid>
          </Box>
        </SimpleGrid>
      </WrapContent>
    </Box>
  );
}
