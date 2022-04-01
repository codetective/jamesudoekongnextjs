import React, { useCallback, useEffect } from "react";
import {
  Box,
  Text,
  Image,
  Container,
  Icon,
  Center,
  Spinner,
  useToast,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import Lightbox from "react-image-lightbox";
import { useState } from "react";
import { FcEmptyFilter } from "react-icons/fc";
import axios from "axios";

function ManageGallery() {
  const toast = useToast();
  const [isOpen, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [campaignImages, setCampaignImages] = useState([]);
  const fetchImgs = () => {
    setError(false);
    axios
      .get("/static/gallery.php")
      .then((response) => {
        setCampaignImages(response.data.images);
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
  const deleteImages = useCallback(
    async (id) => {
      try {
        const response = await axios.post("/static/deletegallery.php", {
          id: id,
        });
        if (response.data.success) {
          toast({
            position: "bottom-left",
            isClosable: true,
            status: "success",
            title: "Image Deleted",
            description: "Image has been deleted successfully.",
          });
          setCampaignImages((prev) => prev.filter((images) => images.id != id));
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

  useEffect(() => {
    fetchImgs();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Box margin="auto" overflow="hidden" py="80px" bgColor="gray.50">
        <Container maxW="container.xxl" px={8}>
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
              Delete Images
            </Text>
            <Box fontStyle={"oblique"} className="mfont" textAlign="center">
              on this screen you can delete images from the database
            </Box>
          </Box>

          {campaignImages.length == 0 && !loading && !error && (
            <Center flexDir={"column"}>
              <Icon
                textAlign={"center"}
                fontSize={"100px"}
                as={FcEmptyFilter}
              />

              <Text color="gray.500" fontSize={"40px"} textAlign={"center"}>
                No images to display
              </Text>
            </Center>
          )}
          {!loading && error && (
            <Center flexDir={"column"}>
              <Text color="red.500" fontSize={"40px"} textAlign={"center"}>
                Error retrieving images.
              </Text>
            </Center>
          )}
          {loading && (
            <Center flexDir={"column"}>
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="#ee5c27"
                size="xl"
              />
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
                onClick={fetchImgs}
              >
                Retry
              </Button>
            </Center>
          )}
          <Box className="row">
            <SimpleGrid columns={[1, 2, 3, 4]} spacing="8" className="column">
              {campaignImages.map((image, index) => {
                return (
                  <Box width="100%" cursor={"pointer"} key={index} shadow="sm">
                    <Box
                      className="item"
                      pos="relative"
                      onClick={() => {
                        setOpen(true);
                        setPhotoIndex(index);
                      }}
                    >
                      <Box className="img-bx">
                        <Image src={image.image} alt={image.caption} w="full" />
                      </Box>

                      <Box
                        pos="absolute"
                        bottom={0}
                        className="mfont"
                        textAlign="center"
                        fontWeight="bold"
                        bg={"rgba(0,0,0,0.7)"}
                        color="white"
                        fontSize="13px"
                        w="full"
                        minH="50px"
                        p="2"
                      >
                        {image.caption}
                      </Box>
                    </Box>
                    <Button
                      variant="outline"
                      color={"red"}
                      colorScheme={"red"}
                      size="md"
                      w="full"
                      mt="5"
                      onClick={() => deleteImages(image.id)}
                    >
                      Delete
                    </Button>
                  </Box>
                );
              })}
            </SimpleGrid>
          </Box>
        </Container>
      </Box>
      {isOpen && (
        <Lightbox
          mainSrc={campaignImages[photoIndex].image}
          nextSrc={
            campaignImages[(photoIndex + 1) % campaignImages.length].image
          }
          prevSrc={
            campaignImages[
              (photoIndex + campaignImages.length - 1) % campaignImages.length
            ].image
          }
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + campaignImages.length - 1) % campaignImages.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex(
              (photoIndex + campaignImages.length + 1) % campaignImages.length
            )
          }
          imageCaption={
            <Box
              as="h5"
              w="90vw"
              fontSize="20px"
              py={4}
              textAlign="center"
              m="auto"
              className="ofont"
            >
              {campaignImages[photoIndex].caption}
            </Box>
          }
        />
      )}
    </>
  );
}

export default ManageGallery;
