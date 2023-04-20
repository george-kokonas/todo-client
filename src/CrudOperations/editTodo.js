import axios from "axios";
import getTodos from "./getTodos";

const EditTodo = async (taskObj) => {
  const { id, newText } = taskObj;
  try {
    await axios.put(`https://todo-app-server-wbjv.onrender.com/todos/update/${id}`, { newText });
    const data = await getTodos();
    return data;
  } catch (error) {
    alert("Unable to edit...");
    console.log(error);
  }
};

export default EditTodo;
