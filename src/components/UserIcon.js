import { Image, Stack, Text } from "@chakra-ui/react";

export default function UsearIcon({ imgUrl, text }) {
  return (
    <Stack spacing="1rem" textAlign="center">
      <Image src={imgUrl} boxSize="5rem" />
      <Text fontWeight="bold" fontSize="xl">
        {text}
      </Text>
    </Stack>
  );
}
