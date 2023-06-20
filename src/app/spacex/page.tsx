"use client";

import { Box, Container, Heading } from "@chakra-ui/react";
import { signOut, useSession } from "next-auth/react";

import Header from "@/components/Header";
import { query } from "./query";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

export default function SpaceX() {
  const { data: session } = useSession();

  const { data } = useSuspenseQuery(query);

  console.log(data);

  return (
    <>
      <Header />
      <Box
        p="6"
        h="100vh"
        bgGradient="linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)"
      >
        <Container>
          <Heading>{data.company.name}</Heading>
        </Container>
      </Box>
    </>
  );
}
