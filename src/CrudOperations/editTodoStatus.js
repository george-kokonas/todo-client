import axios from "axios";
import getTodos from "./getTodos";

const EditTodoStatus = async (todos, markedItemId) => {
  const checkedItemIndex = todos.indexOf(
    todos.find((item) => item._id === markedItemId)
  );
  const itemStatus = todos[checkedItemIndex].isCompleted;

  try {
    await axios.put(
      `https://backend-todo.herokuapp.com/todos/updateStatus/${markedItemId}`,
      {
        itemStatus,
      }
    );
    const data = await getTodos();
    return data;
  } catch (error) {
    alert("Unable to check completed todo...");
    console.log(error);
  }
};

export default EditTodoStatus;
