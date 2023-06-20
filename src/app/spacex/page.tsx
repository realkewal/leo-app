"use client";

import {
  Box,
  Container,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

import Header from "@/components/Header";
import UserDetails from "@/components/UserDetails";
import { query } from "./query";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

export default function SpaceX() {
  const { data } = useSuspenseQuery(query);

  return (
    <>
      <Header />
      <Box
        p="6"
        h="100%"
        bgGradient="linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)"
      >
        <Container>
          <UserDetails />
          <Heading>{data.company.name}</Heading>
          <Text my="4">
            Founded by {data.company.founder} in {data.company.founded}.
          </Text>
          <Text>{data.company.summary}</Text>

          <Heading as="h5" my="10">
            Historical facts
          </Heading>
          <UnorderedList>
            {data.histories.map((history, idx) => (
              <ListItem key={idx}>{history.details}</ListItem>
            ))}
          </UnorderedList>
        </Container>
      </Box>
    </>
  );
}
