import { Button } from "@chakra-ui/react";
import TodoItem from "../components/todo/TodoItem";
import TodoData from "../mockup/todoData.json";
// import { Login, Logout } from "../services/auth";
// import { getAllPosts } from "../services/posts";
import {
  HStack, Input, InputGroup, Box, InputLeftElement, Heading, Text
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
function Todo() {
  const data = TodoData.data;
  return (
    <>
      <Box padding={"22px 0"} background={'#FF8C00'}>
        <HStack spacing={10} margin={'0 50px 0 150px'}>
          <InputGroup >
            <InputLeftElement
              pointerEvents='none'
              children={<SearchIcon color='gray.300' />}
            />
            <Input type={"text"} placeholder={'Search'} background={'white'}></Input>
          </InputGroup>
          <Text color='white' fontSize='xl'>Annabell</Text>
        </HStack>
      </Box>
      <Box margin={'50px 150px'}>
        <Heading >TODO LIST</Heading>
        {/* <Button padding={'0 40px 0'} colorScheme={'red'} onClick={() => { Login() }}>Login</Button>
        <Button onClick={() => { getAllPosts() }}>GET</Button>
        <Button onClick={() => { Logout() }}>Logout</Button> */}
        <Box  margin={'40px 0'}>
        {data.map((item) => (
          <TodoItem id={item.id} content={item.content} key={item.id} />
        ))}{" "}
        </Box>
      </Box>
    </>
  );
}

export default Todo;
