import React from "react";
import { Button, Text, Box, Heading, Container } from "@chakra-ui/react";
import WrapContent from "../general/WrapContent";

export default function Focus() {
  return (
    <WrapContent>
      <Box bg="white" textAlign="center" pt={"6rem"} pb={"4rem"}>
        <Text
          className="afont"
          as="h2"
          fontSize={["24px", "28px"]}
          fontWeight=" 500"
          letterSpacing="0"
          lineHeight="1.4"
          mb="5"
          p={0}
        >
          <Text as="span">
            We have one focus! <br />
          </Text>
          <Text
            as="h2"
            textTransform={"capitalize"}
            fontWeight={"bolder"}
            className="mfont"
            color="#ee5c27"
            fontSize={["4xl", "4xl", "5xl", "5xl"]}
            textAlign={"center"}
          >
            facilitating education.
          </Text>
        </Text>
        <Container maxW="container.lg" pb="5">
          <Text as="p">
            In Aka Ikot Udo Eno, informal and the non-formal education had been
            part of the society with a lower percentage of the individuals
            acquiring formal education to the tertiary level.
          </Text>
          <Text as="p">
            In Aka Ikot Udo Eno, informal and the non-formal education had been
            part of the society with a lower percentage of the individuals
            acquiring formal education to the tertiary level.
          </Text>
          <Text as="p">
            Efforts from the citizens to acquire formal education from the
            Primary to the Secondary levels have been commendable despite the
            lack of Secondary School in the community. Normally, citizens living
            in Aka Ikot Udo Eno, after completion of Primary Education, go to
            nearby communities to attend Secondary School.
          </Text>
        </Container>

        <Button
          size="md"
          rounded="md"
          color="white"
          className="mfont"
          bg="#ee5c27"
          px={"20px"}
          _hover={{
            bg: "white",
            color: "#ee5c27",
            border: "1px solid #ee5c27",
          }}
        >
          Read more about this.
        </Button>
      </Box>
    </WrapContent>
  );
}
