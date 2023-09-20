import style from "./Form.module.css";
const Form = () => {
  return (
    <form>
      <input
        type="text"
        name="task"
        placeholder="Enter todo"
        className={style.taskInput}
      />
      <button className={style.button}>Add</button>
    </form>
  );
};

export default Form;
