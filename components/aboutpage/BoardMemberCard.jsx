import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";

export default function BoardMemberCard({ m }) {
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"350px"}
        h="100%"
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${m.img})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={250}
            width={"100%"}
            objectFit={"contain"}
            src={m.img}
            alt="name"
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            {m.role}
          </Text>
          <Text textAlign={"center"} fontWeight={500}>
            {m.name}
          </Text>
          <Stack direction={"column"} align={"center"}>
            <Text color={"gray.500"} fontSize={"sm"}>
              {m.email && <a href={"mailto:" + m.email}>{m.email}</a>}
            </Text>
            <Text color={"gray.500"} fontSize={"sm"}>
              {m.phone && <a href={"tel:" + m.phone}>{m.phone}</a>}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
