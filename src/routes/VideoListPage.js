import { Flex, Heading, Text } from "@chakra-ui/react";

import VideoList from "../components/VideoList";
import useFetchVideos from "../hooks/useFetchVideos";
import LoadingAnimation from "../components/LoadingAnimation";

export default function VideoListPage() {
  const { videos, isLoading } = useFetchVideos();

  return (
    <Flex py="2rem" direction="column" alignItems="center">
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <>
          <Heading size="md" mb="2rem" lineHeight="2rem">
            <Text display="flex" justifyContent="center">
              <Text color="blue">{videos.length}</Text> 건의 영상이
            </Text>
            전문가님께 도착했어요!
          </Heading>
          <VideoList videos={videos} />
        </>
      )}
    </Flex>
  );
}
