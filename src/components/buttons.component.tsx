"use client";

import { Button, ButtonGroup } from "@chakra-ui/react";
import { signIn, signOut } from "next-auth/react";

import Link from "next/link";

export const LoginButton = () => {
  return (
    <Button colorScheme="purple" onClick={() => signIn()}>
      Sign in
    </Button>
  );
};

export const RegisterButton = () => {
  return (
    <Link href="/register" style={{ marginRight: 10 }}>
      Sign up
    </Link>
  );
};

export const LogoutButton = () => {
  return <p onClick={() => signOut()}>Sign out</p>;
};

export const ProfileButton = () => {
  return <Link href="/profile">Profile</Link>;
};
