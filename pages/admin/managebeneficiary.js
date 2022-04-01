/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Text,
  Flex,
  Stack,
  Spinner,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import AuthRoute from "../../components/auth/AuthRoute";
import WrapContent from "../../components/general/WrapContent";
import { Center, useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useCallback } from "react";
import { useRef } from "react";
import Tableview from "../../components/beneficiaries/Tableview";
import { useCtx } from "../../components/context/AppContext";
import DrawerForEdits from "../../components/admin/DrawerForEdits";
import { set } from "draft-js/lib/EditorState";

const ManageBeneficiary = () => {
  const { isAuth } = useCtx();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalType, setModalType] = useState("");
  //
  let [beneficiaries, setBeneficiaries] = useState([]);
  let [loading, setLoading] = useState(false);
  let [page, setPage] = useState(1);
  let [totalPages, setTotalPages] = useState(0);
  let [hasmore, setHasmore] = useState(true);
  let [pageno, setPageno] = useState(1);
  const [error, setError] = useState(false);
  //
  const [formData, setFormData] = useState(null);

  const toast = useToast();

  const handleClick = (type, data) => {
    setModalType(type);
    setFormData(data);
    onOpen();
  };

  const deletePerson = useCallback(
    async (id) => {
      setLoading(true);
      try {
        const response = await axios.post("/static/delete.php", {
          id: id,
        });
        if (response.data.deleted) {
          setLoading(false);

          toast({
            position: "bottom-left",
            isClosable: true,
            status: "success",
            title: "Beneficiary Deleted",
            description: "Beneficiary has been deleted successfully.",
          });
          setBeneficiaries((prev) => prev.filter((person) => person.id != id));
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
  const refresh = () => {
    setHasmore(true);
    setPageno(1);
    setBeneficiaries([]);
    fetchBeneficiaries(1, true);
  };

  let fetchBeneficiaries = (pg = 1, t = false) => {
    setLoading(true);

    setError(false);
    if (hasmore == false && t == false) return;
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
            // title: error.message,
            description:
              "This could a problem with the network, please try again.",
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
        description:
          "This is probably a problem with the network, please try again.",
      });
      setError(true);
    }
  };

  useEffect(() => {
    if (isAuth) {
      fetchBeneficiaries(pageno);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [loading]
  );
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
            Manage Beneficiary
          </Text>
          <Box fontStyle={"oblique"} className="mfont" textAlign="center">
            on this screen you can manage beneficiaries from the database
          </Box>
        </Box>
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
              onClick={() => {
                fetchBeneficiaries(1);
              }}
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
                    <Tableview
                      person={person}
                      pid={pid}
                      admin
                      deletePerson={deletePerson}
                      onOpen={handleClick}
                    />
                  </Box>
                );
              } else {
                return (
                  <Tableview
                    person={person}
                    pid={pid}
                    key={pid}
                    admin
                    deletePerson={deletePerson}
                    onOpen={handleClick}
                  />
                );
              }
            })}
          </Stack>
        </Flex>
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

export default ManageBeneficiary;
