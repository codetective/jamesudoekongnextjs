/* eslint-disable react/no-unescaped-entities */

import {
  Box,
  Button,
  FormControl,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useCtx } from "../context/AppContext";

export default function UnAuthorised() {
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [password, setPassword] = useState("");

  const { isAuth, StoreAuth } = useCtx();

  const handleForm = (e) => {
    e.preventDefault();
    setLoading(true);

    axios
      .post(
        "/static/admin.php",
        { password: password },
        {
          headers: {
            "content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((response) => {
        setLoading(false);
        StoreAuth();
      })
      .catch((e) => {
        setLoading(false);
        toast({
          position: "bottom-left",
          isClosable: true,
          status: "error",
          title: "An error has occurred!",
          description: e.response
            ? e.response.data.error
            : "This is probably a problem with the network, please try again.",
        });
        setError(true);
      });
  };
  return (
    <Stack as={Box} textAlign={"center"} py={{ base: 20, md: 36 }}>
      <Text
        as="h1"
        fontWeight={600}
        className="mfont"
        fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
      >
        You're not logged in! <br />
      </Text>
      <Text as={"span"} fontSize={"20px"} color={"red.400"}>
        Enter secret key to proceed.
      </Text>
      <form onSubmit={handleForm}>
        <FormControl id="password" isRequired>
          <Input
            type="password"
            size="lg"
            placeholder="**********"
            rounded={"3xl"}
            borderColor="#ee5c27"
            _focus={{
              borderColor: "#ee5c27",
            }}
            _hover={{
              borderColor: "#ee5c27",
            }}
            px="5"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <Button
          mt="5"
          px="40px"
          bg={"orange.100"}
          _hover={{
            bg: "#ee5c27",
            color: "white",
          }}
          type="submit"
          rounded="10px"
          className="pfont"
          size="lg"
          fontSize="20px"
          isLoading={loading}
          isDisabled={password.length < 4}
        >
          Submit
        </Button>
      </form>
    </Stack>
  );
}
