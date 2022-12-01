/* eslint-disable @next/next/no-img-element */
import { useImageContext } from "../context/Image";
import {
  Box,
  Button,
  Image,
  Flex,
  Text
} from "@chakra-ui/react";
import React, { useState } from "react";
import useScreenshot from "../hooks/useScreenshot";

export const ImageEditor = () => {
  const { image } = useImageContext();
  const { generateImage, captureRef, status } = useScreenshot();

  return (
    <Box>
      <Box overflow="hidden">
        <Flex mt="3" position="relative" ref={captureRef} justify="center">
          <Box style={{ position: "absolute", top: "35%" }}>
            <Text
              fontSize="50px"
              color="#FFF"
              opacity={0.8}
            >
              This is a watermark
            </Text>
          </Box>
          <Image src={image} width="512px" height="512px" alt="" />
        </Flex>
      </Box>
      <Box mt={8}>
        <Button
          colorScheme="blue"
          rounded={0}
          boxShadow="xl"
          type="submit"
          width="100%"
          isLoading={status === "loading"}
          onClick={generateImage}
          hidden={image ? false : true}
        >
          Generate
        </Button>
      </Box>
    </Box>
  );
};
