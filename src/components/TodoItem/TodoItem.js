import { useState } from "react";

import Button from "react-bootstrap/Button";
import "./TodoItem.css";

const TodoItem = (props) => {
  const [taskText, setTaskText] = useState(props.todoText);
  const [editing, setEditing] = useState(false);

  const editHandler = () => {
    setEditing(!editing);
  };

  const inputChangeHandler = (event) => {
    setTaskText(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    editHandler();

    //short-circuit (returns the first falsy expression immediately(lazy evaluation), otherwise the last one)
    return taskText && props.onEditItem({ id: props.id, newText: taskText });
  };

  const checkTaskHandler = () => {
    props.onCheckItem(props.id);
  };

  const viewList = (
    <div>
      <li
        className={`item ${props.isCompleted ? "checked" : ""}`}
        onClick={checkTaskHandler}
      >
        {props.todoText}
      </li>
      <Button className='li-btn' variant='secondary' onClick={editHandler}>
        Edit
      </Button>
    </div>
  );

  const editList = (
    <div className='container-edit'>
      <form>
        <input
          className='edit-inp'
          type='text'
          onChange={inputChangeHandler}
          value={taskText}
        />
        <Button
          type='submit'
          className='ok-btn'
          variant='success'
          onClick={submitHandler}
        >
          Ok!
        </Button>
      </form>
    </div>
  );

  return (
    <div className='container-items'>{!editing ? viewList : editList} </div>
  );
};

export default TodoItem;
