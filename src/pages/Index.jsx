import { Container, Text, VStack, Heading, Box, Button, Flex, Image } from "@chakra-ui/react";
import { FaCode, FaLaptopCode, FaChalkboardTeacher } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.lg" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to CodeMaster Academy
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Your journey to becoming a coding master starts here. Learn, practice, and master coding with our interactive courses.
        </Text>
        <Flex justifyContent="center" alignItems="center" wrap="wrap" spacing={8}>
          <Box textAlign="center" p={5} m={3} borderWidth="1px" borderRadius="lg" width="250px">
            <FaCode size="3em" />
            <Heading as="h3" size="md" mt={4}>
              Learn
            </Heading>
            <Text mt={2}>
              Interactive courses designed to teach you the fundamentals and advanced concepts of coding.
            </Text>
          </Box>
          <Box textAlign="center" p={5} m={3} borderWidth="1px" borderRadius="lg" width="250px">
            <FaLaptopCode size="3em" />
            <Heading as="h3" size="md" mt={4}>
              Practice
            </Heading>
            <Text mt={2}>
              Hands-on exercises and projects to apply what you've learned and build real-world skills.
            </Text>
          </Box>
          <Box textAlign="center" p={5} m={3} borderWidth="1px" borderRadius="lg" width="250px">
            <FaChalkboardTeacher size="3em" />
            <Heading as="h3" size="md" mt={4}>
              Master
            </Heading>
            <Text mt={2}>
              Master coding with our advanced courses and become a professional developer.
            </Text>
          </Box>
        </Flex>
        <Button colorScheme="teal" size="lg" mt={8}>
          Get Started
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;