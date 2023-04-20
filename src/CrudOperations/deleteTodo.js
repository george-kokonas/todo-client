import axios from "axios";
import getTodos from "./getTodos";

const DeleteTodo = async () => {

  try {
    await axios.delete(`https://todo-app-server-wbjv.onrender.com/todos/delete`);
    const data = await getTodos();
    return data;
  } catch (error) {
    alert("Unable to delete...");
    console.log(error);
  }
};

export default DeleteTodo;
