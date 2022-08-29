import React from "react";
import { Image, Text, Flex, Box, Stack } from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";

import { useRecoilValue } from "recoil";
import { resultVideoCommentsState } from "../atom";

export default function CommentCards() {
  const comments = useRecoilValue(resultVideoCommentsState);

  return Object.keys(comments).map((company) => (
    <Flex
      key={company}
      boxShadow="base"
      borderWidth="1px"
      borderRadius={8}
      p="1rem"
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex alignItems="center">
        <Image
          mr="1rem"
          w="4rem"
          h="auto"
          src={`/images/${company}.png`}
          alt="infopany"
        />

        <Stack fontSize="sm">
          <Text color="blue" fontWeight="bold" fontSize="lg">
            {comments[company].ratio}
          </Text>
          <Text noOfLines={2}>{comments[company].comment}</Text>
        </Stack>
      </Flex>
      <Box>
        <IoIosArrowForward />
      </Box>
    </Flex>
  ));
}
