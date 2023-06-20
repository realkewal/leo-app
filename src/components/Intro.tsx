import {
  Box,
  Button,
  Center,
  Heading,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";

import { ArrowForwardIcon } from "@chakra-ui/icons";
import { signIn } from "next-auth/react";

export default function Intro() {
  return (
    <Box maxW={"xl"} mx={"auto"} mt="10%">
      <Center bg="whiteAlpha.500" rounded={"md"} p="10">
        <VStack spacing={4} align="center">
          <Heading color="gray.800" display="block">
            Welcome to Leo X
          </Heading>
          <Text display="block">
            Your ultimate source for mind-blowing facts about SpaceX. Venture
            into the extraordinary world of Elon Musk&apos;s groundbreaking
            company that is reshaping space exploration and redefining human
            possibilities. From reusable rockets to awe-inspiring partnerships
            with NASA and beyond, Leo X unveils the captivating achievements
            that have propelled SpaceX to the forefront of aerospace innovation.
            Join us on this cosmic journey and prepare to be amazed by the
            wonders of SpaceX.
          </Text>
          <Link href="/spacex">
            <Button colorScheme="purple" p="6" color="white">
              Launch into the Future <ArrowForwardIcon ml="2" />
            </Button>
          </Link>
        </VStack>
      </Center>
    </Box>
  );
}
