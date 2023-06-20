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
  const [newJob, setnewJob] = useState("");
  const [id, setId] = useState("");
  const [msg, setMsg] = useState("");

  const { data: session } = useSession();

  useEffect(() => {
    const id = session?.user!.id;
    setId(id);
  }, [session]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setnewJob(event.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/update-user", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, newData: { jobtitle: newJob } }),
      });
      const data = await response.json();
      setMsg("Success! Redirecting...");

      router.push("/spacex");

      // Clear the input field
      setnewJob("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container maxW="md" mt="10">
      <Heading as="h1" mb="6">
        Update Job Title
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="username" mb="4">
          <FormLabel>Job Title</FormLabel>
          <Input
            type="text"
            value={newJob}
            onChange={handleInputChange}
            placeholder="Enter your job title"
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
