import axios from "axios";
import getTodos from "./getTodos";

const DeleteTodo = async (todos) => {
  const hasCompletedTodos = todos.some((item) => item.isCompleted);

  if (!hasCompletedTodos) return;
  try {
    await axios.delete(`https://backend-todo.herokuapp.com/todos/delete`);
    const data = await getTodos();
    return data;
  } catch (error) {
    alert("Unable to delete...");
    console.log(error);
  }
};

export default DeleteTodo;
