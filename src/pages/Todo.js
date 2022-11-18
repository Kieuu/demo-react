import { Button } from "@chakra-ui/react";
import TodoItem from "../components/todo/TodoItem";
import TodoData from "../mockup/todoData.json";
import { Logout } from "../services/auth";
import {
  HStack, Input, InputGroup, Box, InputLeftElement, Heading, Image
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
function Todo() {
  const data = TodoData.data;
  return (
    <>
      <Box padding={"22px 0"} background={'#FF8C00'}>
        <HStack spacing={10} margin={'0 50px 0 20px'}>
          <Image
            borderRadius='full'
            boxSize='65px'
            src='/ganbatte.gif'
            alt='We can do it'
          />
          <InputGroup >
            <InputLeftElement
              pointerEvents='none'
              children={<SearchIcon color='gray.300' />}
            />
            <Input type={"text"} placeholder={'Search'} background={'white'}></Input>
          </InputGroup>
          <Button
            type="submit"
            variant="solid"
            colorScheme="red"
            padding={'0 15px 0'}
            onClick={() => { Logout() }}>Logout</Button>
        </HStack>
      </Box>
      <Box margin={'50px 150px'}>
        <Heading >TODO LIST</Heading>
        <Box margin={'40px 0'}>
          {data.map((item) => (
            <TodoItem id={item.id} content={item.content} key={item.id} />
          ))}{" "}
        </Box>
      </Box>
    </>
  );
}

export default Todo;
