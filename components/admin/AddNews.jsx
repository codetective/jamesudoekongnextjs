import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const EditorContainer = dynamic(() => import("./Editor"), { ssr: false });

export default function AddNews({ onClose }) {
  const [editorState, setEditorState] = useState(null);
  const [postBody, setPostBody] = useState(null);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);

  const toast = useToast();

  const submitNews = () => {
    let formdata = new FormData();
    formdata.append("image", image);
    formdata.append("title", title);
    formdata.append("body", JSON.stringify(postBody));
    if (postBody === null) return;
    setLoading(true);
    axios
      .post("/static/news.php", formdata, {
        headers: {
          "content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        setLoading(false);
        toast({
          position: "bottom-left",
          isClosable: true,
          status: "success",
          title: "News added successfully!",
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
    <Box>
      <Stack maxW="lg">
        <FormControl required className="pfont">
          <FormLabel fontSize={"18px"} fontWeight={"light"} htmlFor="school">
            Select image
          </FormLabel>
          <Input
            onChange={(e) => {
              if (e.target.files.length !== 0) {
                setImage(e.target.files[0]);
              }
            }}
            type="file"
            accept="image/*"
            name="logo"
            className="pfont"
          />
        </FormControl>
        <FormControl required isInvalid={title == ""} className="pfont">
          <FormLabel fontSize={"18px"} fontWeight={"light"} htmlFor="course">
            News Title
          </FormLabel>
          <Input
            type="text"
            value={title}
            size="lg"
            rounded={"3xl"}
            _focus={{
              borderColor: "#ee5c27",
            }}
            px="5"
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormControl>
        <Box
          className="editor"
          rounded="lg"
          shadow="lg"
          p="4"
          bg="white"
          h="fit-content"
        >
          <EditorContainer
            setPostBody={setPostBody}
            setEditorState={setEditorState}
            editorState={editorState}
          />
        </Box>

        <Button
          mt="5"
          px="40px"
          bg={"orange.200"}
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
          isDisabled={!title}
          onClick={submitNews}
        >
          Submit
        </Button>
      </Stack>
    </Box>
  );
}
