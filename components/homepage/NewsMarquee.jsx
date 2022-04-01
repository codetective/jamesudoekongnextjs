import { Box, Button, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import WrapContent from "../general/WrapContent";
import { FaCaretRight } from "react-icons/fa";
import Link from "next/link";

function NewsMarquee() {
  let [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [news, setNews] = useState(null);

  const fetchPosts = () => {
    setError(false);
    setLoading(true);
    axios
      .get("/static/recentnews.php")
      .then((response) => {
        setNews((prev) => response.data.news);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
      });
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <>
      {!loading && !error && news && news.length !== 0 && (
        <Box bg="gray.100">
          <WrapContent>
            <HStack>
              <Box
                w="full"
                as="marquee"
                py="1"
                fontSize="20px"
                className="pfont"
              >
                {news.map((item, index) => (
                  <Box key={index}>{item.title}</Box>
                ))}
              </Box>
              <HStack
                as={Button}
                spacing="0"
                textAlign={"left"}
                fontWeight={"light"}
                size="small"
                _focus={{
                  boxShadow: "none",
                }}
              >
                <Link href="/news" passHref>
                  <Stack className="mfont">
                    <Text as="small" lineHeight={0.3}>
                      Read
                    </Text>
                    <Text as="small" lineHeight={0.3}>
                      more..
                    </Text>
                  </Stack>
                </Link>
                <Icon
                  p="0"
                  as={FaCaretRight}
                  fontSize={"30px"}
                  color="#ee5c27"
                />
              </HStack>
            </HStack>
          </WrapContent>
        </Box>
      )}
    </>
  );
}

export default NewsMarquee;
