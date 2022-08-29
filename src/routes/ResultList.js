import React from "react";
import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import Result from "../components/Result";
import ArrowBack from "../components/ArrowBack";
import LoadingAnimation from "../components/LoadingAnimation";
import useGetResults from "../hooks/useGetResults";
import { myVideos } from "../db";

export default function ResultList() {
  const { results, isLoading } = useGetResults();

  return (
    <Flex direction="column" mx="2rem">
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <>
          <ArrowBack url="/user" />

          <Heading fontSize="xl" lineHeight="2rem" my="1rem">
            <Text fontSize="lg">김공차님</Text>
            <Text display="flex">
              총 &nbsp;
              <Text color="blue">{myVideos.length + results.length}</Text>건의
              분석 결과 입니다.
            </Text>
          </Heading>

          <Stack spacing="1rem">
            {myVideos.map((item) => (
              <Link to={item.id} key={item.id}>
                <Result item={item} />
              </Link>
            ))}
            {results.map((item) => (
              <Result key={item.id} item={item} />
            ))}
          </Stack>
        </>
      )}
    </Flex>
  );
}
