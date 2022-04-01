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
import EditNewsForm from "./EditNewsForm";
import EditBeneficiaryForm from "./EditBeneficiaryForm";

export default function DrawerForEdits({
  isOpen,
  onClose,
  type,
  data,
  reload,
}) {
  return (
    <>
      <Drawer size="md" isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader className="mfont" fontSize={"25px"}>
            {type == "N" ? "Edit news article" : "Edit beneficiary"}
          </DrawerHeader>

          <DrawerBody>
            {type == "N" ? (
              <EditNewsForm onClose={onClose} data={data} reload={reload} />
            ) : (
              <EditBeneficiaryForm
                onClose={onClose}
                data={data}
                reload={reload}
              />
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
