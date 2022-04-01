/* eslint-disable react/no-unescaped-entities */

import React from "react";
import {
  Button,
  Input,
  FormControl,
  FormLabel,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";

export default function EditBeneficiaryForm({ onClose, data, reload }) {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState(data.name);
  const [course, setCourse] = useState(data.course);
  const [school, setSchool] = useState(data.institution);

  const toast = useToast();

  const submitBeneficiary = () => {
    setLoading(true);
    axios
      .post(
        "/static/edit.php",
        { name, course, institution: school, id: data.id },
        {
          headers: {
            "content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((response) => {
        setLoading(false);
        reload();
        toast({
          position: "bottom-left",
          isClosable: true,
          status: "success",
          title: "Beneficiary edited successfully!",
        });
        onClose();
      })
      .catch((e) => {
        setLoading(false);
        toast({
          position: "bottom-left",
          isClosable: true,
          status: "error",
          title: "An error has occurred!",
          description:
            "This is probably a problem with the network, please try again.",
        });
      });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submitBeneficiary();
      }}
    >
      <FormControl required isInvalid={name == ""} className="pfont">
        <FormLabel fontSize={"18px"} fontWeight={"light"} htmlFor="name">
          Name
        </FormLabel>
        <Input
          autoFocus="true"
          id="Name"
          type="text"
          value={name}
          size="lg"
          rounded={"3xl"}
          _focus={{
            borderColor: "#ee5c27",
          }}
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl required isInvalid={school == ""} className="pfont" my="7">
        <FormLabel fontSize={"18px"} fontWeight={"light"} htmlFor="school">
          School
        </FormLabel>
        <Input
          type="text"
          value={school}
          size="lg"
          rounded={"3xl"}
          _focus={{
            borderColor: "#ee5c27",
          }}
          px="5"
          onChange={(e) => setSchool(e.target.value)}
        />
      </FormControl>
      <FormControl required isInvalid={course == ""} className="pfont">
        <FormLabel fontSize={"18px"} fontWeight={"light"} htmlFor="course">
          Course of Study
        </FormLabel>
        <Input
          type="text"
          value={course}
          size="lg"
          rounded={"3xl"}
          _focus={{
            borderColor: "#ee5c27",
          }}
          px="5"
          onChange={(e) => setCourse(e.target.value)}
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
        isDisabled={name == ""}
      >
        Submit
      </Button>
    </form>
  );
}
