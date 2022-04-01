import React from "react";
import {
  chakra,
  Box,
  Image,
  useColorModeValue,
  Text,
  Button,
  Flex,
} from "@chakra-ui/react";
import { convertContentFromJSONToHTML } from "../helpers";

const NewsCard = ({ news, admin, onOpen, deleteNews }) => {
  const data = convertContentFromJSONToHTML(news.body);

  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <Box
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      py={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        mx="auto"
        rounded="lg"
        shadow="md"
        bg={useColorModeValue("white", "gray.800")}
        maxW="2xl"
        pos="relative"
      >
        {news.image != null && (
          <Image
            roundedTop="lg"
            w="full"
            h={64}
            fit="cover"
            src={news.image}
            alt={news.title}
          />
        )}

        <Box p={6}>
          <Box>
            <chakra.span
              fontSize="xs"
              textTransform="uppercase"
              color={useColorModeValue("brand.600", "brand.400")}
            >
              {new Date(news.createdAt).toLocaleDateString("en-US", options)}
            </chakra.span>
            <Text
              display="block"
              color={useColorModeValue("gray.800", "white")}
              fontWeight="bold"
              fontSize="2xl"
              textTransform={"capitalize"}
              mt={2}
              _hover={{ color: "gray.600" }}
              className="mfont"
            >
              {news.title}
            </Text>
            <chakra.p
              dangerouslySetInnerHTML={{ __html: data }}
              mt={2}
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}
            />
          </Box>
        </Box>

        {admin && (
          <Flex justify={{ md: "end" }} px="4" py="2" bg="white">
            <Button
              variant="outline"
              color={"red"}
              colorScheme={"red"}
              size="sm"
              onClick={() => deleteNews(news.id)}
            >
              Delete
            </Button>
            <Button
              variant="outline"
              color={"blue.500"}
              colorScheme={"blue.500"}
              size="sm"
              ml="2"
              onClick={() => onOpen("N", news)}
            >
              Edit
            </Button>
          </Flex>
        )}
      </Box>
    </Box>
  );
};

export default NewsCard;
