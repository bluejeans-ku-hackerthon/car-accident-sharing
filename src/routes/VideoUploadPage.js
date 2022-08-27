import React, { useState, useEffect } from "react";
import { Button, Flex, Center, Input, Text, Box } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { AiFillFileAdd } from "react-icons/ai";
import { IoPersonCircleSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import { ref, uploadBytes } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";

import { storage, db } from "../firebase.js";
import LoadingAnimation from "../components/LoadingAnimation";

function VideoUploadPage() {
  const navigate = useNavigate();
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    multiple: false,
    accept: {
      "video/*": [],
    },
  });

  const [file, setFile] = useState(acceptedFiles);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setFile(acceptedFiles);
  }, [acceptedFiles]);

  const submitVideo = async () => {
    const uploadedVideoName = await uploadVideo();

    try {
      await addVideoInfoToDB(uploadedVideoName);
    } catch (error) {
      setIsLoading(false);
      console.log("영상을 업로드하지 못했습니다. 다시 시도해주세요 🥲");
    }
  };

  const uploadVideo = async () => {
    setIsLoading(true);
    const videoRef = ref(storage, file[0].name);
    const {
      metadata: { name },
    } = await uploadBytes(videoRef, file[0]);

    return name;
  };

  const addVideoInfoToDB = async (name) => {
    await addDoc(collection(db, "videos"), {
      name,
      comments: {},
    });
    setIsLoading(false);
    navigate("/user/complete");
  };

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      px="3rem"
      h="100vh"
      position="relative"
    >
      {isLoading && <LoadingAnimation />}

      <Link to="/user/resultList">
        <Center color="#3F8CFF" position="absolute" top="2rem" right="1rem">
          <IoPersonCircleSharp size="3rem" />
        </Center>
      </Link>

      <Box mt="2rem" textAlign="center" fontWeight="bold" mb="2rem">
        <Text>전문가에게 분석받고 싶은</Text>
        <Text fontSize="lg">교통사고 영상을 올려주세요</Text>
      </Box>

      {/* Video Dropzone */}
      <Flex
        _hover={{ cursor: "pointer" }}
        bgColor="#f5f6fa"
        width="100%"
        height="50vh"
        borderRadius="2rem"
        border="1px solid light gray"
        direction="column"
        alignItems="center"
        justifyContent="center"
        px="1rem"
        color="blue"
        {...getRootProps()}
      >
        <Input {...getInputProps()} />
        {file[0] ? (
          <CheckCircleIcon color="#2ecc71" w="6rem" h="6rem" />
        ) : (
          <AiFillFileAdd color="#3F8CFF" size="8rem" />
        )}
        {file[0] && (
          <Text textAlign="center" fontSize="sm" mt="1rem">
            {file[0].name}
          </Text>
        )}
      </Flex>

      <Button
        mt="4rem"
        bgColor={file[0] ? "blue" : "gray"}
        disabled={file[0] ? false : true}
        color="white"
        w="15rem"
        h="4rem"
        fontSize="xl"
        fontWeight="bold"
        onClick={submitVideo}
      >
        분석 접수
      </Button>
    </Flex>
  );
}

export default VideoUploadPage;
