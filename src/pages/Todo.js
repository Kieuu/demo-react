import { Button } from "@chakra-ui/react";
import TodoItem from "../components/todo/TodoItem";
import TodoData from "../mockup/todoData.json";
import {Login, Logout} from "../services/auth";
import { getAllPosts } from "../services/posts";
function Todo() {
  const data = TodoData.data;
  return (
    <>
      <Button onClick={()=>{Login()}}>Login</Button>
      <Button onClick={()=>{getAllPosts()}}>GET</Button>
      <Button onClick={()=>{Logout()}}>Logout</Button>
      {data.map((item) => (
        <TodoItem id={item.id} content={item.content} key={item.id} />
      ))}{" "}
    </>
  );
}

export default Todo;
