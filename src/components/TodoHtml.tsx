import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Todo } from "../models/Todo";
import "./TodoHtml.css";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

type TodoHtmlProps = {
  todo: Todo;
  toggleTodo: (todo: Todo) => void;
  removeTodo: (todo: Todo) => void;
};

export const TodoHtml = (props: TodoHtmlProps) => {
  const handleChange = () => {
    props.toggleTodo(props.todo);
  };

  const handelClick = () => {
    props.removeTodo(props.todo);
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
        <button className="trash-can" onClick={handelClick}>
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </div>
    </>
  );
};
