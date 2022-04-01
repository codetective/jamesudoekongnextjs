import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
} from "@chakra-ui/react";
import AddBeneficiaryForm from "./AddBeneficiaryForm";
import AddGalleryform from "./AddGalleryform";
import AddNews from "./AddNews";

export default function DrawerForAdmin({ isOpen, onClose, type }) {
  return (
    <>
      <Drawer size="md" isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader className="mfont" fontSize={"25px"}>
            {type == "N"
              ? "Add news article"
              : type == "B"
              ? "Add new beneficiary"
              : "Add image to gallery"}
          </DrawerHeader>

          <DrawerBody>
            {type == "N" ? (
              <AddNews onClose={onClose} />
            ) : type == "B" ? (
              <AddBeneficiaryForm onClose={onClose} />
            ) : (
              <AddGalleryform onClose={onClose} />
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
