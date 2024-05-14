import { useState } from "react";
import { Container, VStack, HStack, Input, Button, Text, Box, IconButton, Avatar } from "@chakra-ui/react";
import { FaPaperPlane, FaUserCircle } from "react-icons/fa";

const messagesData = [{ id: 1, sender: "bot", text: "Welcome to Wanderlust AI! How can I assist you with your travel plans today?" }];

const Index = () => {
  const [messages, setMessages] = useState(messagesData);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim() === "") return;

    const newMessage = { id: messages.length + 1, sender: "user", text: input };
    setMessages([...messages, newMessage]);
    setInput("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse = { id: messages.length + 2, sender: "bot", text: "Thank you for your message! We're processing your request." };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 1000);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Box width="100%" height="60vh" overflowY="auto" border="1px solid #e2e8f0" borderRadius="md" p={4}>
          {messages.map((message) => (
            <HStack key={message.id} justifyContent={message.sender === "user" ? "flex-end" : "flex-start"} mb={2}>
              {message.sender === "bot" && <Avatar icon={<FaUserCircle />} />}
              <Box bg={message.sender === "user" ? "blue.500" : "gray.200"} color={message.sender === "user" ? "white" : "black"} px={4} py={2} borderRadius="md">
                <Text>{message.text}</Text>
              </Box>
              {message.sender === "user" && <Avatar icon={<FaUserCircle />} />}
            </HStack>
          ))}
        </Box>
        <HStack width="100%">
          <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type your message..." />
          <IconButton aria-label="Send message" icon={<FaPaperPlane />} onClick={handleSendMessage} />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
