import {
  Button, InputGroup, Box, InputLeftElement, Heading
} from "@chakra-ui/react";
import { Login, Logout } from "../services/auth";
import { LockIcon, EmailIcon } from "@chakra-ui/icons";
import {
  Flex,
  Input,
  Stack,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
} from "@chakra-ui/react";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Home() {
// const token = localStorage.getItem('token')
// useEffect(()=> {
//   console.log('token',token);
// },[])
// const navigate = useNavigate()
// useEffect(()=> {
//   if (token) {
//     navigate('/todo')
//   } else {
//     navigate('/')
//   }
// })
const handleClick = Login()
  return (
    <>
      <Flex
        flexDirection="column"
        width="100wh"
        height="100vh"
        backgroundImage="url('/background.jpg')"
      >
        <Heading margin={'40px 150px'} color={'#404040'}>HOME PAGE</Heading>
        <Stack
          flexDir="column"
          mb="2"
          justifyContent="center"
          alignItems="center"
          margin={'100px 0'}
        >
          <Avatar bg="orange.500" />
          <Heading color="orange.400">Welcome</Heading>
          <Box minW={{ base: "90%", md: "468px" }} >
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<EmailIcon color="gray.300" />}
                  />
                  <Input type="email" placeholder="Email address" />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<LockIcon color="gray.300" />}
                  />
                  <Input
                    placeholder="Password"
                  />
                </InputGroup>
                <FormHelperText textAlign="right">
                  <Link>Forgot password?</Link>
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="orange"
                width="full"
                onClick={() => { Login() }}
              >
                Login
              </Button>
            </Stack>
          </Box>
          <Box>
            New to us?{" "}
            <Link color="orange.500" href="#">
              Sign Up
            </Link>
          </Box>
        </Stack>
      </Flex>
    </>);
}




export default Home;
