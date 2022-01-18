import React from "react";

import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import BoardMemberCard from "./BoardMemberCard";
import WrapContent from "../general/WrapContent";

const boardMembers = [
  {
    img: "/img/founder_no_bg.png",
    role: "Founder",
    name: "Obong (Engr.) Anthony Udoekong",
    phone: "+2348034023476",
    email: "anthony.udoekong@yahoo.com",
  },
  {
    img: "/img/joseph_no_bg.png",
    role: "Chairman",
    name: "Mr. Joseph Akpan Ina",
    phone: "+2348020914508",
    email: null,
  },
  {
    img: "/img/pumoren2_no_bg.png",
    role: "Gen. Secretary",
    name: "Comr. John Peter Umoren",
    phone: "+2348024508219",
    email: "gigijollypa1@gmail.com",
  },
  {
    img: "/img/edetudofia_no_bg.png",
    role: "Pioneer Secretary",
    name: "Mr. Edet V. Udofia",
    phone: "+2348022817577",
    email: null,
  },
  {
    img: "/img/emilia_no_bg.png",
    role: "Treasurer",
    name: "Snr. Mgr. Emilia Umoh",
    phone: "+2348022906555",
    email: null,
  },
  {
    img: "/img/ChiefAkpan.png",
    role: "Member",
    name: "Rtd. Sgt. Akpan Jonah Udoh",
    phone: null,
    email: null,
  },
  {
    img: "/img/Mrs.Lanky.png",
    role: "Member",
    name: "Mrs. Eno Lanky A. Simeon",
    phone: null,
    email: null,
  },
];

export default function BoardMembersSection() {
  return (
    <Box py="80px" bg="#ee5c27">
      <WrapContent>
        <Box>
          <Text
            as="h2"
            textTransform={"capitalize"}
            fontWeight={"bolder"}
            className="mfont"
            color="white"
            fontSize={["4xl", "4xl", "5xl", "5xl"]}
            textAlign={"center"}
          >
            Board Members
          </Text>
          <Text color="white" textAlign={"center"}>
            ...the wonderful people who run the foundation
          </Text>
        </Box>
        <SimpleGrid columns={[1, 1, 2, 3]} spacing="10">
          {boardMembers.map((m, i) => {
            return <BoardMemberCard m={m} key={i} />;
          })}
        </SimpleGrid>
      </WrapContent>
    </Box>
  );
}
