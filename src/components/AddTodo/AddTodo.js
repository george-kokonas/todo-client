import { useState, } from "react";

import Button from 'react-bootstrap/Button';
import "../AddTodo/AddTodo.css";

const AddToDo = (props) => {
  const [taskText, setTaskText] = useState("");

  const inputChangeHandler = (event) => {
    setTaskText(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (taskText.trim().length === 0) return;
    /*lifting the state up to App.js (passing data from child to parent)*/
    props.onAddTodo(taskText);
    setTaskText("");
  }

  return (
    <div className="form-container">
      <form onClick={submitHandler} >
        <h2 id="header">Todo List</h2>
        <input
          type="text"
          //two-way binding (the component feeds back the view with data)
          onChange={inputChangeHandler}
          value={taskText}>
        </input>

        <Button type="submit" variant="success">add Todo...</Button>
        <span id="infos">click on a task to mark as complete.</span>
      </form>
    </div>
  )
}

export default AddToDo;
