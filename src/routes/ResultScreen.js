import React from "react";
import {
  Text,
  Flex,
  Heading,
  Stack,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Modal,
} from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";
import { useRecoilValue } from "recoil";
import Chart from "react-apexcharts";

import CommentCards from "../components/CommentCards";
import ArrowBack from "../components/ArrowBack";
import { resultVideoState } from "../atom";
import useSetChart from "../hooks/useSetChart";

export default function ResultScreen() {
  const resultVideo = useRecoilValue(resultVideoState);

  const { series, options } = useSetChart();

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex display="column" px="2rem">
      <ArrowBack url="/user/resultList" />

      <Heading size="md" mt="2rem" mb="1rem" lineHeight="2rem">
        분석결과
      </Heading>

      {/* 최다 과실비율 */}
      <Flex
        direction="column"
        alignItems="center"
        borderWidth="1px"
        borderRadius={8}
        mb="2rem"
      >
        <Text>최다 과실비율</Text>
        <Text fontWeight="bold" fontSize="4xl" color="red">
          {resultVideo.ratio}
        </Text>
      </Flex>

      {/* 모든 보험사 의견 */}
      <Flex
        w="100%"
        justifyContent="space-between"
        alignItems="center"
        mt="2rem"
      >
        <Heading size="md" mb="1rem">
          보험사 분석
        </Heading>

        <Flex alignItems="center" onClick={onOpen}>
          <Text fontWeight="bold" fontSize="lg" mr=".5rem">
            통계 보기
          </Text>
          <IoIosArrowForward />
        </Flex>
      </Flex>

      {/* 통계 */}
      <Modal blockScrollOnMount isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w="90%" maxW="30rem" bgColor="white" pb="1rem">
          <ModalHeader size="sm">비율 통계</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Chart options={options} series={series} type="donut" />
          </ModalBody>
        </ModalContent>
      </Modal>

      <Stack spacing="1rem">
        <CommentCards />
      </Stack>
    </Flex>
  );
}
