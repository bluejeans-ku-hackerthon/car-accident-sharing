import { Flex } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import LoadingAnimation from "../components/LoadingAnimation";
import OpinionArea from "../components/OpinionArea";
import Ratio from "../components/Ratio";
import useFetchVideoName from "../hooks/useFetchVideoName";

export default function VideoReviewPage() {
  const { videoId } = useParams();
  const { videoName, isLoading } = useFetchVideoName(videoId);

  return (
    <Flex width="100%" direction="column" justifyContent="center">
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <>
          <video
            autoPlay
            src={`https://firebasestorage.googleapis.com/v0/b/gongcha-2b0f0.appspot.com/o/${videoName}?alt=media`}
            controls
            width="100%"
          ></video>
          <Flex direction="column" p="3rem">
            <Ratio />
            <OpinionArea />
          </Flex>
        </>
      )}
    </Flex>
  );
}
