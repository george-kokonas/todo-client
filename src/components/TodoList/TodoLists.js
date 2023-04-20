import TodoItem from "../TodoItem/TodoItem";

import Button from "react-bootstrap/Button";
import "./TodoLists.css";

const TodoList = (props) => {
  // console.log(props);
  if (props.items.length < 1) return;

  const deleteMultipleHandler = () => {
    props.onDeleteItem();
  };

  return (
    <ul className='container-ul'>
      {props.items.map((item) => (
        <TodoItem
          todoText={item.todoText}
          key={item._id}
          id={item._id}
          isCompleted={item.isCompleted}
          onEditItem={props.onEditItem}
          onCheckItem={props.onCheckItem}
        />
      ))}
      <Button
        className='delete-checked-btn'
        variant='danger'
        onClick={deleteMultipleHandler}
      >
        Delete Checked
      </Button>
    </ul>
  );
};

export default TodoList;
