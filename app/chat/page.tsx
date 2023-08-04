"use client";

import ChatDetail from "@/components/ChatDetail/page";
import ChatList from "@/components/ChatList/page";
import Sidebar from "@/components/sidebar/page";
import { Flex } from "@chakra-ui/react";

const ChatPage = () => {
  return (
    <Flex>
      <Sidebar />
      <ChatList />
      <ChatDetail />
    </Flex>
  );
};

export default ChatPage;
