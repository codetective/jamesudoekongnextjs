import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Text,
  Button,
  Center,
  Stack,
  Box,
} from "@chakra-ui/react";
import Link from "next/link";

export default function About() {
  return (
    <Box bg="gray.100">
      <Container maxW={"container.xl"} py={"80px"} px={8}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Flex>
            <Image
              m="auto"
              rounded={"md"}
              alt={"feature image"}
              src={"/img/founder.jpeg"}
              objectFit={"cover"}
            />
          </Flex>
          <Stack spacing={4}>
            <Text
              as="h2"
              textTransform={"capitalize"}
              fontWeight={"bolder"}
              className="mfont"
              color="#ee5c27"
              fontSize={["4xl", "4xl", "5xl", "5xl"]}
              textAlign={"center"}
            >
              Meet The Founder
            </Text>
            <Text color={"gray.700"} fontSize={"lg"} className="ofont">
              Obong (Engr) Anthony M. Udoekong, Iboto Ibiono Ibom is the founder
              and the life patron of James Udoekong Education Trust Fund, an NGO
              he established in year 2000 for the sole purpose of providing
              scholarship awards to the youths of Aka Ikot Udo Eno community.
            </Text>
            <Text color={"gray.700"} fontSize={"lg"} className="ofont">
              Born in Aka Ikot Udo Eno in Ibiono Ibom Local Government Area of
              Akwa Ibom State. He is an accomplished engineer who has carved a
              niche for himself in his professional career. But, that is only
              one side of his many proficiencies. He is also a prolific writer
              with efficient communication skills.
            </Text>
            <Center>
              <Link passHref href={"/founder"}>
                <Button
                  display={"block"}
                  fontWeight={"bold"}
                  className="mfont"
                  textTransform={"uppercase"}
                  aria-controls="example-panel"
                  m="auto"
                  outline="none"
                  variant="flushed"
                  _focus={{
                    boxShadow: "none",
                  }}
                  _hover={{
                    color: "white",
                  }}
                  textAlign={"center"}
                  color="#ee5c27"
                >
                  <a>
                    <Text>View Profile</Text>
                  </a>
                </Button>
              </Link>
            </Center>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
