import { Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import WrapContent from "../general/WrapContent";

export default function MissionVision() {
  return (
    <WrapContent bgColor={"gray.50"}>
      <SimpleGrid py="80px" columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack
          spacing="5"
          bg="white"
          boxShadow="md"
          position="relative"
          p="8"
          _before={{
            content: '""',
            width: "50px",
            height: "50px",
            border: "15px solid #ee5c27",
            background: "rgb(255, 255, 255)",
            borderRadius: "50%",
            position: "absolute",
            top: "-25px",
            left: "-10px",
            zIndex: "10",
          }}
        >
          <Text fontWeight={"bold"} fontSize={"30px"} as="h2" className="pfont">
            Mission
          </Text>
          <Text color={"gray.600"} fontSize={"md"} as="p">
            The James Udoekong Education Trust Fund has been envisioned to
            provide hope, encouragement and motivation to all sons and daughters
            of Aka Ikot Udo Eno desirous to pursue higher education irrespective
            of their parental background
          </Text>
        </Stack>
        <Stack
          spacing="5"
          bg="white"
          boxShadow="md"
          p="8"
          pos="relative"
          _before={{
            content: '""',
            width: "50px",
            height: "50px",
            border: "15px solid #ee5c27",
            background: "rgb(255, 255, 255)",
            borderRadius: "50%",
            position: "absolute",
            top: "-25px",
            left: "-10px",
            zIndex: "10",
          }}
        >
          <Text fontSize={"30px"} fontWeight={"bold"} as="h2" className="pfont">
            Vision
          </Text>
          <Text color={"gray.600"} fontSize={"md"} as="p">
            The James Udoekong Education Trust Fund will be a veritable source
            of financial assistance to Aka Ikot Udo Eno indigenes and its
            environs and will grow into one of the top five scholarship
            programmes for indigent students of Ibiono Ibom Local Government
            Area by 2030.
          </Text>
        </Stack>
      </SimpleGrid>
    </WrapContent>
  );
}
