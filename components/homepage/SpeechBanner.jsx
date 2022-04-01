/* eslint-disable react/no-unescaped-entities */

import React from "react";
import {
  Box,
  Container,
  Flex,
  Text,
  Heading,
  Avatar,
  HStack,
  Stack,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

const SpeechBanner = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      overflow={"hidden"}
      position="relative"
      _before={{
        content: "''",
        width: "50px",
        height: "50px",
        background: "white",
        borderRadius: "50%",
        position: "absolute",
        top: "-25px",
        left: "200px",
        zIndex: "10",
      }}
      _after={{
        content: "''",
        width: "50px",
        zIndex: "10",
        height: "50px",
        background: "#ee5c27",
        borderRadius: "50%",
        position: "absolute",
        bottom: "-30px",
        right: "60%",
      }}
    >
      {" "}
      <Box
        bg="#ee5c27"
        left="0"
        width="100vw"
        position="relative"
        height={["fit-content", "fit-content", "fit-content", "fit-content"]}
        overflowY="hidden"
      >
        <Container maxW="container.xl" px={8}>
          <Flex wrap w="100%" flexDir={["column", "column", "row", "row"]}>
            <Stack
              w={["100%", "100%", "60%", "60%"]}
              alignItems="flex-start"
              flexDir="column"
              justifyContent="center"
              py="50px"
              pr="1"
            >
              <Heading
                className="qfont"
                as="h4"
                fontSize={["20px", "28px"]}
                fontWeight=" 400"
                letterSpacing="0"
                color="white"
                lineHeight="1.6"
                mb="5"
                p={0}
                py="3"
              >
                <span className="span">
                  "Snippet from speech Snippet from speech{" "}
                </span>
                <span className="span">
                  Snippet from speech Snippet from speech"
                </span>
              </Heading>
              <Box>
                <HStack>
                  <Avatar
                    name="Debo Thomas"
                    size="md"
                    src="/img/founder_no_bg.png"
                    border="2px solid #fa822f"
                  />
                  <Text
                    as="small"
                    className="exo"
                    fontSize="14px"
                    color="#fcfcfc"
                  >
                    Engr Anthony, 20th Anniversary Speech
                  </Text>
                </HStack>
                <Text
                  pl="56px"
                  as="small"
                  className="exo"
                  fontSize="12px"
                  color="#fcfcfc"
                  cursor={"pointer"}
                  onClick={onOpen}
                >
                  SEE FULL SPEECH
                </Text>
              </Box>
            </Stack>
            <Stack
              w={["100%", "100%", "35%", "35%"]}
              display={["none", "none", "none", "flex"]}
              height="100%"
              borderRadius="0% 0% 0% 1000px"
              bg="url('/img/class.jpg')"
              bgSize="cover"
              align="flex-end"
              position={["initial", "initial", "absolute", "absolute"]}
              top="0px"
              right="0"
              justify="center"
              pr={["35px", "35px", "35px", "65px"]}
              pl="40px"
              py="45px"
            />
          </Flex>
        </Container>
        <Drawer size="lg" isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              <Text as="h1">
                20<sup>th</sup> Anniversary Speech by Founder
              </Text>
            </DrawerHeader>

            <DrawerBody>
              <Text pb="5" fontSize={"18px"}>
                He attended St, Mary’s Practicing School, Ikot Nseyen where he
                passed his First School Leaving Certificate examination at
                Distinction Level.
                <br /> He proceeded to the Government Technical College, Abak,
                where he equally came out as the best graduating student in
                1982.
                <br />
                He immediately got admitted into the University of Nigeria,
                Nsukka where he studied Electronic Engineering and graduated
                with a Second className honours degree in 1987.
                <br />
                <br />
                He also obtained a Master’s degree in Engineering Management
                from the University of Port Harcourt in 1998, and another
                Master’s degree in Project Management from the George Washington
                University, USA in 2005. He is a Project Management Professional
                (PMP), an elitist project management certification of The
                Project Management Institute of America.
              </Text>
              <Text pb="5" fontSize={"18px"}>
                Engr. Udoekong was retained by Datamatics Nigeria Ltd, a
                computer engineering company in Lagos where he did his one year
                National Youth Service programme in 1988.
              </Text>
              <Text pb="5" fontSize={"18px"}>
                He soon moved over to Societe Internationale de
                Telecommunications Aeronautiques, SITA, rising within a record
                time to become the Regional Manager West Africa before he left
                in 2004 to join Motorola as Project Manager.
              </Text>
              <Text pb="5" fontSize={"18px"}>
                At Motorola, he again progressed rapidly up the ladder, through
                working hard and smart, to become the Systems Integration Lead
                for Sub-Sahara Africa. He decided to take his exit in 2011 to
                establish Autrax Solutions Limited engaged in telecommunication
                engineering project management and consultancy.
              </Text>
              <Text pb="5" fontSize={"18px"}>
                He is a Member, Nigeria Society of Engineers (MNSE) and
                registered by The Council for the Regulation of Engineering in
                Nigeria (COREN). He is a former Publisher of IWADA Bulletin, a
                publication of Ibiono Ibom Welfare and Development Association,
                Lagos, where he once served as a President.
              </Text>
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Close
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>
    </Box>
  );
};

export default SpeechBanner;
