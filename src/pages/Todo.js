import TodoItem from "../components/todo/TodoItem";
import TodoData from "../mockup/todoData.json";
function Todo() {
  const data = TodoData.data;
  console.log(data);
  return data.map((item) => <TodoItem id={item.id} content={item.content} />);
}

export default Todo;
