import { Box } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <Box maxW={768} mx="auto">
      {children}
    </Box>
  );
}
