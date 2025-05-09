import { ChangeEvent, FormEvent, useState } from "react";
import { Todo } from "../models/Todo";
import "./TodoForm.css";

type TodoFormProps = {
  addTodo: (t: Todo) => void;
};

export const TodoForm = (props: TodoFormProps) => {
  const [todo, setTodo] = useState<Todo>({ title: "", done: false, id: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    props.addTodo(todo);
    setTodo({ title: "", done: false, id: "" });
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <label className="form-label" htmlFor="newTodo">
        New Todo{" "}
      </label>
      <input
        className="form-input"
        type="text"
        id="newTodo"
        name="title"
        value={todo.title}
        onChange={handleChange}
      ></input>
      <button className="form-button">Lägg till</button>
    </form>
  );
};
