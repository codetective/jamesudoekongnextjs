/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useCtx } from "../../components/context/AppContext";
import { Box, Container } from "@chakra-ui/react";
import UnAuthorised from "../../components/admin/UnAuthorised";
import { AnimatePresence, motion } from "framer-motion";
import Authorised from "../../components/admin/Authorized";

export default function Admin() {
  const { isAuth } = useCtx();

  return (
    <Box minH="50vh">
      <Container maxW={"3xl"}>
        <AnimatePresence>
          {!isAuth && (
            <motion.div
              key="noauth"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <UnAuthorised />
            </motion.div>
          )}

          {isAuth && (
            <motion.div
              key="auth"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Authorised />
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </Box>
  );
}
