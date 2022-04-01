/* eslint-disable react/display-name */
/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Text,
  Flex,
  Stack,
  Spinner,
  Button,
  StackDivider,
  useDisclosure,
} from "@chakra-ui/react";
import AuthRoute from "../../components/auth/AuthRoute";
import WrapContent from "../../components/general/WrapContent";
import { Center, useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { forwardRef, useEffect } from "react";
import { useState } from "react";
import { useCallback } from "react";
import NewsCard from "../../components/news/NewsCard";
import Pagination from "@choc-ui/paginator";
import { useCtx } from "../../components/context/AppContext";
import DrawerForEdits from "../../components/admin/DrawerForEdits";

const ManageNews = () => {
  const { isAuth } = useCtx();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalType, setModalType] = useState("");
  const [formData, setFormData] = useState(null);

  //
  let [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [news, setNews] = useState([]);
  const [currentPage, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const refresh = () => {
    setNews([]);
    fetchPosts();
  };
  const handleClick = (type, data) => {
    setModalType(type);
    setFormData(data);
    onOpen();
  };

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

  const deleteNews = useCallback(
    async (id) => {
      try {
        const response = await axios.post("/static/deletenews.php", {
          id: id,
        });
        if (response.data.success) {
          toast({
            position: "bottom-left",
            isClosable: true,
            status: "success",
            title: "News Deleted",
            description: "News has been deleted successfully.",
          });
          setNews((prev) => prev.filter((headline) => headline.id != id));
        } else {
          setLoading(false);
          toast({
            position: "bottom-left",
            isClosable: true,
            status: "error",
            title: response.data.error,
            description:
              "This is probably a problem with the network, please try again.",
          });
        }
      } catch (error) {
        setLoading(false);
        toast({
          position: "bottom-left",
          isClosable: true,
          status: "error",
          title: error.message,
          description:
            "This is probably a problem with the network, please try again.",
        });
      }
    },
    [toast]
  );

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
    if (isAuth) {
      fetchPosts();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <AuthRoute>
      <WrapContent>
        <Box py="40px">
          <Text
            as="h2"
            textTransform={"capitalize"}
            fontWeight={"light"}
            className="mfont"
            color="#ee5c27"
            fontSize={["4xl", "4xl", "5xl", "5xl"]}
            textAlign={"center"}
          >
            Manage News
          </Text>
          <Box fontStyle={"oblique"} className="mfont" textAlign="center">
            on this screen you can manage news from the database
          </Box>
        </Box>
        {!loading && news.length == 0 && (
          <Box>
            <Center py="50px" flexDir={"column"}>
              <Text
                as="h2"
                textTransform={"capitalize"}
                fontWeight={"light"}
                className="mfont"
                color="#ee5c27"
                fontSize={["4xl", "4xl", "5xl", "5xl"]}
                textAlign={"center"}
              >
                No data!
              </Text>
            </Center>
          </Box>
        )}
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
            <Stack spacing={4}>
              {/* {news.map((item, index) => (
                <Stack
                  flexDir={{ base: "column", md: "row" }}
                  key={index}
                  shadow={"sm"}
                  p="5px 10px"
                  justifyContent={"space-between"}
                >
                  <Text
                    display="block"
                    color={"gray.800"}
                    fontWeight="bold"
                    fontSize="xl"
                    textTransform={"capitalize"}
                    mt={2}
                    _hover={{ color: "gray.600" }}
                    className="mfont"
                  >
                    {item.title}
                  </Text>
                  <Button
                    variant="outline"
                    color={"red"}
                    colorScheme={"red"}
                    size="sm"
                    onClick={() => deleteNews(item.id)}
                  >
                    Delete
                  </Button>
                </Stack>
              ))} */}
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
                  <NewsCard
                    key={index}
                    news={item}
                    admin={true}
                    deleteNews={deleteNews}
                    onOpen={handleClick}
                  />
                ))}
              </Stack>
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
      <DrawerForEdits
        type={modalType}
        isOpen={isOpen}
        onClose={onClose}
        formData={formData}
        data={formData}
        reload={refresh}
      />
    </AuthRoute>
  );
};

export default ManageNews;
