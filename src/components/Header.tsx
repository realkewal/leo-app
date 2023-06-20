"use client";

import { Box, Container, Flex, Spacer } from "@chakra-ui/react";
import { LoginButton, RegisterButton } from "@/components/buttons.component";
import { signOut, useSession } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();
  return (
    <Box backgroundColor="gray.800">
      <Container maxW="container.lg">
        <Flex>
          <Box color={"purple.300"} fontWeight={"bold"} fontSize={"4xl"} p="4">
            Leo X
          </Box>
          <Spacer />
          <Box pt="6" color="white">
            {session ? (
              <p>
                Welcome {session.user!.name}!{" "}
                <span
                  style={{ textDecoration: "underline", cursor: "pointer" }}
                  onClick={() => signOut()}
                >
                  Sign out
                </span>
              </p>
            ) : (
              <>
                <RegisterButton />
                <LoginButton />
              </>
            )}
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
