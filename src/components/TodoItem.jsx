/* eslint-disable react/prop-types */
import style from "./TodoItem.module.css";
import { FaEdit, FaTrash, FaCheck } from "react-icons/fa";
const TodoItem = ({ todo, deleteTodo, checkTodo }) => {
  return (
    <li className={style.list}>
      <div
        className={`${style.listItem} ${todo.completed ? style.completed : ""}`}
      >
        {todo.title}
      </div>
      <div>
        <button>
          <FaEdit />
        </button>
        <button onClick={() => deleteTodo(todo)}>
          <FaTrash />
        </button>
        <button onClick={() => checkTodo(todo)}>
          <FaCheck />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
