import { Box, Button, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import NavigationModal from "@/components/NavModal";
import { useSession } from "next-auth/react";

export default function UserDetails() {
  const { data: session } = useSession();

  const [username, setUsrName] = useState("");
  const [jobtitle, setJobtitle] = useState("");

  useEffect(() => {
    const findUser = async (id: string) => {
      const response = await fetch(`/api/get-user/${id}`);
      const data = await response.json();
      setUsrName(data.user.username);
      setJobtitle(data.user.jobtitle);
    };

    if (session) {
      const { id } = session?.user!;
      findUser(id);
    }
  }, [session]);

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Box bg="whiteAlpha.600" my={"10"} p="4" rounded="md">
      <Text fontWeight="bold"> Welcome {session?.user!.name}! </Text>
      <UnorderedList>
        <ListItem>Username: {username}</ListItem>
        <ListItem>Job title: {jobtitle}</ListItem>
      </UnorderedList>
      <Button mt="4" onClick={openModal}>
        Update details
      </Button>
      <NavigationModal isOpen={isOpen} onClose={closeModal} />
    </Box>
  );
}
