import { Box, Center, Circle, Stack } from "@chakra-ui/react";
import { BsFillPlayFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

import { videos } from "../db";
import { db } from "../firebase";

export default function VideoList() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    (async () => {
      const querySnapshot = await getDocs(collection(db, "videos"));
      querySnapshot.forEach((doc) => {
        if (Object.keys(doc.data().comments).length === 0) {
          setVideos((prev) => [...prev, doc.data()]);
        }
      });
    })();
  }, []);

  return (
    <Stack
      spacing="2rem"
      sx={{ "--video-width": "320px", " --video-height": "180px" }}
    >
      {/* {videos.map((video) => (
        <Link to={"/expert/videos/" + video.id} key={video.id}>
          <Center
            position="relative"
            w="var(--video-width)"
            h="var(--video-height)"
            backgroundImage={video.thumbnail}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="var(--video-width) var(--video-height)"
            borderRadius={20}
          >
            <Box
              w="var(--video-width)"
              h="var(--video-height)"
              position="absolute"
              backgroundColor="rgba(0, 0, 0, 0.5)"
              borderRadius={20}
            ></Box>
            <Circle
              position="absolute"
              size="2rem"
              bgColor="rgba(255,255,255,0.5)"
              color="white"
              zIndex={10}
              textAlign="center"
            >
              <BsFillPlayFill size={20} />
            </Circle>
          </Center>
        </Link>
      ))} */}
    </Stack>
  );
}
