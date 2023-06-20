// app/providers.tsx
"use client";

import { ApolloWrapper } from "./apollo-wrapper";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";

export function Providers({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <CacheProvider>
      <ChakraProvider>
        <ApolloWrapper>
          <SessionProvider>{children}</SessionProvider>
        </ApolloWrapper>
      </ChakraProvider>
    </CacheProvider>
  );
}
