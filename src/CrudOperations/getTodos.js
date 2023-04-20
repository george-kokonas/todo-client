import axios from "axios";

const getTodos = async () => {
  try {
    const { data } = await axios.get("https://todo-app-server-wbjv.onrender.com/todos/");
    return data;
  } catch (error) {
    alert("Something went wrong...");
    console.log(error);
  }
};

export default getTodos;
