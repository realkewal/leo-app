"use client";

import {
  Alert,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";

import Header from "@/components/Header";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface RegistrationFormData {
  name: string;
  email: string;
  password: string;
  jobtitle: string;
  username: string;
}

const RegistrationForm = () => {
  const router = useRouter();
  const [msg, setMsg] = useState("");
  const [formData, setFormData] = useState<RegistrationFormData>({
    name: "",
    email: "",
    password: "",
    jobtitle: "",
    username: "",
  });

  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // Clear any previous errors

    console.log(formData);

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log(response);
      if (!response.ok) {
        throw new Error("Registration failed");
      }
      setMsg("Success! Redirecting to login...");
      router.push("/");
      // Registration successful, perform any necessary actions
    } catch (error) {
      setError("Registration failed. Please try again."); // Display error message
    }
  };

  return (
    <>
      <Header />
      <Box maxWidth="400px" margin="auto" mt="10">
        <form onSubmit={handleSubmit}>
          <FormControl id="name" marginBottom="4">
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormControl>

          <FormControl id="email" marginBottom="4">
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormControl>

          <FormControl id="password" marginBottom="4">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </FormControl>

          <FormControl id="jobTitle" marginBottom="4">
            <FormLabel>Job Title</FormLabel>
            <Input
              type="text"
              name="jobtitle"
              value={formData.jobtitle}
              onChange={handleChange}
              required
            />
          </FormControl>

          <FormControl id="username" marginBottom="4">
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </FormControl>

          {error && <Alert status="error">{error}</Alert>}

          <Text my="4">{msg}</Text>

          <Button type="submit" colorScheme="teal" marginTop="4">
            Sign up
          </Button>
        </form>
      </Box>
    </>
  );
};

export default RegistrationForm;
