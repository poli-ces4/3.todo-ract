const TodoItem = ({ todo }) => {
  return (
    <li>
      <div>{todo.title}</div>
    </li>
  );
};

export default TodoItem;
