/* eslint-disable @next/next/no-page-custom-font */
import type { NextPage } from "next";
import Head from "next/head";
import { Upload } from "../components/Upload";
import { ImageContextProvider } from "../context/Image";
import { ImageEditor } from "../components/ImageEditor";
import {
  Flex,
  Box,
  Link,
  Text,
  Divider,
} from "@chakra-ui/react";
import { ExternalLinkIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Watermark Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <ImageContextProvider>
          <Flex maxW="xl" mx="auto" px="8" py="10">
            <Box>
              <Flex align="center" justify="space-between">
                <Text fontWeight="bold" fontSize={{ base: "2xl", md: "4xl" }}>
                  Put a watermark on your KTP
                </Text>
              </Flex>
              <Upload />
              <ImageEditor />
            </Box>
          </Flex>
        </ImageContextProvider>
      </div>
    </div>
  );
};

export default Home;
