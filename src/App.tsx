import { useState } from "react";
import "./App.css";
import { Todo } from "./models/Todo";
import { TodoHtml } from "./components/TodoHtml";
import { TodoForm } from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    new Todo("Träna", false),
    new Todo("plugga", false),
  ]);

  const activeTodos = todos.filter((todo) => !todo.done);
  const completedTodos = todos.filter((todo) => todo.done);

  const toggleTodo = (clickedTodo: Todo) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === clickedTodo.id) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      })
    );
  };

  const addTodo = (newTodo: Todo) => {
    setTodos([...todos, new Todo(newTodo.title, newTodo.done)]);
  };

  return (
    <>
      <div className="todos-section">
        <h2>Active Todos</h2>
        {activeTodos.map((t) => (
          <TodoHtml todo={t} key={t.id} toggleTodo={() => toggleTodo(t)} />
        ))}
      </div>

      {completedTodos.length > 0 && (
        <div className="completed-todos-section">
          <h2>Completed Todos</h2>
          {completedTodos.map((t) => (
            <TodoHtml todo={t} key={t.id} toggleTodo={() => toggleTodo(t)} />
          ))}
        </div>
      )}

      <TodoForm addTodo={addTodo} />
    </>
  );
}
export default App;
