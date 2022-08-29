import { Spinner, Center } from "@chakra-ui/react";

export default function LoadingAnimation() {
  return (
    <Center
      h="100vh"
      w="100vw"
      zIndex={100}
      top={0}
      left={0}
      position="fixed"
      bgColor="rgba(0,0,0,0.5)"
    >
      <Spinner color="white" size="lg" />
    </Center>
  );
}
