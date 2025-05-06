import { Todo } from "../models/Todo";
import "./TodoHtml.css";

type TodoHtmlProps = {
  todo: Todo;
  toggleTodo: (todo: Todo) => void;
};

export const TodoHtml = (props: TodoHtmlProps) => {
  const handleChange = () => {
    props.toggleTodo(props.todo);
  };

  return (
    <>
      <div className="todo">
        <input
          type="checkbox"
          checked={props.todo.done}
          onChange={handleChange}
        />
        <h3>{props.todo.title}</h3>
      </div>
    </>
  );
};
