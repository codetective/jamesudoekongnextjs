/* eslint-disable react/display-name */
import {
  Box,
  Flex,
  Stack,
  Text,
  useToast,
  StackDivider,
  Button,
  Spinner,
  Center,
} from "@chakra-ui/react";
import Pagination from "@choc-ui/paginator";
import axios from "axios";
import Head from "next/head";
import React, { forwardRef, useEffect, useState } from "react";
import WrapContent from "../components/general/WrapContent";
import NewsCard from "../components/news/NewsCard";

function News() {
  const toast = useToast();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [news, setNews] = useState([]);
  const [currentPage, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const fetchPosts = (pg = 1) => {
    setError(false);
    setLoading(true);
    axios
      .get("/static/news.php?page=" + pg)
      .then((response) => {
        setPage(response.data.current_page);
        setPageSize(response.data.per_page);
        setTotalPages(response.data.total_pages);
        setTotalItems(response.data.total_items);
        setNews((prev) => response.data.news);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        toast({
          position: "bottom-left",
          isClosable: true,
          status: "error",
          title: "An error has occurred!",
          description:
            "This is probably a problem with the network, please try again.",
        });
        setError(true);
      });
  };

  const Prev = forwardRef((props, ref) => (
    <Button ref={ref} {...props}>
      Prev
    </Button>
  ));
  const Next = forwardRef((props, ref) => (
    <Button ref={ref} {...props}>
      Next
    </Button>
  ));

  const itemRender = (_, type) => {
    if (type === "prev") {
      return Prev;
    }
    if (type === "next") {
      return Next;
    }
  };
  useEffect(() => {
    fetchPosts();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {" "}
      <Head>
        <title>Recent news at James Udoekong Trust Fund</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        h="300px"
        bgImage={'url("/img/p1.jpg")'}
        bgColor={"blackAlpha.800"}
        bgBlendMode={"overlay"}
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
        bgPos="center"
      >
        <WrapContent>
          <Stack h="300px" as={Flex} justifyContent={"center"}>
            <Text
              textTransform={"capitalize"}
              fontWeight={"bolder"}
              className="mfont"
              fontSize={["4xl", "4xl", "5xl", "5xl"]}
              pos={"relative"}
              color={"gray.200"}
              _before={{
                content: "''",
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "64px",
                height: "4px",
                borderRadius: "2px",
                background: "#ee5c27",
              }}
              as="h1"
              py="5"
            >
              Recent News
            </Text>
          </Stack>
        </WrapContent>
      </Box>
      <WrapContent>
        {!loading && error && (
          <Center flexDir={"column"}>
            <Text color="red.500" fontSize={"40px"} textAlign={"center"}>
              Error retrieving data.
            </Text>
            <Button
              bg="#ee5c27"
              _hover={{
                color: "#ee5c27",
              }}
              size="md"
              color="white"
              className="mfont"
              onClick={fetchPosts}
            >
              Retry
            </Button>
          </Center>
        )}
        <Box pb="80px">
          {loading ? (
            <Box>
              <Center py="50px" flexDir={"column"}>
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="#ee5c27"
                  size="xl"
                />
              </Center>
            </Box>
          ) : (
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  width={"50%"}
                  display={"block"}
                  marginInlineEnd="auto !important"
                  marginInlineStart="auto !important"
                />
              }
            >
              {news.map((item, index) => (
                <NewsCard key={index} news={item} />
              ))}
            </Stack>
          )}
          <Pagination
            current={Number(currentPage)}
            onChange={(page) => {
              fetchPosts(page);

              window && window.scrollTo(0, 0);
            }}
            pageSize={pageSize}
            total={totalPages}
            itemRender={itemRender}
            paginationProps={{
              display: "flex",
              pos: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
            responsive
            colorScheme="red"
            focusRing="green"
          />
        </Box>
      </WrapContent>
    </>
  );
}

export default News;
