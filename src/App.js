import { Center, Divider, Flex, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import UsearIcon from "./components/UserIcon";

export default function App() {
  return (
    <Flex direction="column" justifyContent="center">
      <Heading
        textAlign="center"
        fontSize="xl"
        mt="10rem"
        mb="5rem"
        color="blue"
      >
        서비스 이용 목적을 선택해주세요
      </Heading>
      <Flex justifyContent="space-evenly" alignItems="center">
        <Link to="/user">
          <UsearIcon imgUrl="/images/driver.png" text="운전자" />
        </Link>
        <Center height="50px">
          <Divider
            orientation="vertical"
            borderColor="rgba(0,0,0,0.3)"
            h="10rem"
          />
        </Center>
        <Link to="/expert/videos">
          <UsearIcon imgUrl="/images/expert.png" text="전문가" />
        </Link>
      </Flex>
    </Flex>
  );
}
