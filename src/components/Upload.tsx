import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useImageContext } from "../context/Image";
import {
  Box,
  Text,
  Alert,
  AlertIcon
} from "@chakra-ui/react";
import React, { useState } from "react";

export const Upload = () => {
  const { setImage } = useImageContext();
  const [sizeVaild, setSizeVaild] = useState<boolean>(true);

  const onDrop = useCallback((files) => {
    const image = new Image();
    image.addEventListener('load', () => {
        if (image.width == 512 && image.height == 512) setImage(URL.createObjectURL(files[0]));
        else setSizeVaild(false);
    });
    image.src = URL.createObjectURL(files[0])
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Box>
      <Box
        cursor="pointer"
        bg="#ddd"
        color="black"
        p={4}
        display="flex"
        alignItems="center"
        justifyContent="center"
        my={8}
        height={100}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <Text>Put here ...</Text>
        ) : (
          <Text fontSize="20px">+ Drag an image here, or click to select</Text>
        )}
      </Box>
      <Box>
        <Alert status="warning" hidden={sizeVaild}>
          <AlertIcon />
          Image size must be 512x512
        </Alert>
      </Box>
    </Box>
  );
};
