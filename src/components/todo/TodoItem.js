import { VStack, Button, Checkbox, HStack, Image, Text } from "@chakra-ui/react";
function TodoItem({ id, content }) {
  return (
    <VStack
      spacing={4}
      align='stretch'
      borderRadius={"6px"}
      boxShadow={"0px 1px 17px rgba(0, 0, 0, 0.09)"}
      h={"70px"}
      margin={"22px 0"}
      padding={"18px 25px"}
    >
      <HStack justifyContent={'space-between'} alignItems='center'>
        <HStack>
          <Checkbox size='lg' colorScheme='orange' defaultChecked />
          <Text>{content}</Text>
        </HStack>
        <Button
          colorScheme="white"
          padding={'0 15px 0'}
        >
          <Image src="/icon/Edit.svg" />
        </Button>
      </HStack>
    </VStack>
  );
}

export default TodoItem;
