"use client";

import {
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  Divider,
  Image,
  Flex,
  Text,
  Heading,
  Avatar,
  Box,
  Tooltip,
} from "@chakra-ui/react";
import React, { useState } from "react";

export default function Sidebar() {
  const btnRef = React.useRef();

  const [open, setOpen] = useState<boolean>(false);

  const [isSmall, setIsSmall] = useState<boolean>(true);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleSidebarWidhtChange = () => {
    setIsSmall(!isSmall);
  };

  const navigations: { id: number; name: string; icon: string }[] = [
    {
      id: 1,
      name: "Dashboard",
      icon: "📈",
    },
    {
      id: 2,
      name: "Chat",
      icon: "✉️",
    },
    {
      id: 3,
      name: "Status",
      icon: "⌛",
    },
    {
      id: 4,
      name: "Call",
      icon: "📞",
    },
  ];

  return (
    <>
      <Flex
        height="100vh"
        width={isSmall ? "5%" : "20%"}
        padding={isSmall ? "0px" : "20px"}
        boxShadow="md"
        backgroundColor="whiteAlpha.400"
        flexDir="column"
        display={{
          xl: "block",
          lg: "block",
          md: "none",
          sm: "none",
          base: "none",
        }}
        transition="ease-in-out 0.3s"
      >
        <Box
          backgroundColor="white"
          padding="10px"
          borderRadius="full"
          boxShadow="lg"
          textAlign="center"
          position="fixed"
          left={isSmall ? "50px" : "270px"}
          top="80px"
          cursor="pointer"
          onClick={handleSidebarWidhtChange}
          transition="ease-in-out 0.3s"
        >
          {isSmall ? "▶️" : "◀️"}
        </Box>
        <Image
          src={isSmall ? "/logoImage.svg" : "/logo.svg"}
          alt="logo"
          width={isSmall ? "35px" : "170px"}
          marginTop={isSmall ? "20px" : "0px"}
          marginLeft={isSmall ? "20px" : "0px"}
        />
        <Box marginTop={isSmall ? "100px" : "50px"}>
          {navigations.map((navigation) => (
            <Flex
              marginTop="20px"
              key={navigation.id}
              _hover={{
                backgroundColor: "primary.200",
                borderRadius: "lg",
                color: "white",
              }}
              paddingTop="5px"
              paddingBottom="5px"
              cursor="pointer"
              paddingX={isSmall ? "20px" : "0px"}
              alignItems="center"
              transition="ease-in-out 0.2s"
              justifyContent={isSmall ? "center" : "normal"}
            >
              <Flex alignItems="center" justifyContent="space-between">
                {isSmall && (
                  <Tooltip
                    fontSize="20px"
                    width="150px"
                    marginLeft="20px"
                    backgroundColor="primary.100"
                    padding="10px"
                    label={navigation.name}
                    placement="right"
                  >
                    <Text fontSize="25px">{navigation.icon}</Text>
                  </Tooltip>
                )}
                <Text
                  fontSize="30px"
                  marginRight="10px"
                  display={isSmall ? "none" : "block"}
                  transition="display ease-in-out 0.2s"
                >
                  {navigation.icon}
                </Text>
                <Text
                  fontSize="20px"
                  display={isSmall ? "none" : "block"}
                  transition="display ease-in-out 0.2s"
                >
                  {navigation.name}
                </Text>
              </Flex>
            </Flex>
          ))}
        </Box>
        <Box marginTop="350px">
          <Flex
            marginRight={isSmall ? "0px" : "50px"}
            justifyContent={isSmall ? "center" : "normal"}
            cursor="pointer"
          >
            <Avatar
              marginRight={isSmall ? "0" : "2"}
              size={isSmall ? "sm" : "md"}
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
            />
            <Flex
              flexDir="column"
              display={isSmall ? "none" : "block"}
              transition="display ease-in-out 0.2s"
            >
              <Text fontWeight="bold">Richard Marcell</Text>
              <Text fontSize="12px">richard.marcell8888@gmail.com</Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>

      {/* navigation on medium and small device */}
      <Flex
        margin="10px"
        display={{
          xl: "none",
          lg: "none",
          md: "block",
          sm: "block",
          base: "block",
        }}
        height="50px"
        onClick={handleDrawerOpen}
        flexDir="column"
        padding="15px"
        borderRadius="md"
        backgroundColor="primary.100"
        width="60px"
        cursor="pointer"
        _hover={{ backgroundColor: "facebook.500" }}
      >
        <Box
          width="7"
          borderRadius="lg"
          marginBottom="4px"
          height="1"
          backgroundColor="white"
        ></Box>
        <Box
          width="5"
          borderRadius="lg"
          marginBottom="4px"
          height="1"
          backgroundColor="white"
        ></Box>
        <Box
          width="7"
          borderRadius="lg"
          marginBottom="4px"
          height="1"
          backgroundColor="white"
        ></Box>
      </Flex>
      <Drawer
        size="xs"
        isOpen={open}
        placement="left"
        onClose={() => handleDrawerOpen()}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Image src="/logo.svg" alt="logo" width="170px" />
          </DrawerHeader>

          <DrawerBody>
            {navigations.map((navigation) => (
              <Flex
                marginTop="20px"
                key={navigation.id}
                _hover={{
                  backgroundColor: "primary.200",
                  borderRadius: "lg",
                  color: "white",
                }}
                transition="ease-in-out 0.3s"
                paddingTop="5px"
                paddingBottom="5px"
                cursor="pointer"
                alignItems="center"
                boxSizing="border-box"
              >
                <Flex alignItems="center" justifyContent="space-between">
                  <Text fontSize="30px" marginRight="2">
                    {navigation.icon}
                  </Text>
                  <Text fontSize="20px">{navigation.name}</Text>
                </Flex>
              </Flex>
            ))}
          </DrawerBody>

          <DrawerFooter>
            <Flex marginRight="50px">
              <Avatar
                marginRight="2"
                size="md"
                name="Dan Abrahmov"
                src="https://bit.ly/dan-abramov"
              />
              <Flex flexDir="column">
                <Text fontWeight="bold">Richard Marcell</Text>
                <Text fontSize="12px">richard.marcell8888@gmail.com</Text>
              </Flex>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
