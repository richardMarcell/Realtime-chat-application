"use client";

import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

const LoginPage = () => {
  const [showedPassword, setShowedPassword] = useState<boolean>(false);

  const handlePasswordShowed = () => {
    setShowedPassword(!showedPassword);
  };

  return (
    <Box>
      <Flex
        alignItems={{
          xl: "normal",
          lg: "normal",
          md: "center",
          sm: "center",
          base: "center",
        }}
      >
        <Image
          position="fixed"
          top="0"
          left={{
            xl: "10",
            lg: "10",
          }}
          bottom="0"
          height="100%"
          src="/loginIlustration.svg"
          alt="login ilustration"
          display={{
            xl: "block",
            lg: "block",
            md: "none",
            sm: "none",
            base: "none",
          }}
        />

        <Flex
          flexDir="column"
          justifyContent={{
            xl: "normal",
            lg: "normal",
            md: "center",
            sm: "center",
            base: "center",
          }}
          paddingTop={{
            xl: "180px",
            lg: "180px",
            md: "150px",
            sm: "150px",
            base: "150px",
          }}
          paddingRight={{
            xl: "200px",
            lg: "200px",
            md: "20%",
            sm: "20%",
            base: "20%",
          }}
          paddingLeft={{
            xl: "100px",
            lg: "100px",
            md: "20%",
            sm: "20%",
            base: "20%",
          }}
          position={{
            xl: "fixed",
            lg: "fixed",
            md: "static",
            sm: "static",
            base: "static",
          }}
          top="0"
          right="0"
          bottom="0"
          width={{ xl: "50%", lg: "50%", md: "100%", sm: "100%", base: "100%" }}
        >
          <Heading
            marginBottom="10px"
            textAlign={{
              xl: "left",
              lg: "left",
              md: "center",
              sm: "center",
              base: "center",
            }}
          >
            Welcome Back!!
          </Heading>
          <Text
            textAlign={{
              xl: "left",
              lg: "left",
              md: "center",
              sm: "center",
              base: "center",
            }}
            marginBottom="10px"
          >
            Start Conversation with Your Friend and Family
          </Text>
          <Image
            src="/logo.svg"
            alt="logo"
            display={{
              xl: "none",
              lg: "none",
              md: "block",
              sm: "block",
              base: "block",
            }}
            width="150px"
            marginX="auto"
            marginBottom="50px"
          />
          <Stack spacing={4}>
            <InputGroup marginBottom="20px">
              <InputLeftElement pointerEvents="none">📧</InputLeftElement>
              <Input type="email" placeholder="example@gmail.com" />
            </InputGroup>

            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                color="gray.300"
                fontSize="1.2em"
                children="🔑"
              />
              <Input
                placeholder="Input Your Password"
                type={showedPassword ? "text" : "password"}
              />
              <InputRightElement
                cursor="pointer"
                onClick={handlePasswordShowed}
              >
                {showedPassword ? "🙉" : "🙈"}
              </InputRightElement>
            </InputGroup>

            <Button marginTop="10px" colorScheme="orange">
              Login
            </Button>
          </Stack>

          <Flex
            marginTop="50px"
            justifyContent="space-between"
            alignItems="center"
          >
            <Divider mx="10px" />
            <Text color="gray.200">Or</Text>
            <Divider mx="10px" />
          </Flex>

          <Button
            marginTop="30px"
            colorScheme="whiteAlpha"
            border="0.5px solid gray"
          >
            <Flex justifyContent="center" alignItems="center">
              <Image src="/google.svg" width="20px" alt="login with google" />
              <Text color="black" ml="20px">
                Login With Google
              </Text>
            </Flex>
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default LoginPage;
