import React from "react";
import {
  Box,
  Center,
  Container,
  useDisclosure,
  Collapse,
} from "@chakra-ui/react";
import { Button, Text } from "@chakra-ui/react";
import { BsChevronCompactUp, BsChevronCompactDown } from "react-icons/bs";

export default function CollapseEx() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Container maxW="container.xl" px={8} py="20">
      <Text
        as="h1"
        textTransform={"capitalize"}
        fontWeight={"bolder"}
        className="pfont"
        color="#ee5c27"
        fontSize={["4xl", "4xl", "5xl", "5xl"]}
        textAlign={"center"}
        py="4"
      >
        Brief history of The Trust Fund
      </Text>
      <Collapse startingHeight={290} in={isOpen} animateOpacity>
        <Box className="ofont">
          <Text as="p" p="2">
            It all started in the Annual General Meeting of Aka Ikot Udo Eno
            Development Union (ADU) on Tuesday, December 26, 2000.
          </Text>
          <Text as="p" p="2">
            Venue was the Gravel Union Community town hall. The idea was
            spontaneous and absolutely not premeditated. The item on the agenda
            of the AGM was the financial report which showed an impressive
            revenue profile on the one side and a matching expenditure details
            on the other side over the year under review.
          </Text>
          <Text as="p" p="2">
            <Text as="b">The Problem:</Text>
            <br />
            What was however discomforting and which spurred and agitated the
            mind was the narration of the expenditure items all of which had
            nothing to do with development and growth of the Community. Items
            like settlement of policemen to resolve one case or another, payment
            of lawyers’ fees for court appearances, transport and logistics for
            community witnesses, and all similar line items. In fairness to the
            community leaders, these were expenditures and payments that had to
            be incurred in response to exigencies that arose in the course of
            the year.
          </Text>
          <Text as="p" p="2">
            However not one of them touched on the real challenge of the
            community which is DEVELOPMENT. Yes development. After all, the name
            of the Union is Aka Ikot Udo Eno DEVELOPMENT Union. Development of
            human capital and infrastructure. As it turned out the development
            challenge of any hue was not listed and was not going to be
            mentioned in the year’s proceeding.
          </Text>

          <Text as="p" p="2">
            <Text as="b">Birth of the foundation:</Text>
            <br />
            The individual who picked up the gauntlet and responded to the
            dictates of his conscience was Engr. Anthony Udoekong, a young man
            in his 30s who spoke to announce the institution forthwith of an
            Education Trust Fund called James Udoekong Education Trust Fund in
            memory of his late father, who was a lover of education and its
            development potentials.
            <br />
            He announced an immediate donation of N50,000 (Fifty Thousand
            Naira), at the time a substantial amount of money. He announced for
            clarity that the Fund was essentially a scholarship programme for
            students of Aka Ikot Udo Eno origin wherever they may be studying in
            tertiary institutions.
          </Text>
          <Text as="p" p="2">
            <Text as="b">The Way Forward:</Text> <br />
            This was well received by the house with a thunderous ovation and
            immediately a board of Trustees was created andMr. Joseph Akpan
            Inawas tasked to chair the board. Mr. Edet Vincent Udofia was named
            the Secretary andMagistrate Emilia Umoh , Comr. John Peter Umoren
            Rtd. Sgt. Akpan Jonah Udoh and Mrs. Eno Lanky A. Simeon were
            nominated and ratified as members, with of course the life patron
            Engr. Anthony Michael Udoekong . What followed soon was outpouring
            of support with pledges from many other well-meaning indigenes. A
            bank account was opened thereafter at United Bank for Africa office
            on Abak Road Uyo to facilitate remittance of funds by the patron and
            the various donors. The Trustees met and fashioned out modalities
            and criteria for award and disbursement of the scholarship funds to
            qualified students.
          </Text>
        </Box>
      </Collapse>

      <Button
        display={"block"}
        fontWeight={"semibold"}
        className="mfont"
        textTransform={"uppercase"}
        aria-controls="example-panel"
        onClick={onToggle}
        m="auto"
        outline="none"
        variant="flushed"
        _focus={{
          boxShadow: "none",
        }}
        textAlign={"center"}
        color="#ee5c27"
      >
        <Center>
          <Text>{!isOpen ? "Read More" : "Read Less"}</Text>
          <Box textAlign={"center"}>
            {!isOpen ? <BsChevronCompactDown /> : <BsChevronCompactUp />}
          </Box>
        </Center>
      </Button>
    </Container>
  );
}
