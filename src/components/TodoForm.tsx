import { ChangeEvent, FormEvent, useState } from "react";
import { Todo } from "../models/Todo";

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
    <form onSubmit={handleSubmit}>
      <label htmlFor="newTodo">New Todo </label>
      <input
        type="text"
        id="newTodo"
        name="title"
        value={todo.title}
        onChange={handleChange}
      ></input>
      <button>Lägg till</button>
    </form>
  );
};
