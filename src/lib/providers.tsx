// app/providers.tsx
"use client";

import { ApolloProvider } from "@apollo/client";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";
import { createApolloClient } from "./apolloClient";

export function Providers({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const apolloClient = createApolloClient();

  return (
    <CacheProvider>
      <ChakraProvider>
        <ApolloProvider client={apolloClient}>
          <SessionProvider>{children}</SessionProvider>
        </ApolloProvider>
      </ChakraProvider>
    </CacheProvider>
  );
}
