import {
  Input,
  useToast,
  Image,
  Textarea,
  FormControl,
  FormLabel,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";

export default function AddGalleryform({ onClose }) {
  const toast = useToast();
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const upload = async (img = image) => {
    let formdata = new FormData();
    formdata.append("image", img);
    formdata.append("caption", caption);

    setUploading(true);
    axios
      .post("/static/gallery.php", formdata, {
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
          title: "Image added successfully!",
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
        upload();
      }}
    >
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

      <FormControl required className="pfont" my="7">
        <FormLabel fontSize={"18px"} fontWeight={"light"} htmlFor="school">
          Write caption
        </FormLabel>

        <Textarea
          rows="3"
          placeholder="write caption"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />
      </FormControl>
      {image && (
        <Image
          h="200px"
          alt={caption}
          src={URL.createObjectURL(image)}
          width="100%"
          objectFit={"cover"}
        />
      )}
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
        isDisabled={caption == "" || image == null}
      >
        Submit
      </Button>
    </form>
  );
}
