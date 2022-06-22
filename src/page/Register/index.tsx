import React from 'react';
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Center
} from '@chakra-ui/react';
import Footer from '../../component/footer'

export default function Register() {
    return (
    <div>
    <Center h="100vh">
      <Flex width="full" align="center" justifyContent="center">
        <Box p={2}>
            <Box textAlign="center">
            <Heading as="h1" size="lg" letterSpacing={"10px"}>
                AS<span style={{color: "#2b51cb"}}>TI</span><span style={{letterSpacing: "2px"}}>(Atasi <span style={{color: "#2b51cb"}}>Stunting</span>)</span>
                <br/><br/>
            </Heading>
          </Box>
          <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
            <form>
              <FormControl>
                <FormLabel aria-required>Email</FormLabel>
                <Input type="email" placeholder="email@email.com" isRequired/>
              </FormControl>
              <FormControl mt={6}>
                <FormLabel>Password</FormLabel>
                <Input type="password" placeholder="******" isRequired/>
              </FormControl>
              <Button width="full" mt={4} type="submit" color="#2b51cb" borderColor="#2b51cb" borderWidth="1px" bg="white"
               _hover={{ bg: "#2b51cb", color:"white"}}>
                Login
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    </Center>
    <Footer/>
    </div>
    );
  }