"use client";

import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function UpdateUsernameForm(): JSX.Element {
  const router = useRouter();
  const [newUsername, setNewUsername] = useState("");
  const [id, setId] = useState("");
  const [msg, setMsg] = useState("");

  const { data: session } = useSession();

  useEffect(() => {
    const id = session?.user!.id;
    setId(id);
  }, [session]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewUsername(event.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/update-user", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, newData: { username: newUsername } }),
      });
      const data = await response.json();
      setMsg("Success! Redirecting...");

      router.push("/spacex");

      // Clear the input field
      setNewUsername("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container maxW="md" mt="10">
      <Heading as="h1" mb="6">
        Update Username
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="username" mb="4">
          <FormLabel>New Username</FormLabel>
          <Input
            type="text"
            value={newUsername}
            onChange={handleInputChange}
            placeholder="Enter your new username"
          />
        </FormControl>

        <Button type="submit" colorScheme="blue">
          Update
        </Button>
        <Text my="4">{msg}</Text>
      </form>
    </Container>
  );
}
