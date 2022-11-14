import { Box, Button, Checkbox, HStack, Image, Text } from "@chakra-ui/react";
function TodoItem({ id, content }) {
  return (
    <Box
      borderRadius={"6px"}
      boxShadow={"0px 1px 17px rgba(0, 0, 0, 0.09)"}
      w={"1130px"}
      h={"70px"}
      margin={"22px 0"}
      padding={"18px 25px"}
    >
      <HStack justifyContent={'space-between'} alignItems='center'>
        <HStack>
          <Checkbox />
          <Text>{content}</Text>
        </HStack>
        <Button>
          <Image src="/icon/Edit.svg" />
        </Button>
      </HStack>
    </Box>
  );
}

export default TodoItem;
