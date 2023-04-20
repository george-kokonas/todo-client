import { useState, useEffect } from "react";

import AddToDo from "./components/AddTodo/AddTodo";
import TodoLists from "./components/TodoList/TodoLists";

// request functions
import getTodos from "./CrudOperations/getTodos";
import postTodo from "./CrudOperations/postTodo";
import deleteTodo from "./CrudOperations/deleteTodo";
import editTodo from "./CrudOperations/editTodo";
import editTodoStatus from "./CrudOperations/editTodoStatus";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const initializeData = async () => {
      const data = await getTodos();
      setTodos(data);
    };
    initializeData();
  }, []);

  const addItemHandler = async (taskText) => {
    const data = await postTodo(taskText);
    setTodos(data);
  };

  const deleteItemHandler = async () => {
    const data = await deleteTodo(todos);
    setTodos(data);
  };

  const editItemHandler = async (taskObj) => {
    const data = await editTodo(taskObj);
    setTodos(data);
  };

  const markItemHandler = async (markedItemId) => {
    const data = await editTodoStatus(todos, markedItemId);
    setTodos(data);
  };

  return (
    <div className='container-main'>
      <div className='container-list'>
        <AddToDo className='form' onAddTodo={addItemHandler} />
        <TodoLists
          items={todos}
          onEditItem={editItemHandler}
          onDeleteItem={deleteItemHandler}
          onCheckItem={markItemHandler}
        />
      </div>
    </div>
  );
}

export default App;
