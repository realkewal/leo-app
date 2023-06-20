import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

import { useRouter } from "next/navigation";

interface NavigationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NavigationModal({
  isOpen,
  onClose,
}: NavigationModalProps): JSX.Element {
  const router = useRouter();

  const handleSetJobClick = (): void => {
    router.push("/spacex/setjob");
    onClose();
  };

  const handleSetUserClick = (): void => {
    router.push("/spacex/setuser");
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered={true}>
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(10px) hue-rotate(90deg)"
      />
      <ModalContent>
        <ModalHeader>Welcome!</ModalHeader>
        <ModalBody>
          <p>
            Welcome to Leo X, esteemed explorer of the cosmos! You have now
            embarked on a remarkable journey through the captivating world of
            SpaceX. Prepare to unlock a universe of knowledge, inspiration, and
            wonder.
          </p>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSetJobClick}>
            Set Job
          </Button>
          <Button colorScheme="purple" onClick={handleSetUserClick}>
            Set User
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
