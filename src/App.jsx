import { useEffect, useState } from "react";
import Todos from "./components/todos";
import Form from "./components/Form";
import Header from "./components/Header";

function App() {
  const initialTodo = [
    {
      todoName: "Add Todo",
      isCompleted: false,
    },
  ];

  const parseLocalTodo = (value) => {
    return JSON.parse(localStorage.getItem(`${value}`));
  };

  const [todo, setTodo] = useState("");
  const [allTodos, setAllTodos] = useState(
    !localStorage.getItem("todo-list")
      ? initialTodo
      : parseLocalTodo("todo-list")
  );

  const [theme, setTheme] = useState(
    !localStorage.getItem("dark-mode") ? "dark" : parseLocalTodo("dark-mode")
  );

  useEffect(() => {
    localStorage.setItem("todo-list", JSON.stringify(allTodos));
    localStorage.setItem("dark-mode", JSON.stringify(theme));
  }, [allTodos, theme]);

  const changeTheme = () => {
    setTheme(theme == "light" ? "dark" : "light");
    if (theme == "light") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  const handleInput = (e) => {
    setTodo(e.target.value);
  };

  const addTodo = (event) => {
    event.preventDefault();

    const checkSameTodo = allTodos.find((item) => item.todoName === todo);

    if (todo != "" && !checkSameTodo) {
      setAllTodos([
        ...allTodos,
        {
          todoName: todo,
          isCompleted: false,
        },
      ]);
    }
    setTodo("");
  };

  const deleteTodo = (index) => {
    allTodos.splice(index, 1);
    setAllTodos([...allTodos]);
  };

  const handleMark = (index) => {
    allTodos[index].isCompleted = !allTodos[index].isCompleted;
    setAllTodos([...allTodos]);
  };

  return (
    <div className="flex flex-col item-center text-center h-[100%] dark:bg-black">
      <Header changeTheme={changeTheme} />
      <Form handleInput={handleInput} addTodo={addTodo} todo={todo} />
      <div className="flex flex-col justify-center items-center">
        {allTodos.map((item) => (
          <Todos
            key={item.id}
            deleteTodo={deleteTodo}
            allTodos={allTodos}
            handleMark={handleMark}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
