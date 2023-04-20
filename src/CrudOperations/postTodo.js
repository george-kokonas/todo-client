import axios from "axios";
import getTodos from "./getTodos";

const PostTodo = async (taskText) => {
  const newTodo = {
    todoText: taskText,
    isCompleted: false,
  };

  try {
    await axios.post("https://todo-app-server-wbjv.onrender.com/todos/create", newTodo);
    const data = await getTodos();
    return data;
  } catch (error) {
    alert("Unable add new todo...");
    console.log(error);
  }
};

export default PostTodo;
