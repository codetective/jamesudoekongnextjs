import { Flex, useBreakpointValue } from "@chakra-ui/react";
import WrapContent from "../general/WrapContent";
import NavMD from "./NavMD";
import NavSM from "./NavSM";

export default function Navbar() {
  const navScreens = useBreakpointValue({ base: <NavSM />, md: <NavMD /> });

  return (
    <Flex
      height="75px"
      boxShadow="md"
      alignItems="center"
      justifyContent="center"
      position="sticky"
      top="0"
      zIndex="10"
      backgroundColor="white"
      className="navbar"
      m="auto"
    >
      <WrapContent>
        <Flex alignItems="center" w={"full"}>
          <Flex width="full" alignItems="center" justifyContent="space-between">
            {navScreens}
          </Flex>
        </Flex>
      </WrapContent>
    </Flex>
  );
}
