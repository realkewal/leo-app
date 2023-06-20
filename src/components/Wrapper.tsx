"use client";

import { Box } from "@chakra-ui/react";
import Footer from "./Footer";
import Header from "./Header";

export default function Wrapper() {
  return (
    <Box
      w="100%"
      h="100vh"
      bgGradient="linear-gradient(to top, #0250c5 0%, #d43f8d 100%)"
    >
      <Header />
      <Footer />
    </Box>
  );
}
