/* eslint-disable react/no-unescaped-entities */
import { Center, Spinner, Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import Head from "next/head";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useCallback } from "react";
import { useRef } from "react";
import AboutHeader from "../components/aboutpage/AboutHeader";
import Tableview from "../components/beneficiaries/Tableview";
import { Flex, Button, Stack, SimpleGrid, Box } from "@chakra-ui/react";
import WrapContent from "../components/general/WrapContent";

export default function Beneficiaries() {
  let [beneficiaries, setBeneficiaries] = useState([]);
  let [loading, setLoading] = useState(false);
  let [page, setPage] = useState(1);
  let [totalPages, setTotalPages] = useState(0);
  let [hasmore, setHasmore] = useState(true);
  let [pageno, setPageno] = useState(1);
  const [error, setError] = useState(false);

  const toast = useToast();

  let fetchBeneficiaries = (pg) => {
    setLoading(true);
    if (!hasmore) return;
    try {
      axios
        .get("/static/fetchlist.php" + "?page=" + pg)
        .then((response) => {
          if (response.data.success) {
            setLoading(false);
            setTotalPages(response.data.total_pages);
            setBeneficiaries((prev) => [...prev, ...response.data.result]);
            if (response.data.current_page == response.data.total_pages) {
              setHasmore(false);
            }
          } else {
            toast({
              position: "bottom-left",
              isClosable: true,
              status: "error",
              title: response.data.error,
              description:
                "This is probably a problem with the network, please try again.",
            });
            setLoading(false);
            setError(true);
          }
        })
        .catch((error) => {
          toast({
            position: "bottom-left",
            isClosable: true,
            status: "error",
            title: error.message,
            description:
              "This is probably a problem with the network, please try again.",
          });
          setLoading(false);
          setError(true);
        });
    } catch (err) {
      setLoading(false);
      toast({
        position: "bottom-left",
        isClosable: true,
        status: "error",
        title: err.toString(),
        description:
          "This is probably a problem with the network, please try again.",
      });
      setError(true);
    }
  };

  useEffect(() => {
    fetchBeneficiaries(pageno);
  }, []);

  const observer = useRef();
  const lastItemref = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasmore) {
          setPageno((prev) => prev + 1);
          fetchBeneficiaries(pageno + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading]
  );
  return (
    <>
      <Head>
        <title>About James Udoekong Trust Fund</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AboutHeader title="Beneficiaries" />
      <WrapContent>
        <Text as="p" textAlign={"center"} py="5">
          Here's a list of some of our Beneficiaries from inception to the
          present:
        </Text>
        {!loading && error && (
          <Center flexDir={"column"}>
            <Text color="red.500" fontSize={"40px"} textAlign={"center"}>
              Error retrieving data.
            </Text>
          </Center>
        )}

        {!loading && error && (
          <Center flexDir={"column"}>
            <Button
              bg="#ee5c27"
              _hover={{
                color: "#ee5c27",
              }}
              size="md"
              color="white"
              className="mfont"
              onClick={fetchBeneficiaries}
            >
              Retry
            </Button>
          </Center>
        )}
        <Flex
          w="full"
          alignItems="center"
          justifyContent="center"
          minH={"20vh"}
        >
          <Stack direction={{ base: "column" }} w="full" bg="white" shadow="sm">
            {beneficiaries.map((person, pid) => {
              if (beneficiaries.length === pid + 1) {
                return (
                  <Box ref={lastItemref} key={pid}>
                    <Tableview person={person} pid={pid} />
                  </Box>
                );
              } else {
                return <Tableview person={person} pid={pid} key={pid} />;
              }
            })}
          </Stack>
        </Flex>
      </WrapContent>
      {loading && (
        <>
          <Center flexDir={"column"} py="2">
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="#ee5c27"
              size="md"
            />
          </Center>
        </>
      )}
      {!hasmore && (
        <Center flexDir={"column"} py="2">
          <Text color="green.500" fontSize={"20px"} textAlign={"center"}>
            You've reached the end of the list.
          </Text>
        </Center>
      )}
    </>
  );
}